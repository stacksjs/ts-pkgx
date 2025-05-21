import type { PkgxPackage } from '../src/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { CAC } from 'cac'
import { chromium } from 'playwright'
import { version } from '../package.json'
import { fetchAndSaveAllPackages, fetchPkgxPackage, PACKAGE_ALIASES } from '../src/packages/fetch'
import { fetchPackageListFromGitHub } from '../src/utils'

const cli = new CAC('pkgx-tools')

// Path to store GitHub API cache
const GITHUB_CACHE_FILE = path.join(process.cwd(), 'github-cache.json')

interface FetchOptions {
  timeout: number
  output: string
  limit?: number
  retries?: number
  saveAliases?: boolean
  mode?: string
  all?: boolean
  verbose?: boolean
  useWebScraping?: boolean
  githubCacheDuration?: number
  debug?: boolean
  json?: boolean
}

// Ensure the output directory exists
function ensureOutputDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    console.log(`Created output directory: ${dir}`)
  }
  return dir
}

/**
 * Saves GitHub API response to cache
 */
function saveGitHubCache(data: any, cacheDuration: number): void {
  try {
    const cacheData = {
      timestamp: Date.now(),
      expiresAt: Date.now() + cacheDuration,
      data,
    }
    fs.writeFileSync(GITHUB_CACHE_FILE, JSON.stringify(cacheData, null, 2))
    console.log(`GitHub API cache saved to ${GITHUB_CACHE_FILE}, expires at ${new Date(cacheData.expiresAt).toLocaleString()}`)
  }
  catch (error) {
    console.error('Failed to save GitHub cache:', error)
  }
}

/**
 * Loads GitHub API response from cache if valid
 */
function loadGitHubCache(cacheDuration: number): any | null {
  try {
    if (!fs.existsSync(GITHUB_CACHE_FILE)) {
      return null
    }

    const cacheData = JSON.parse(fs.readFileSync(GITHUB_CACHE_FILE, 'utf8'))
    const now = Date.now()

    // Check if cache is still valid
    if (now - cacheData.timestamp <= cacheDuration) {
      console.log(`Using GitHub API cache from ${new Date(cacheData.timestamp).toLocaleString()}, expires at ${new Date(cacheData.expiresAt).toLocaleString()}`)
      return cacheData.data
    }
    else {
      console.log(`GitHub API cache expired (from ${new Date(cacheData.timestamp).toLocaleString()})`)
      return null
    }
  }
  catch (error) {
    console.error('Error loading GitHub cache:', error)
    return null
  }
}

/**
 * Fetches all package paths from pkgx.dev by scraping the website
 */
async function fetchAllPackagePathsByWebScraping(timeout: number): Promise<string[]> {
  console.log('Scraping package paths from pkgx.dev...')

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  try {
    console.log('Navigating to pkgx.dev/pkgs...')

    // Navigate to the packages page
    await page.goto('https://pkgx.dev/pkgs', {
      timeout,
      waitUntil: 'networkidle',
    })

    // Wait for client-side rendering
    await page.waitForTimeout(2000)

    console.log('Extracting package list...')

    // Extract all package paths
    const packagePaths = await page.evaluate(() => {
      const packageElements = Array.from(document.querySelectorAll('a[href^="/pkgs/"]'))
      return packageElements
        .map((link) => {
          const href = (link as HTMLAnchorElement).href
          const path = href.split('/pkgs/')[1]
          return path ? path.replace(/\/$/, '') : null
        })
        .filter(Boolean) as string[]
    })

    console.log(`Found ${packagePaths.length} package paths on pkgx.dev`)
    return packagePaths
  }
  finally {
    await browser.close()
  }
}

/**
 * Fetch and save a single package with aliases handling
 */
