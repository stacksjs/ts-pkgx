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

async function downloadFromPkgx(domain: string, version: string, destDir: string): Promise<boolean> {
  const { pkgxPlatform } = detectPlatform()
  const [os, arch] = pkgxPlatform.split('/')

  // pkgx CDN URL format: {domain}/{os}/{arch}/v{version}.tar.gz
  // Example: https://dist.pkgx.dev/abseil.io/darwin/aarch64/v20230125.2.0.tar.gz
  const primaryUrl = `https://dist.pkgx.dev/${domain}/${os}/${arch}/v${version}.tar.gz`

  console.log(`   Trying pkgx CDN: ${primaryUrl}`)

  try {
    mkdirSync(destDir, { recursive: true })
    const tarball = join(destDir, 'package.tar.gz')

    // Try the primary URL format
    try {
      execSync(`curl -fsSL -o "${tarball}" "${primaryUrl}"`, { stdio: 'pipe' })
    } catch {
      // Try alternate URL formats
      const altUrls = [
        `https://dist.pkgx.dev/${domain}/${os}/${arch}/v${version}.tar.xz`,
        `https://dist.pkgx.dev/${domain}/v${version}/${pkgxPlatform}.tar.gz`,
        `https://dist.pkgx.dev/${domain}/v${version}.tar.gz`,
      ]

      let downloaded = false
      for (const altUrl of altUrls) {
        try {
          console.log(`   Trying alternate: ${altUrl}`)
          execSync(`curl -fsSL -o "${tarball}" "${altUrl}"`, { stdio: 'pipe' })
          downloaded = true
          break
        } catch {
          continue
        }
      }

      if (!downloaded) {
        return false
      }
    }

    // Extract (tar auto-detects compression format)
    execSync(`cd "${destDir}" && tar -xf package.tar.gz`, { stdio: 'pipe' })
    execSync(`rm "${tarball}"`)

    // Check if we got anything useful
    const contents = readdirSync(destDir)
    if (contents.length === 0) {
      return false
    }

    // If there's a nested directory with version, flatten it
    const versionDir = contents.find(c => c.startsWith('v') || c.match(/^\d/))
    if (versionDir && statSync(join(destDir, versionDir)).isDirectory()) {
      execSync(`mv "${join(destDir, versionDir)}"/* "${destDir}/" 2>/dev/null || true`, { stdio: 'pipe' })
      rmSync(join(destDir, versionDir), { recursive: true, force: true })
    }

    return true
  } catch (e) {
    return false
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

    const downloaded = await downloadFromPkgx(pkg.domain, version, installDir)

    if (!downloaded) {
      console.log(`   ✗ Not available on pkgx CDN`)
      failed.push(pkg.domain)
      results.failed++
      continue
    }

    // Upload to S3
    try {
      console.log(`   Uploading to S3...`)
      await uploadToS3(installDir, pkg.domain, version, platform, bucket, region)
      console.log(`   ✓ Uploaded`)
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
