#!/usr/bin/env node
/* eslint-disable no-console */

import process from 'node:process'
import { generateIndex } from './src/generate'

// Run the index generator
async function main() {
  console.log('Testing index generation with fixes...')

  try {
    const result = await generateIndex()

    if (result) {
      console.log('✅ Index file successfully generated:', result)
    }
    else {
      console.error('❌ Failed to generate index file')
      process.exit(1)
    }
  }
  catch (error) {
    console.error('❌ Error occurred:', error)
    process.exit(1)
  }
}

main()