async function fetchAndSavePackage(
  packageName: string,
  outputDir: string,
  timeout: number,
  saveAsJson = false,
  retryNumber = 1,
  maxRetries = 3,
  debug = false,
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[], filePath?: string }> {
  try {
    // Adjust timeout based on the package complexity or retry attempt
    const isComplexPackage = ['go', 'rust', 'postgresql.org', 'ruby', 'bun', 'agwa.name'].some(pkg =>
      packageName.includes(pkg),
    )
    const baseTimeout = isComplexPackage ? timeout * 2 : timeout
    const actualTimeout = baseTimeout * retryNumber

    console.log(`Using timeout for ${packageName} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Fetch the package data from pkgx.dev
    try {
      const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(packageName, {
        timeout: actualTimeout,
        debug,
      })

      // Create a filename-safe version of the fullDomainName for filenames
      let safeFilename: string

      // Special handling for nested paths like agwa.name/git-crypt
      if (fullDomainName.includes('/')) {
        // Use a TypeScript-friendly name format for nested paths
        const [domain, subPath] = fullDomainName.split('/')
        const tsName = domain.replace(/\./g, '') + subPath.replace(/-/g, '')
        safeFilename = tsName.toLowerCase()
      }
      else {
        // Regular domain names like bun.sh -> bunsh
        safeFilename = fullDomainName.replace(/\./g, '').toLowerCase()
      }

      // Add aliases information to the package info
      const knownAliases: string[] = []

      // Check if this is the target of an alias in PACKAGE_ALIASES
      for (const [alias, target] of Object.entries(PACKAGE_ALIASES)) {
        if (target === fullDomainName) {
          knownAliases.push(alias)
        }
      }

      // Add the original name or path components as aliases
      if (originalName !== fullDomainName && !knownAliases.includes(originalName)) {
        knownAliases.push(originalName)
      }

      // For nested paths, add the subpath as an alias
      if (originalName.includes('/')) {
        const subPath = originalName.split('/')[1]
        if (!knownAliases.includes(subPath)) {
          knownAliases.push(subPath)
        }
      }

      // Add the aliases to the package info
      const enhancedPackageInfo = {
        ...packageInfo,
        fullPath: packageName, // Store the full path in the package info
        aliases: knownAliases.length > 0 ? knownAliases : undefined,
      }

      // Save either as JSON or TypeScript based on the saveAsJson flag
      let filePath: string
      if (saveAsJson) {
        // Save as JSON file
        filePath = path.join(outputDir, `${safeFilename}.json`)
        fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
      }
      else {
        // Save as TypeScript file with proper imports and exports
        filePath = path.join(outputDir, `${safeFilename}.ts`)
        const tsContent = generateTypeScriptContent(enhancedPackageInfo, safeFilename)
        fs.writeFileSync(filePath, tsContent)
      }

      console.log(`Successfully saved ${packageName} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
      return {
        success: true,
        fullDomainName,
        aliases: knownAliases,
        filePath,
      }
    }
    catch (error: any) {
      if (error.toString().includes('404') || error.toString().includes('Not Found')) {
        console.error(`Package ${packageName} returned 404 Not Found. Using fallback approach...`)
        return await createPlaceholderPackage(packageName, outputDir, saveAsJson)
      }

      // For timeout errors, retry with increased timeout
      if (error.toString().includes('Timeout') || error.toString().includes('timed out')) {
        if (retryNumber >= maxRetries) {
          console.error(`Package ${packageName} timed out after ${retryNumber} attempts`)
          return await createPlaceholderPackage(packageName, outputDir, saveAsJson)
        }
        // Retry with increased timeout
        console.error(`Timeout fetching ${packageName}, retrying with increased timeout...`)
        return await fetchAndSavePackage(packageName, outputDir, timeout * 1.5, saveAsJson, retryNumber + 1, maxRetries, debug)
      }

      throw error // Re-throw for other errors to allow retries
    }
  }
  catch (error: any) {
    // If we've exceeded retry attempts, create a minimal placeholder package
    if (retryNumber >= maxRetries) {
      console.error(`Failed to fetch package ${packageName} after ${retryNumber} attempts:`, error)

      // Save debugging information if debug mode is enabled
      if (debug) {
        const debugDir = path.join(process.cwd(), 'debug')
        if (!fs.existsSync(debugDir)) {
          fs.mkdirSync(debugDir, { recursive: true })
        }
        const debugPath = path.join(debugDir, `${packageName.replace(/\//g, '-')}-error.txt`)
        fs.writeFileSync(debugPath, `Error fetching ${packageName}:\n${error.toString()}\n\nStack:\n${error.stack || 'No stack trace available'}`)
        console.error(`Saved error details to ${debugPath}`)
      }

      // Create a placeholder package as a last resort
      return await createPlaceholderPackage(packageName, outputDir, saveAsJson)
    }

    console.error(`Attempt ${retryNumber} failed for ${packageName}, retrying...`, error)

    // Short pause before retrying
    await new Promise(resolve => setTimeout(resolve, 1000 * retryNumber)) // Increase wait time for each retry

    // Retry with increased timeout
    return fetchAndSavePackage(packageName, outputDir, timeout, saveAsJson, retryNumber + 1, maxRetries, debug)
  }
}

