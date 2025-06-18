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

      // Extract the domain/package name (first part before any slash or file)
      const parts = key.split('/')
      if (parts.length > 0) {
        const packageName = parts[0]

        // Skip files in root (like .pkgroot, README.md)
        if (packageName && (!packageName.includes('.') || packageName.match(/^[a-z0-9.-]+\.[a-z]{2,}$/i))) {
          packages.add(packageName)

          // Check for nested packages (e.g., astral.sh/ruff)
          if (parts.length >= 2 && parts[1] && !['darwin', 'linux', 'windows'].includes(parts[1])) {
            const nestedPackage = `${parts[0]}/${parts[1]}`
            packages.add(nestedPackage)

            // Check for deeper nesting (e.g., astral.sh/sub/package)
            if (parts.length >= 3 && parts[2] && !['darwin', 'linux', 'windows'].includes(parts[2])) {
              const deepNestedPackage = `${parts[0]}/${parts[1]}/${parts[2]}`
              packages.add(deepNestedPackage)
            }
          }
        }
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

    // For now, include all that pass basic validation
    // In production, you might want to validate all packages
    validPackages.push(pkg)
  }

  console.log(`Final package count: ${validPackages.length}`)

  // Generate the new constants file content
  const constantsContent = `export const ALL_KNOWN_PACKAGES: string[] = [
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
