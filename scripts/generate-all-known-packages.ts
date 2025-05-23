#!/usr/bin/env bun

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

/**
 * This script scans all package files in src/packages/ and generates
 * the ALL_KNOWN_PACKAGES array for src/fetch.ts
 */

const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')
const FETCH_FILE = path.join(process.cwd(), 'src', 'fetch.ts')

// Get all package files
const packageFiles = fs.readdirSync(PACKAGES_DIR)
  .filter(file =>
    file.endsWith('.ts')
    && file !== 'index.ts'
    && file !== 'aliases.ts',
  )

// Extract domain names from filenames
const domainNames = packageFiles.map((file) => {
  // Convert from filename back to domain name
  return path.basename(file, '.ts')
})

// Sort domains alphabetically
domainNames.sort()

// Read the fetch.ts file
const fetchContent = fs.readFileSync(FETCH_FILE, 'utf-8')

// Find the start and end of the ALL_KNOWN_PACKAGES array
const arrayStart = fetchContent.indexOf('const ALL_KNOWN_PACKAGES = [')
if (arrayStart === -1) {
  console.error('Could not find ALL_KNOWN_PACKAGES array in fetch.ts')
  process.exit(1)
}

const contentAfterStart = fetchContent.substring(arrayStart)
let arrayEnd = contentAfterStart.indexOf(']')
arrayEnd = arrayStart + arrayEnd + 1 // Adjust to full content position

// Format the new array content
const formattedArray = formatPackageArray(domainNames)

// Replace the array in the file
const newContent
  = `${fetchContent.substring(0, arrayStart)
  }const ALL_KNOWN_PACKAGES = [\n${formattedArray}\n]${
    fetchContent.substring(arrayEnd)}`

// Write back to fetch.ts
fs.writeFileSync(FETCH_FILE, newContent)

console.log(`Updated ALL_KNOWN_PACKAGES array with ${domainNames.length} packages.`)

/**
 * Formats the package array with proper indentation and quotes
 */
function formatPackageArray(packages: string[]): string {
  return packages
    .map(pkg => `  '${pkg.replace(/'/g, '\\\'')}'`)
    .join(',\n')
}