/**
 * Creates a minimal placeholder package when fetching fails
 */
async function createPlaceholderPackage(
  packageName: string,
  outputDir: string,
  saveAsJson: boolean,
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[], filePath?: string }> {
  console.error(`Creating placeholder package for ${packageName}`)

  // If it's a nested path like 'agwa.name/git-crypt', extract parts
  const parts = packageName.split('/')
  const domain = parts[0]
  const subPath = parts.length > 1 ? parts.slice(1).join('/') : null

  // Create a minimal package info object
  const packageInfo: PkgxPackage = {
    name: subPath || packageName,
    domain,
    description: `${packageName} package`,
    packageYmlUrl: `https://github.com/pkgxdev/pantry/tree/main/projects/${packageName}/package.yml`,
    homepageUrl: '',
    githubUrl: '',
    installCommand: `pkgx ${packageName}`,
    programs: [],
    companions: [],
    dependencies: [],
    versions: [],
  }

  // Add aliases if this is a nested path
  const aliases = subPath ? [subPath] : []
  const enhancedPackageInfo = {
    ...packageInfo,
    fullPath: packageName,
    aliases: aliases.length > 0 ? aliases : undefined,
  }

  // Save in the appropriate format
  let safeFilename: string
  if (packageName.includes('/')) {
    // Use a TypeScript-friendly name format for nested paths
    const [domain, subPath] = packageName.split('/')
    safeFilename = domain.replace(/\./g, '') + subPath.replace(/-/g, '').toLowerCase()
  }
  else {
    safeFilename = packageName.replace(/\./g, '').toLowerCase()
  }

  let filePath: string
  if (saveAsJson) {
    filePath = path.join(outputDir, `${safeFilename}.json`)
    fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
  }
  else {
    filePath = path.join(outputDir, `${safeFilename}.ts`)
    const tsContent = generateTypeScriptContent(enhancedPackageInfo, safeFilename)
    fs.writeFileSync(filePath, tsContent)
  }

  console.error(`Created placeholder package for ${packageName} at ${filePath}`)

  return {
    success: true, // We consider this a "success" since we created a placeholder
    fullDomainName: packageName,
    aliases,
    filePath,
  }
}

/**
 * Generates TypeScript content for a package
 */
function generateTypeScriptContent(packageInfo: PkgxPackage, varName: string): string {
  // Create the TypeScript content with proper imports and exports
  return `import type { PkgxPackage } from '../types'

/**
 * ${varName}Package information from pkgx.dev
 * Generated by pkgx-tools
 */
export const ${varName}Package: PkgxPackage = ${JSON.stringify(packageInfo, null, 2)}
`
}

