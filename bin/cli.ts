import type { PackageFetchOptions } from '../src/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { CAC } from 'cac'
import { version } from '../package.json'
import { DEFAULT_CACHE_DIR, DEFAULT_CACHE_EXPIRATION_MINUTES, DEFAULT_TIMEOUT_MS } from '../src/consts'
import {
  cleanupBrowserResources,
  fetchAndSaveAllPackages,
  fetchAndSavePackage,
  savePackageAsTypeScript,
} from '../src/fetch'
import { generateAliases, generateDocs, generateIndex } from '../src/generate'

// Define interface for CLI options
interface FetchOptions {
  all?: boolean
  pkg?: string
  outputDir?: string
  cacheDir?: string
  cache?: boolean
  cacheExpiration?: number
  limit?: number
  timeout?: number
  maxRetries?: number
  json?: boolean
  debug?: boolean
  verbose?: boolean
  concurrency?: number
}

const cli = new CAC('pkgx-tools')

// Force exit after a maximum timeout to prevent hung processes
// This is a safety mechanism in case Playwright doesn't close properly
const EXIT_TIMEOUT = 1500000 // 25 minutes
const forceExitTimeout = setTimeout(() => {
  console.error('Force exiting after timeout - process may have hung') // so GitHub Actions doesn't run forever
  process.exit(1)
}, EXIT_TIMEOUT)

// Clear the force exit timeout if process exits normally
process.on('exit', () => {
  clearTimeout(forceExitTimeout)
})

// Clean exit handler for SIGINT and SIGTERM
async function exitHandler(signal: string) {
  console.log(`\nReceived ${signal} signal. Cleaning up resources...`)
  clearTimeout(forceExitTimeout)

  try {
    await cleanupBrowserResources()
    console.log('Resources cleaned up. Exiting.')
  }
  catch (err) {
    console.error('Error during cleanup:', err)
  }

  // Force exit after cleanup attempt
  setTimeout(() => {
    console.log('Forcing process exit...')
    process.exit(0)
  }, 1000)
}

// Process interrupt handling to ensure clean exit
process.on('SIGINT', () => exitHandler('SIGINT'))
process.on('SIGTERM', () => exitHandler('SIGTERM'))

// Unified fetch command with all functionality
cli
  .command('fetch [packageName]', 'Fetch package information from pkgx.dev')
  .option('-a, --all', 'Fetch all packages')
  .option('-p, --pkg <packageNames>', 'Comma-separated list of package names to fetch')
  .option('-o, --output-dir <dir>', 'Directory to save package data', { default: 'src/packages' })
  .option('-c, --cache-dir <dir>', 'Directory to cache package data', { default: DEFAULT_CACHE_DIR })
  .option('-n, --no-cache', 'Disable caching')
  .option('-e, --cache-expiration <minutes>', 'Cache expiration time in minutes', { default: DEFAULT_CACHE_EXPIRATION_MINUTES })
  .option('-l, --limit <count>', 'Limit the number of packages to fetch (use with --all)')
  .option('-t, --timeout <ms>', 'Timeout for network requests in milliseconds', { default: DEFAULT_TIMEOUT_MS })
  .option('-r, --max-retries <count>', 'Maximum number of retry attempts for failed requests', { default: 3 })
  .option('-j, --json', 'Save as JSON instead of TypeScript')
  .option('-d, --debug', 'Enable debug mode (save screenshots)')
  .option('-v, --verbose', 'Enable verbose output')
  .option('-y, --concurrency <count>', 'Number of packages to fetch concurrently (default: 10)', { default: 10 })
  .action(async (packageName: string | undefined, options: FetchOptions) => {
    // Extract options with appropriate types
    const {
      all: fetchAll,
      outputDir = 'src/packages',
      cacheDir = DEFAULT_CACHE_DIR,
      cache = true,
      cacheExpiration = DEFAULT_CACHE_EXPIRATION_MINUTES,
      limit,
      timeout = DEFAULT_TIMEOUT_MS,
      maxRetries = 3,
      json: saveAsJson = false,
      debug = false,
      verbose = false,
      concurrency = 10,
      pkg,
    } = options

    // Ensure output directory exists
    const outputDirPath = path.resolve(process.cwd(), outputDir)
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true })
    }

    // Ensure cache directory exists if caching is enabled
    const cacheDirPath = path.resolve(process.cwd(), cacheDir)
    if (cache) {
      if (!fs.existsSync(cacheDirPath)) {
        fs.mkdirSync(cacheDirPath, { recursive: true })
      }
    }

    try {
      let savedPackages: string[] = []

      if (fetchAll) {
        // Fetch all packages
        console.log('Fetching all packages...')
        const fetchOptions: PackageFetchOptions = {
          outputDir,
          cacheDir,
          cache,
          cacheExpirationMinutes: cacheExpiration,
          timeout: Number.parseInt(String(timeout), 10),
          debug,
          limit: limit ? Number.parseInt(String(limit), 10) : undefined,
          concurrency: Number.parseInt(String(concurrency), 10),
        }

        savedPackages = await fetchAndSaveAllPackages(fetchOptions)
      }
      else if (pkg) {
        // Fetch specific packages
        const packageNames = pkg.split(',').map((p: string) => p.trim())
        console.log(`Fetching ${packageNames.length} packages: ${packageNames.join(', ')}`)

        // Process each package sequentially
        for (const name of packageNames) {
          const result = await fetchAndSavePackage(
            name,
            outputDir,
            Number.parseInt(String(timeout), 10),
            saveAsJson,
            1, // retryNumber
            Number.parseInt(String(maxRetries), 10),
            debug,
            {
              cacheDir,
              cache,
              cacheExpirationMinutes: cacheExpiration,
            },
          )

          if (result && result.success) {
            savedPackages.push(name)
            if (verbose && result.filePath) {
              console.log(`Successfully saved ${name} to ${result.filePath}`)
            }
          }
        }
      }
      else if (packageName) {
        // Fetch a single package
        console.log(`Fetching package: ${packageName}`)
        const result = await fetchAndSavePackage(
          packageName,
          outputDir,
          Number.parseInt(String(timeout), 10),
          saveAsJson,
          1, // retryNumber
          Number.parseInt(String(maxRetries), 10),
          debug,
          {
            cacheDir,
            cache,
            cacheExpirationMinutes: cacheExpiration,
          },
        )

        if (result && result.success) {
          savedPackages.push(packageName)
          if (verbose && result.filePath) {
            console.log(`Successfully saved ${packageName} to ${result.filePath}`)
          }
        }
      }
      else {
        console.error('Error: Please specify a package name, use --pkg, or use --all')
        process.exit(1)
      }

      // Generate index file after fetching packages
      if (!saveAsJson && savedPackages.length > 0) {
        const indexPath = await generateIndex()
        console.log(`Successfully generated ${indexPath}`)
      }

      console.log(`Processed ${savedPackages.length} packages.`)

      // Clear the force exit timeout as we're finishing normally
      clearTimeout(forceExitTimeout)

      // Clean up and exit
      await cleanupBrowserResources()

      // Force exit after cleanup to prevent hanging
      setTimeout(() => process.exit(0), 1000)
    }
    catch (error) {
      console.error('Error:', error)

      // Attempt to clean up resources even on error
      await cleanupBrowserResources()

      // Force exit with error code
      setTimeout(() => process.exit(1), 1000)
    }
  })

