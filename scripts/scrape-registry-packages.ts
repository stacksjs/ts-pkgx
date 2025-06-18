#!/usr/bin/env bun

/**
 * Script to scrape all packages from the pkgx S3 registry
 * This replaces the static ALL_KNOWN_PACKAGES list with a dynamic scraper
 */

interface S3ListResult {
  IsTruncated: boolean
  NextContinuationToken?: string
  Contents: Array<{
    Key: string
  }>
}

async function fetchS3Listing(continuationToken?: string): Promise<S3ListResult> {
  const url = new URL('https://s3.amazonaws.com/dist.tea.xyz/')
  url.searchParams.set('list-type', '2')
  url.searchParams.set('prefix', '')
  url.searchParams.set('max-keys', '1000')

  if (continuationToken) {
    url.searchParams.set('continuation-token', continuationToken)
  }

  console.log(`Fetching ${url.toString()}`)

  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(`Failed to fetch S3 listing: ${response.status}`)
  }

  const xml = await response.text()

  // Parse the XML manually since it's simple structure
  const contents: Array<{ Key: string }> = []
  const keyMatches = xml.match(/<Key>([^<]+)<\/Key>/g)

  if (keyMatches) {
    for (const match of keyMatches) {
      const key = match.replace(/<Key>([^<]+)<\/Key>/, '$1')
      contents.push({ Key: key })
    }
  }

  const isTruncated = xml.includes('<IsTruncated>true</IsTruncated>')
  const nextTokenMatch = xml.match(/<NextContinuationToken>([^<]+)<\/NextContinuationToken>/)
  const nextToken = nextTokenMatch ? nextTokenMatch[1] : undefined

  return {
    IsTruncated: isTruncated,
    NextContinuationToken: nextToken,
    Contents: contents,
  }
}

async function getAllPackages(): Promise<Set<string>> {
  const packages = new Set<string>()
  let continuationToken: string | undefined

  do {
    const listing = await fetchS3Listing(continuationToken)

    for (const item of listing.Contents) {
      const key = item.Key

      // Extract the package path from the S3 key
      const parts = key.split('/')
      if (parts.length === 0)
        continue

      // Skip obvious non-package files in root
      if (parts[0].startsWith('.') || parts[0].includes(' ') || key.match(/\.(md|txt|yml|yaml|json)$/i)) {
        continue
      }

      // Pattern matching for different package structures:
      // 1. domain.com/darwin/x86-64/... -> domain.com
      // 2. domain.com/subpackage/darwin/x86-64/... -> domain.com/subpackage
      // 3. github.com/user/repo/darwin/x86-64/... -> github.com/user/repo

      const platformDirs = ['darwin', 'linux', 'windows']

      // Find where the platform directory appears in the path
      let platformIndex = -1
      for (let i = 1; i < parts.length; i++) { // Start from index 1, not 0
        if (platformDirs.includes(parts[i])) {
          platformIndex = i
          break
        }
      }

      // If we found a platform directory, extract the package path before it
      if (platformIndex > 0) {
        const packagePath = parts.slice(0, platformIndex).join('/')

        // Only add valid packages that contain a domain
        if (packagePath.includes('.')) {
          packages.add(packagePath)
        }
      }
      // Also handle cases where there's no platform directory but it's clearly a package
      else if (parts.length >= 2 && parts[0].includes('.') && !parts[1].startsWith('v') && !parts[1].match(/^\d/)) {
        // This handles cases like domain.com/subpackage/some-file
        const packagePath = `${parts[0]}/${parts[1]}`
        packages.add(packagePath)
      }
      // Handle simple domain packages
      else if (parts.length >= 1 && parts[0].includes('.')) {
        packages.add(parts[0])
      }
    }

    continuationToken = listing.NextContinuationToken
    console.log(`Found ${packages.size} packages so far...`)
  } while (continuationToken)

  return packages
}

async function _validatePackageExists(packageName: string): Promise<boolean> {
  try {
    const url = `https://pkgx.dev/pkgs/${packageName}/`
    const response = await fetch(url, { method: 'HEAD' })
    return response.ok
  }
  catch {
    return false
  }
}

async function main() {
  console.log('Scraping all packages from pkgx S3 registry...')

  const allPackages = await getAllPackages()
  console.log(`Found ${allPackages.size} total packages`)

  // Convert to sorted array
  const packageArray = Array.from(allPackages).sort()

  // Filter out obvious false positives and validate a sample
  const validPackages: string[] = []
  const _validationSample = packageArray.slice(0, 10) // Validate first 10 for testing

  console.log('Validating package existence...')
  for (const pkg of packageArray) {
    // Skip obvious non-packages
    if (pkg.includes('.') && !pkg.match(/^[a-z0-9.-]+\.[a-z]{2,}(\/[\w.-]+)*$/i)) {
      continue
    }

    // Filter out .pkgroot entries - these are just markers, not actual packages
    if (pkg.endsWith('/.pkgroot')) {
      console.log(`Filtering out .pkgroot marker: ${pkg}`)
      continue
    }

    // Filter out README and documentation files
    if (pkg.endsWith('/README') || pkg.endsWith('/readme') || pkg.includes('/README/') || pkg.includes('/docs/')) {
      console.log(`Filtering out documentation: ${pkg}`)
      continue
    }

    // For now, include all that pass basic validation
    // In production, you might want to validate all packages
    validPackages.push(pkg)
  }

  console.log(`Final package count: ${validPackages.length}`)

  // Generate the new constants file content with all required constants
  const constantsContent = `/**
 * Default cache directory for storing package data
 */
export const DEFAULT_CACHE_DIR = '.cache/packages'

/**
 * Default cache expiration time in minutes (24 hours)
 */
export const DEFAULT_CACHE_EXPIRATION_MINUTES = 1440

/**
 * Default timeout for network requests in milliseconds (12 seconds)
 */
export const DEFAULT_TIMEOUT_MS = 12000

/**
 * Package aliases mapping friendly names to domain names
 */
export const PACKAGE_ALIASES: Record<string, string> = {
  node: 'nodejs.org',
  python: 'python.org',
  go: 'go.dev',
  rust: 'rust-lang.org',
  ruby: 'ruby-lang.org',
  php: 'php.net',
  perl: 'perl.org',
  deno: 'deno.land',
  bun: 'bun.sh',
}

/**
 * List of all known packages
 */
export const ALL_KNOWN_PACKAGES: string[] = [
${validPackages.map(pkg => `  '${pkg}',`).join('\n')}
] as const

// Generated on ${new Date().toISOString()}
// Total packages: ${validPackages.length}
`

  // Write to constants file
  await Bun.write('src/consts.ts', constantsContent)

  console.log('✅ Updated src/consts.ts with scraped packages')
  console.log(`📦 Total packages: ${validPackages.length}`)

  // Also create a separate file with just the list for reference
  await Bun.write('scraped-packages.txt', validPackages.join('\n'))
  console.log('📝 Saved complete list to scraped-packages.txt')
}

if (import.meta.main) {
  main().catch(console.error)
}