// Unified fetch command with all functionality
cli
  .command('fetch [packageName]', 'Fetch package(s) from pkgx.dev')
  .option('-a, --all', 'Fetch all packages')
  .option('-m, --mode <mode>', 'Fetch mode: "basic" (legacy), "complete" (improved), or "scrape" (web scraping)', { default: 'complete' })
  .option('-t, --timeout <timeout>', 'Timeout in milliseconds', { default: 60000 })
  .option('-o, --output <dir>', 'Output directory', { default: 'src/packages' })
  .option('-l, --limit <limit>', 'Limit the number of packages to fetch (0 for unlimited)', { default: 0 })
  .option('-r, --retries <retries>', 'Number of retry attempts', { default: 3 })
  .option('-v, --verbose', 'Show more detailed output')
  .option('-c, --cache-duration <minutes>', 'GitHub API cache duration in minutes', { default: 60 })
  .option('-w, --web-scraping', 'Use web scraping to fetch package list instead of GitHub API')
  .option('-d, --debug', 'Enable debug mode to save error information')
  .option('-j, --json', 'Save files as JSON instead of TypeScript')
  .example('pkgx-tools fetch node')
  .example('pkgx-tools fetch --all')
  .example('pkgx-tools fetch --all --limit 50')
  .example('pkgx-tools fetch --all --mode scrape')
  .example('pkgx-tools fetch --all --cache-duration 120')
  .action(async (packageName: string | undefined, options: FetchOptions) => {
    // Ensure either packageName is provided or --all flag is set
    if (!packageName && !options.all) {
      console.error('Error: You must either specify a package name or use the --all flag')
      process.exit(1)
    }

    // Ensure output directory exists
    const outputDir = ensureOutputDir(options.output)
    const maxRetries = Number(options.retries) || 3
    const limit = options.limit ? Number(options.limit) : undefined
    const githubCacheDuration = options.githubCacheDuration ? Number(options.githubCacheDuration) * 60 * 1000 : 60 * 60 * 1000 // Default 1 hour

    if (options.verbose) {
      console.log('Fetch options:', {
        packageName,
        all: options.all,
        mode: options.mode,
        timeout: options.timeout,
        outputDir,
        maxRetries,
        limit,
        useWebScraping: options.useWebScraping || options.mode === 'scrape',
        githubCacheDuration: `${githubCacheDuration / 60 / 1000} minutes`,
        json: options.json,
      })
    }

    try {
      // Case 1: Fetch a specific package
      if (packageName) {
        console.log(`Fetching package '${packageName}' from pkgx.dev...`)

        const result = await fetchAndSavePackage(
          packageName,
          outputDir,
          options.timeout,
          options.json || false, // Default to TypeScript files unless --json is specified
          1,
          maxRetries,
          options.debug,
        )

        if (!result.success) {
          console.error(`Failed to fetch package '${packageName}'`)
          process.exit(1)
        }

        console.log(`Successfully fetched package '${packageName}' to ${result.filePath}`)

        // Regenerate the index.ts file if we're using TypeScript output
        if (!options.json) {
          try {
            console.log('Regenerating package index...')
            const { generateIndex } = await import('../src/tools/generateIndex')
            await generateIndex()
            console.log('Package index updated successfully!')
          }
          catch (error) {
            console.error('Failed to regenerate package index:', error)
          }
        }
      }
      // Case 2: Fetch all packages using legacy mode
      else if (options.all && options.mode === 'basic') {
        console.log('Fetching all packages from pkgx.dev using basic mode...')

        const savedPackages = await fetchAndSaveAllPackages({
          timeout: options.timeout,
          outputDir,
        })

        console.log(`Successfully saved ${savedPackages.length} packages to ${outputDir}`)
      }
      // Case 3: Fetch all packages using web scraping mode
      else if (options.all && (options.mode === 'scrape' || options.useWebScraping)) {
        console.log('Fetching all packages from pkgx.dev using web scraping...')
        console.log('Current package aliases:', options.verbose ? PACKAGE_ALIASES : `${Object.keys(PACKAGE_ALIASES).length} aliases`)

        // Fetch all package paths by web scraping
        const packagesToFetch = await fetchAllPackagePathsByWebScraping(options.timeout)

        // Apply limit if specified
        const limitedPackages = limit ? packagesToFetch.slice(0, limit) : packagesToFetch

        console.log(`Will fetch ${limitedPackages.length} packages`)

        // Count successful and failed packages
        let successCount = 0
        let failCount = 0
        const failedPackages: string[] = []

        // Start time for the entire process
        const startTime = Date.now()

        // Process each package
        for (const [index, packagePath] of limitedPackages.entries()) {
          // Calculate and display progress
          const percentComplete = Math.round((index / limitedPackages.length) * 100)
          const elapsedSeconds = Math.round((Date.now() - startTime) / 1000)
          const estimatedTotalSeconds = index > 0 ? Math.round(elapsedSeconds / index * limitedPackages.length) : 0
          const remainingSeconds = Math.max(0, estimatedTotalSeconds - elapsedSeconds)
          const remainingMinutes = Math.floor(remainingSeconds / 60)
          const remainingHours = Math.floor(remainingMinutes / 60)

          console.log(`[${index + 1}/${limitedPackages.length}] (${percentComplete}%) Fetching package ${packagePath}... ETA: ${remainingHours}h ${remainingMinutes % 60}m ${remainingSeconds % 60}s`)

          // Don't skip agwa.name - we now have special handling for it
          // Fetch and save the package with retries
          const result = await fetchAndSavePackage(
            packagePath,
            outputDir,
            options.timeout,
            options.json || false,
            1,
            maxRetries,
            options.debug,
          )

          if (result.success) {
            successCount++
          }
          else {
            failCount++
            failedPackages.push(packagePath)
          }

          // Write progress file after each package (for resumability)
          const progressFile = path.join(outputDir, '_progress.json')
          fs.writeFileSync(progressFile, JSON.stringify({
            total: limitedPackages.length,
            completed: index + 1,
            successful: successCount,
            failed: failCount,
            failedPackages,
            updatedAliases: PACKAGE_ALIASES,
            lastUpdated: new Date().toISOString(),
            fetchMode: 'web-scraping',
            outputFormat: options.json ? 'json' : 'typescript',
          }, null, 2))
        }

        // Calculate total time
        const totalSeconds = Math.round((Date.now() - startTime) / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const hours = Math.floor(minutes / 60)
        const seconds = totalSeconds % 60

        // Display the updated aliases
        if (options.verbose) {
          console.log('Updated package aliases:', PACKAGE_ALIASES)
        }
        else {
          console.log(`Updated package aliases: ${Object.keys(PACKAGE_ALIASES).length} aliases`)
        }

        console.log(`Fetch completed in ${hours}h ${minutes % 60}m ${seconds}s. Files saved to ${outputDir}`)
        console.log(`Results: ${successCount} successful, ${failCount} failed`)

        if (failedPackages.length > 0) {
          console.log(`Failed packages: ${options.verbose ? failedPackages.join(', ') : failedPackages.length}`)
          // Save failed packages to file for possible retry later
          const failedFile = path.join(outputDir, '_failed.json')
          fs.writeFileSync(failedFile, JSON.stringify(failedPackages, null, 2))
        }

        // Save final aliases to a file
        const aliasesFile = path.join(outputDir, '_aliases.json')
        fs.writeFileSync(aliasesFile, JSON.stringify(PACKAGE_ALIASES, null, 2))

        console.log(`All done! Aliases saved to ${aliasesFile}`)

        // Regenerate the index.ts file
        try {
          console.log('Regenerating package index...')
          const { generateIndex } = await import('../src/tools/generateIndex')
          await generateIndex()
          console.log('Package index updated successfully!')
        }
        catch (error) {
          console.error('Failed to regenerate package index:', error)
        }
      }
      // Case 4: Fetch all packages using improved mode with GitHub API cache (default)
      else if (options.all) {
        console.log('Fetching all packages from pkgx.dev using complete mode with GitHub API...')
        console.log('Current package aliases:', options.verbose ? PACKAGE_ALIASES : `${Object.keys(PACKAGE_ALIASES).length} aliases`)

        // Check for GitHub API cache first
        let packagesToFetch: string[] = []
        const cachedPackages = loadGitHubCache(githubCacheDuration)

        if (cachedPackages) {
          console.log(`Using ${cachedPackages.length} packages from GitHub API cache`)
          packagesToFetch = cachedPackages
        }
        else {
          // Fetch all package paths from GitHub API
          packagesToFetch = await fetchPackageListFromGitHub(0) // Fetch all, apply limit after

          // Save to cache
          saveGitHubCache(packagesToFetch, githubCacheDuration)
        }

        // Apply limit if specified
        const limitedPackages = limit ? packagesToFetch.slice(0, limit) : packagesToFetch

        console.log(`Will fetch ${limitedPackages.length} packages`)

        // Count successful and failed packages
        let successCount = 0
        let failCount = 0

        // List of packages that need retries
        const failedPackages: string[] = []

        // Start time for the entire process
        const startTime = Date.now()

        // Process each package with a queue system to manage concurrency and avoid timeouts
        const concurrencyLimit = 3 // Process up to 3 packages at a time
        const activePromises: Promise<void>[] = []
        const queue = [...limitedPackages]

        // Function to process a single package
        const processPackage = async (packagePath: string, index: number) => {
          // Calculate and display progress
          const percentComplete = Math.round((index / limitedPackages.length) * 100)
          const elapsedSeconds = Math.round((Date.now() - startTime) / 1000)
          const estimatedTotalSeconds = index > 0 ? Math.round(elapsedSeconds / index * limitedPackages.length) : 0
          const remainingSeconds = Math.max(0, estimatedTotalSeconds - elapsedSeconds)
          const remainingMinutes = Math.floor(remainingSeconds / 60)
          const remainingHours = Math.floor(remainingMinutes / 60)

          console.log(`[${index + 1}/${limitedPackages.length}] (${percentComplete}%) Fetching package ${packagePath}... ETA: ${remainingHours}h ${remainingMinutes % 60}m ${remainingSeconds % 60}s`)

          // Fetch and save the package
          const result = await fetchAndSavePackage(
            packagePath,
            outputDir,
            options.timeout,
            options.json || false,
            1,
            maxRetries,
            options.debug,
          )

          if (result.success) {
            successCount++
          }
          else {
            failCount++
            failedPackages.push(packagePath)
          }

          // Write progress file after each package (for resumability)
          const progressFile = path.join(outputDir, '_progress.json')
          fs.writeFileSync(progressFile, JSON.stringify({
            total: limitedPackages.length,
            completed: index + 1,
            successful: successCount,
            failed: failCount,
            failedPackages,
            updatedAliases: PACKAGE_ALIASES,
            lastUpdated: new Date().toISOString(),
            fetchMode: 'github-api',
            outputFormat: options.json ? 'json' : 'typescript',
          }, null, 2))
        }

        // Process packages in a limited concurrency queue
        let index = 0
        while (queue.length > 0 || activePromises.length > 0) {
          // Fill the queue up to the concurrency limit
          while (activePromises.length < concurrencyLimit && queue.length > 0) {
            const packagePath = queue.shift()!
            const packageIndex = index++

            // Process the package and manage the activePromises array
            const promise = processPackage(packagePath, packageIndex)
              .catch((error) => {
                console.error(`Error processing ${packagePath}:`, error)
                failCount++
                failedPackages.push(packagePath)
              })
              .finally(() => {
                // Remove this promise from the active list when done
                const promiseIndex = activePromises.indexOf(promise)
                if (promiseIndex !== -1) {
                  activePromises.splice(promiseIndex, 1)
                }
              })

            activePromises.push(promise)

            // Small delay between starting new processes to avoid overwhelming resources
            await new Promise(resolve => setTimeout(resolve, 500))
          }

          // Wait for at least one promise to resolve before continuing the loop
          if (activePromises.length > 0) {
            await Promise.race(activePromises)
          }
        }

        // Calculate total time
        const totalSeconds = Math.round((Date.now() - startTime) / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const hours = Math.floor(minutes / 60)
        const seconds = totalSeconds % 60

        // Display the updated aliases
        if (options.verbose) {
          console.log('Updated package aliases:', PACKAGE_ALIASES)
        }
        else {
          console.log(`Updated package aliases: ${Object.keys(PACKAGE_ALIASES).length} aliases`)
        }

        console.log(`Fetch completed in ${hours}h ${minutes % 60}m ${seconds}s. Files saved to ${outputDir}`)
        console.log(`Results: ${successCount} successful, ${failCount} failed`)

        if (failedPackages.length > 0) {
          console.log(`Failed packages: ${options.verbose ? failedPackages.join(', ') : failedPackages.length}`)
          // Save failed packages to file for possible retry later
          const failedFile = path.join(outputDir, '_failed.json')
          fs.writeFileSync(failedFile, JSON.stringify(failedPackages, null, 2))
        }

        // Save final aliases to a file
        const aliasesFile = path.join(outputDir, '_aliases.json')
        fs.writeFileSync(aliasesFile, JSON.stringify(PACKAGE_ALIASES, null, 2))

        console.log(`All done! Aliases saved to ${aliasesFile}`)

        // Regenerate the index.ts file
        try {
          console.log('Regenerating package index...')
          const { generateIndex } = await import('../src/tools/generateIndex')
          await generateIndex()
          console.log('Package index updated successfully!')
        }
        catch (error) {
          console.error('Failed to regenerate package index:', error)
        }
      }
    }
    catch (error) {
      console.error('Fetch operation failed:', error)
      process.exit(1)
    }
  })

cli.command('version', 'Show version information').action(() => {
  console.log(`pkgx-tools v${version}`)
})

cli.help()
cli.version(version)

cli.parse()