// Generate index file command
cli
  .command('generate-index', 'Generate TypeScript index file for packages')
  .option('-o, --output-dir <dir>', 'Directory containing package files', { default: 'src/packages' })
  .action(async (options) => {
    const { outputDir = 'src/packages' } = options
    const outputDirPath = path.resolve(process.cwd(), outputDir)

    if (!fs.existsSync(outputDirPath)) {
      console.error(`Error: Directory ${outputDirPath} does not exist`)
      process.exit(1)
    }

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

// Add a new command to generate TypeScript files from cached JSON
cli
  .command('generate-ts', 'Generate TypeScript files from cached JSON files')
  .option('--cache-dir <dir>', 'Directory with cached JSON files', { default: DEFAULT_CACHE_DIR })
  .option('--output-dir <dir>', 'Output directory for TypeScript files', { default: 'packages' })
  .action(async (options) => {
    try {
      console.log('Generating TypeScript files from cached JSON...')

      const cacheDir = options.cacheDir
      const outputDir = options.outputDir

      if (!fs.existsSync(cacheDir)) {
        console.error(`Cache directory ${cacheDir} does not exist!`)
        process.exit(1)
      }

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true })
      }

      const files = fs.readdirSync(cacheDir).filter(f => f.endsWith('.json'))
      console.log(`Found ${files.length} JSON files in cache directory`)

      let count = 0
      for (const file of files) {
        try {
          const jsonContent = fs.readFileSync(path.join(cacheDir, file), 'utf-8')
          const packageInfo = JSON.parse(jsonContent)

          // Skip fetchedAt timestamp when generating TypeScript
          delete packageInfo.fetchedAt

          // Get domain name from filename (remove .json extension)
          const domainName = file.replace(/\.json$/, '')

          // Generate TypeScript file - use original domain from package info if available,
          // otherwise fallback to filename
          const tsFilePath = savePackageAsTypeScript(
            outputDir,
            packageInfo.fullPath || packageInfo.domain || domainName,
            packageInfo,
          )

          console.log(`Generated ${tsFilePath}`)
          count++
        }
        catch (error) {
          console.error(`Error processing ${file}:`, error)
        }
      }

      console.log(`Successfully generated ${count} TypeScript files from JSON cache`)
    }
    catch (error) {
      console.error('Error generating TypeScript files:', error)
      process.exit(1)
    }
  })

// Generate aliases file command
cli
  .command('generate-aliases', 'Generate TypeScript aliases file for packages')
  .action(async () => {
    try {
      const aliasesPath = await generateAliases()
      console.log(`Successfully generated ${aliasesPath}`)

      // Force exit after successful completion to prevent hanging
      setTimeout(() => process.exit(0), 500)
    }
    catch (error) {
      console.error('Error generating aliases:', error)
      process.exit(1)
    }
  })

// Generate comprehensive documentation command
cli
  .command('generate-docs', 'Generate comprehensive VitePress documentation for all packages')
  .option('-o, --output-dir <dir>', 'Output directory for documentation', { default: 'docs' })
  .action(async (options) => {
    try {
      const { outputDir = 'docs' } = options
      await generateDocs(outputDir)

      // Force exit after successful completion to prevent hanging
      setTimeout(() => process.exit(0), 500)
    }
    catch (error) {
      console.error('Error generating documentation:', error)
      process.exit(1)
    }
  })

// Display help if no command specified
cli.help()
cli.version(version)

// Parse command line arguments
const _parsed = cli.parse()

// If no command was provided or help was shown, exit cleanly
if (process.argv.length <= 2 || process.argv.includes('--help') || process.argv.includes('-h')) {
  process.exit(0)
}
