#!/usr/bin/env bun

/**
 * Bulk Sync Packages from pkgx CDN
 *
 * Downloads pre-built binaries from pkgx's CDN and re-hosts to your S3.
 *
 * Usage:
 *   bun scripts/bulk-sync.ts -b pantry-registry -n 20
 *   bun scripts/bulk-sync.ts -b pantry-registry --start 50 -n 20
 */

import { existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { join } from 'node:path'
import { parseArgs } from 'node:util'

interface PackageInfo {
  domain: string
  name: string
  versions: readonly string[]
  programs?: readonly string[]
}

function detectPlatform(): { platform: string; pkgxPlatform: string } {
  const os = process.platform === 'darwin' ? 'darwin' : 'linux'
  const arch = process.arch === 'arm64' ? 'aarch64' : 'x86_64'
  return {
    platform: `${os}-${arch === 'aarch64' ? 'arm64' : 'x86-64'}`,
    pkgxPlatform: `${os}/${arch}`,
  }
}

async function getPackageList(startIndex: number, count: number): Promise<PackageInfo[]> {
  const packagesDir = join(process.cwd(), 'src', 'packages')
  const packages: PackageInfo[] = []

  // Get all .ts files (excluding index.ts, aliases.ts)
  const files = readdirSync(packagesDir, { recursive: true })
    .filter((f): f is string => typeof f === 'string')
    .filter(f => f.endsWith('.ts') && !f.includes('index') && !f.includes('aliases'))
    .sort()

  // Get the slice we want
  const selectedFiles = files.slice(startIndex, startIndex + count)

  for (const file of selectedFiles) {
    try {
      const filePath = join(packagesDir, file)
      const stat = statSync(filePath)
      if (!stat.isFile()) continue

      // Dynamic import the package
      const mod = await import(filePath)
      const pkg = Object.values(mod)[0] as any

      if (pkg?.domain && pkg?.versions?.length > 0) {
        packages.push({
          domain: pkg.domain,
          name: pkg.name || pkg.domain.split('.')[0],
          versions: pkg.versions,
          programs: pkg.programs,
        })
      }
    } catch (e) {
      // Skip packages that fail to import
    }
  }

  return packages
}

async function checkExistsInS3(domain: string, version: string, platform: string, bucket: string, region: string): Promise<boolean> {
  try {
    const url = `https://${bucket}.s3.${region}.amazonaws.com/binaries/${domain}/metadata.json`
    const response = await fetch(url)
    if (!response.ok) return false

    const metadata = await response.json() as any
    return !!(metadata.versions?.[version]?.platforms?.[platform])
  } catch {
    return false
  }
}

// Get available versions from pkgx CDN
async function getPkgxVersions(domain: string): Promise<string[]> {
  try {
    const response = await fetch(`https://dist.pkgx.dev/${domain}/versions.txt`)
    if (!response.ok) return []
    const text = await response.text()
    return text.trim().split('\n').filter(v => v.length > 0)
  } catch {
    return []
  }
}

// Find the best matching version from pkgx
function findBestVersion(ourVersion: string, pkgxVersions: string[]): string | null {
  if (pkgxVersions.length === 0) return null

  // Exact match
  if (pkgxVersions.includes(ourVersion)) return ourVersion

  // Try adding .0 (e.g., 4.9 -> 4.9.0)
  if (pkgxVersions.includes(`${ourVersion}.0`)) return `${ourVersion}.0`

  // Try matching major.minor
  const [major, minor] = ourVersion.split('.')
  const matching = pkgxVersions.filter(v => {
    const [vMajor, vMinor] = v.split('.')
    return vMajor === major && (minor === undefined || vMinor === minor)
  })

  if (matching.length > 0) {
    return matching[matching.length - 1] // Latest matching
  }

  // Just return the latest version on pkgx
  return pkgxVersions[pkgxVersions.length - 1]
}

async function downloadFromPkgx(domain: string, version: string, destDir: string): Promise<{ success: boolean; actualVersion?: string }> {
  const { pkgxPlatform } = detectPlatform()
  const [os, arch] = pkgxPlatform.split('/')

  // Step 1: Try versions.txt to find correct version
  console.log(`   Checking pkgx CDN for ${domain}...`)
  const pkgxVersions = await getPkgxVersions(domain)

  let pkgxVersion: string
  if (pkgxVersions.length > 0) {
    const matched = findBestVersion(version, pkgxVersions)
    pkgxVersion = matched || version
    if (pkgxVersion !== version) {
      console.log(`   Version mapped: ${version} -> ${pkgxVersion}`)
    }
  } else {
    // No versions.txt - many packages don't have it, try direct download
    pkgxVersion = version
  }

  // Step 2: Try multiple version formats
  const versionCandidates = [
    pkgxVersion,
    `${pkgxVersion}.0`,          // 4.9 -> 4.9.0
    `${pkgxVersion}.0.0`,        // 4 -> 4.0.0
  ]
  // Remove duplicates
  const uniqueVersions = [...new Set(versionCandidates)]

  mkdirSync(destDir, { recursive: true })
  const tarball = join(destDir, 'package.tar.gz')

  let downloadedVersion: string | null = null

  for (const tryVersion of uniqueVersions) {
    const urls = [
      `https://dist.pkgx.dev/${domain}/${os}/${arch}/v${tryVersion}.tar.gz`,
      `https://dist.pkgx.dev/${domain}/${os}/${arch}/v${tryVersion}.tar.xz`,
    ]

    for (const url of urls) {
      try {
        execSync(`curl -fsSL -o "${tarball}" "${url}"`, { stdio: 'pipe' })

        // Verify we got a real file (not an XML error)
        const fileSize = statSync(tarball).size
        if (fileSize < 1000) {
          const content = require('fs').readFileSync(tarball, 'utf-8')
          if (content.includes('<?xml') || content.includes('NoSuchKey') || content.includes('Error')) {
            rmSync(tarball, { force: true })
            continue
          }
        }

        downloadedVersion = tryVersion
        console.log(`   Downloaded: v${tryVersion}`)
        break
      } catch {
        continue
      }
    }
    if (downloadedVersion) break
  }

  if (!downloadedVersion) {
    console.log(`   Not available on pkgx CDN`)
    return { success: false }
  }

  // Step 3: Extract
  try {
    execSync(`cd "${destDir}" && tar -xf package.tar.gz 2>/dev/null`, { stdio: 'pipe' })
    rmSync(tarball, { force: true })

    const contents = readdirSync(destDir)
    if (contents.length === 0) {
      return { success: false }
    }

    return { success: true, actualVersion: downloadedVersion }
  } catch (e) {
    return { success: false }
  }
}

async function uploadToS3(destDir: string, domain: string, version: string, platform: string, bucket: string, region: string): Promise<void> {
  const artifactsDir = '/tmp/bulk-sync-artifacts'
  const artifactDir = join(artifactsDir, `${domain}-${version}-${platform}`)

  mkdirSync(artifactDir, { recursive: true })

  // Create tarball
  const tarballName = `${domain.replace(/\//g, '-')}-${version}.tar.gz`
  execSync(`cd "${destDir}" && tar -czf "${join(artifactDir, tarballName)}" .`)
  execSync(`cd "${artifactDir}" && shasum -a 256 "${tarballName}" > "${tarballName}.sha256"`)

  // Upload using the existing upload script
  execSync(
    `bun scripts/upload-to-s3.ts --package "${domain}" --version "${version}" --artifacts-dir "${artifactsDir}" --bucket "${bucket}" --region "${region}"`,
    { stdio: 'pipe', cwd: process.cwd() }
  )

  // Cleanup
  rmSync(artifactDir, { recursive: true, force: true })
}

async function main() {
  const { values } = parseArgs({
    options: {
      bucket: { type: 'string', short: 'b' },
      region: { type: 'string', short: 'r', default: 'us-east-1' },
      count: { type: 'string', short: 'n', default: '10' },
      start: { type: 'string', short: 's', default: '0' },
      'dry-run': { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h' },
    },
    strict: true,
  })

  if (values.help || !values.bucket) {
    console.log(`
Bulk Sync Packages from pkgx CDN

Downloads pre-built binaries from pkgx's CDN and uploads to your S3.

Usage:
  bun scripts/bulk-sync.ts -b <bucket> -n <count> [options]

Options:
  -b, --bucket <name>   S3 bucket (required)
  -r, --region <region> AWS region (default: us-east-1)
  -n, --count <num>     Number of packages to sync (default: 10)
  -s, --start <num>     Start index in alphabetical list (default: 0)
  --dry-run             Show what would be synced
  -h, --help            Show this help

Examples:
  # Sync first 20 packages
  bun scripts/bulk-sync.ts -b pantry-registry -n 20

  # Sync packages 50-70
  bun scripts/bulk-sync.ts -b pantry-registry -s 50 -n 20

  # Dry run
  bun scripts/bulk-sync.ts -b pantry-registry -n 50 --dry-run
`)
    process.exit(values.help ? 0 : 1)
  }

  const bucket = values.bucket
  const region = values.region || 'us-east-1'
  const count = parseInt(values.count || '10', 10)
  const start = parseInt(values.start || '0', 10)
  const { platform } = detectPlatform()

  console.log('🚀 Bulk Package Sync')
  console.log('═'.repeat(50))
  console.log(`   Bucket: ${bucket}`)
  console.log(`   Platform: ${platform}`)
  console.log(`   Range: ${start} to ${start + count - 1}`)
  console.log(`   Dry run: ${values['dry-run']}`)

  // Get packages
  console.log(`\n📋 Loading packages...`)
  const packages = await getPackageList(start, count)
  console.log(`   Found ${packages.length} packages`)

  if (values['dry-run']) {
    console.log('\n[DRY RUN] Would sync:')
    packages.forEach((pkg, i) => {
      console.log(`  ${start + i + 1}. ${pkg.domain} (${pkg.name}) - v${pkg.versions[0]}`)
    })
    process.exit(0)
  }

  // Sync each package
  const results = { success: 0, skipped: 0, failed: 0 }
  const failed: string[] = []

  for (const pkg of packages) {
    const version = pkg.versions[0] // Latest version

    console.log(`\n${'─'.repeat(50)}`)
    console.log(`📦 ${pkg.name} (${pkg.domain}) v${version}`)
    console.log(`${'─'.repeat(50)}`)

    // Check if already in S3
    const exists = await checkExistsInS3(pkg.domain, version, platform, bucket, region)
    if (exists) {
      console.log(`   ✓ Already in S3, skipping`)
      results.skipped++
      continue
    }

    // Download from pkgx
    const installDir = `/tmp/bulk-sync-install/${pkg.domain}`
    rmSync(installDir, { recursive: true, force: true })

    const result = await downloadFromPkgx(pkg.domain, version, installDir)

    if (!result.success) {
      failed.push(pkg.domain)
      results.failed++
      continue
    }

    // Use the actual version from pkgx if different
    const uploadVersion = result.actualVersion || version

    // Upload to S3
    try {
      console.log(`   Uploading to S3...`)
      await uploadToS3(installDir, pkg.domain, uploadVersion, platform, bucket, region)
      console.log(`   ✓ Uploaded ${pkg.domain}@${uploadVersion}`)
      results.success++
    } catch (e: any) {
      console.log(`   ✗ Upload failed: ${e.message}`)
      failed.push(pkg.domain)
      results.failed++
    }

    // Cleanup
    rmSync(installDir, { recursive: true, force: true })
  }

  // Summary
  console.log('\n' + '═'.repeat(50))
  console.log('📊 Summary')
  console.log('═'.repeat(50))
  console.log(`   ✅ Uploaded: ${results.success}`)
  console.log(`   ⏭️  Skipped: ${results.skipped}`)
  console.log(`   ❌ Failed: ${results.failed}`)

  if (failed.length > 0) {
    console.log(`\nFailed packages:`)
    failed.forEach(f => console.log(`   - ${f}`))
  }
}

main().catch(e => {
  console.error('Error:', e.message)
  process.exit(1)
})
