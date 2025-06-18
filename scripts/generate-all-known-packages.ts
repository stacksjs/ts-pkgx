#!/usr/bin/env bun

/**
 * This script generates the ALL_KNOWN_PACKAGES array by scraping
 * the pkgx S3 registry instead of relying on existing files.
 *
 * This is a wrapper around the scrape-registry-packages.ts script.
 */

import { spawn } from 'bun'
import process from 'node:process'

async function main() {
  console.log('🚀 Generating ALL_KNOWN_PACKAGES from pkgx S3 registry...')
  console.log('This will scrape all packages from https://dist.pkgx.dev and validate them.')
  console.log()

  // Run the scraper script
  const proc = spawn(['bun', 'scripts/scrape-registry-packages.ts'], {
    stdio: ['inherit', 'inherit', 'inherit'],
  })

  const exitCode = await proc.exited

  if (exitCode === 0) {
    console.log()
    console.log('✅ Successfully generated ALL_KNOWN_PACKAGES in src/consts.ts')
    console.log('📝 Check scraped-packages-valid.txt and scraped-packages-invalid.txt for details')
  }
  else {
    console.error('❌ Failed to generate packages list')
    process.exit(1)
  }
}

if (import.meta.main) {
  main().catch(console.error)
}
