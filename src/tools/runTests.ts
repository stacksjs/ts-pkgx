#!/usr/bin/env bun
/**
 * Script to run all package tests and cleanup temporary files
 * This script helps coordinate testing and ensures proper package management
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { generateIndex } from './generateIndex'

// Define paths
const ROOT_DIR = process.cwd()
const TEMP_JS_FILE = path.join(ROOT_DIR, 'testRenderer.tmp.js')

/**
 * Main function to run tests and cleanup
 */
async function runTests(): Promise<void> {
  console.error('Starting package tests...')

  // 1. Clean up any temporary files first
  if (fs.existsSync(TEMP_JS_FILE)) {
    console.error(`Removing temporary JS file: ${TEMP_JS_FILE}`)
    fs.unlinkSync(TEMP_JS_FILE)
  }

  // 2. Run the test renderer to generate sample packages
  console.error('Running test renderer...')
  const { testRenderer } = await import('./testRenderer')
  testRenderer()

  // 3. Generate the index file based on the newly created packages
  console.error('Generating index file...')
  await generateIndex()

  console.error('All tests completed successfully!')
}

// Run if executed directly
if (import.meta.url === process.argv[1]) {
  runTests().catch((error) => {
    console.error('Error running tests:', error)
    process.exit(1)
  })
}
