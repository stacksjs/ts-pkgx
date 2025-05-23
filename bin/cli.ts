#!/usr/bin/env bun
import process from 'node:process'
/*
 * Some basic CLI commands for ts-pkgx
 */
import { CAC } from 'cac'
import { version } from '../package.json'
import {
  cleanupBrowserResources,
} from '../src/fetch'
import { generateIndex } from '../src/generate'

const cli = new CAC('pkgx-tools')

cli
  .command('cleanup-browser', 'Clean up browser resources')
  .action(async () => {
    await cleanupBrowserResources()
    console.log('Browser resources cleanup completed')
  })

cli
  .command('generate-index', 'Generate the index.ts file for the packages directory')
  .action(async () => {
    try {
      const indexPath = await generateIndex()
      console.log(`Successfully generated ${indexPath}`)

      // Force exit after successful completion to prevent hanging
      setTimeout(() => process.exit(0), 500)
    }
    catch (error) {
      console.error('Error generating index:', error)
      process.exit(1)
    }
  })

// Display help if no command specified
cli.help()
cli.version(version)

// Parse command line arguments
cli.parse()
