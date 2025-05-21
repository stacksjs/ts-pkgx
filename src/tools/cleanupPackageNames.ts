#!/usr/bin/env bun
/**
 * A utility script to ensure consistent package variable naming
 * and update related code in the codebase when package names change.
 *
 * This script:
 * 1. Regenerates the index.ts file with the new naming conventions
 * 2. Fixes any references to package variables in other files
 */

import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { convertDomainToVarName } from './domainUtils'
import { fixPackageVariables } from './fixPackageVariables'
import { generateIndex } from './generateIndex'

// Main function
async function cleanupPackageNames(): Promise<void> {
  try {
    console.error('Starting package name cleanup...')

    // Step 1: Fix any package variable names with hyphens
    await fixPackageVariables()

    // Step 2: Regenerate the index.ts file with the fixed variable names
    await generateIndex()

    console.error('Package name cleanup completed successfully')
  }
  catch (error) {
    console.error('Error during package name cleanup:', error)
    process.exit(1)
  }
}

// Run the script when called directly
if (import.meta.url.endsWith('cleanupPackageNames.ts')) {
  cleanupPackageNames()
}

export { cleanupPackageNames }
