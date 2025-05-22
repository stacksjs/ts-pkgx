/**
 * Command-line interface for pkgx-tools
 */

import type { PkgxPackage } from '../src/types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { CAC } from 'cac'
import { chromium } from 'playwright'
import { version } from '../package.json'
import { cleanupBrowserResources, fetchAndSaveAllPackages, fetchPkgxPackage, PACKAGE_ALIASES } from '../src/fetch'
import { generateIndex } from '../src/tools/generateIndex'
import { updatePackage, updateSinglePackage } from '../src/tools/updatePackages'
import { fetchPackageListFromGitHub, formatObjectWithoutQuotedKeys, getGitHubPackageCache } from '../src/utils'

const cli = new CAC('pkgx-tools')

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
  pkg?: string
}

// Ensure the output directory exists
function ensureOutputDir(dir: string) {
  try {
    fs.mkdirSync(dir, { recursive: true })
    return dir
  }
  catch (error) {
    console.error(`Error creating directory ${dir}:`, error)
    process.exit(1)
  }
}

// Add our navigation log tracking logic to cli.ts
// Define a variable to track if we've already logged a navigation message
let navigationLogged = false;

// Create a function to log navigation only once
function logNavigation(url: string) {
  if (!navigationLogged) {
    console.log(`Navigating to ${url}...`);
    navigationLogged = true;
  }
}

/**
 * Fetches all package paths from pkgx.dev by scraping the website
 */
async function fetchAllPackagePathsByWebScraping(timeout: number): Promise<string[]> {
  // Reset navigation logged state
  navigationLogged = false;

  console.log('Scraping package paths from pkgx.dev...')
  let browser = null

  try {
    browser = await chromium.launch({
      headless: true,
      timeout: timeout / 2, // Shorter timeout for browser launch
    })
    const context = await browser.newContext()
    const page = await context.newPage()

    try {
      // Use logNavigation instead of console.log
      logNavigation('https://pkgx.dev/pkgs')

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
      if (browser) {
        try {
          await browser.close()
        }
        catch (err) {
          console.error('Error closing browser in fetchAllPackagePathsByWebScraping:', err)
        }
      }
    }
  }
  catch (error) {
    console.error('Error in fetchAllPackagePathsByWebScraping:', error)
    if (browser) {
      try {
        await browser.close()
      }
      catch (err) {
        console.error('Error closing browser in fetchAllPackagePathsByWebScraping:', err)
      }
    }
    throw error
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
    // Only increase timeout by 50% for complex packages (not doubling)
    const baseTimeout = isComplexPackage ? timeout * 1.5 : timeout
    // Add a smaller increment when retrying (20% more per retry)
    const actualTimeout = Math.round(baseTimeout * (1 + (retryNumber - 1) * 0.2))

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
        // Retry with a modestly increased timeout
        console.error(`Timeout fetching ${packageName}, retrying with increased timeout...`)
        return await fetchAndSavePackage(packageName, outputDir, timeout, saveAsJson, retryNumber + 1, maxRetries, debug)
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
  // Convert hyphens to ensure a valid variable name
  const safeVarName = varName.replace(/-/g, '')

  // Generate the package-specific interface
  const typeName = `${safeVarName.charAt(0).toUpperCase() + safeVarName.slice(1)}Package`

  // Sort versions if they exist (latest first) using Bun.semver
  if (Array.isArray(packageInfo.versions) && packageInfo.versions.length > 0) {
    try {
      // Use Bun.semver to sort versions (if available)
      if (typeof Bun !== 'undefined' && Bun.semver) {
        // Simply use .sort with Bun.semver.order for correct semantic versioning sort
        // Multiply by -1 to make it descending (latest first)
        packageInfo.versions.sort((a: string, b: string) => -1 * Bun.semver.order(a, b))
      }
      else {
        // Fallback to manual sorting when Bun.semver is not available
        packageInfo.versions.sort((a: string, b: string) => {
          // Simple semantic version comparison
          const aParts = a.split('.').map(Number)
          const bParts = b.split('.').map(Number)

          for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
            const aVal = aParts[i] || 0
            const bVal = bParts[i] || 0
            if (aVal !== bVal) {
              return bVal - aVal // Latest version first
            }
          }
          return 0
        })
      }
    }
    catch (err) {
      console.error(`Error sorting versions for ${varName}:`, err)
      // If sorting fails, at least ensure we have valid JSON
      packageInfo.versions = packageInfo.versions.filter(v => typeof v === 'string')
    }
  }

  // Format array with proper indentation and line breaks if more than 0 items
  const formatArrayItems = (items: string[]): string => {
    if (items.length === 0)
      return '[]'

    if (items.length === 1)
      return `[${JSON.stringify(items[0])}]`

    return `[
    ${items.map(item => JSON.stringify(item)).join(',\n    ')}
  ]`
  }

  // Process the packageInfo to create a specific interface
  const interfaceLines: string[] = []
  for (const [key, value] of Object.entries(packageInfo)) {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        // Empty array
        interfaceLines.push(`  ${key}: readonly [];`)
      }
      else if (typeof value[0] === 'string') {
        // String array with values - format with proper indentation
        interfaceLines.push(`  ${key}: readonly ${formatArrayItems(value)};`)
      }
      else {
        // Other array types
        interfaceLines.push(`  ${key}: readonly ${JSON.stringify(value)};`)
      }
    }
    else if (typeof value === 'string') {
      // String value - use string literal
      interfaceLines.push(`  ${key}: ${JSON.stringify(value)};`)
    }
    else if (value === null || value === undefined) {
      // Handle null/undefined values
      interfaceLines.push(`  ${key}: ${JSON.stringify(value)};`)
    }
    else {
      // Other value types (numbers, booleans, objects)
      interfaceLines.push(`  ${key}: ${JSON.stringify(value)};`)
    }
  }

  const interfaceDefinition = `export interface ${typeName} {\n${interfaceLines.join('\n')}\n}`

    // Using the shared formatObjectWithoutQuotedKeys utility function from src/utils.ts

  // Create the TypeScript content with proper imports, exports, and interface
  return `import type { PkgxPackage } from '../types'

/**
 * ${safeVarName}Package information from pkgx.dev
 * Generated by pkgx-tools
 */
export const ${safeVarName}Package: PkgxPackage = ${formatObjectWithoutQuotedKeys(packageInfo)}

${interfaceDefinition}
`
}

/**
 * Fetches a single package without using batch processing
 * @param packageName The name of the package to fetch
 * @param outputDir Directory to save the package data
 * @param options Options for the fetch operation
 * @returns Promise resolving to boolean indicating success
 */
async function fetchSinglePackage(
  packageName: string,
  outputDir: string,
  options: FetchOptions
): Promise<{ success: boolean, filePath?: string }> {
  console.log(`Fetching package '${packageName}' from pkgx.dev...`)

  try {
    // Use the specialized single package update function
    const success = await updateSinglePackage(packageName)

    if (!success) {
      console.error(`Failed to fetch package '${packageName}'`)
      return { success: false }
    }

    const tsName = packageName
      .replace(/\./g, '')
      .replace(/-/g, '')
      .replace(/\//g, '-')
      .toLowerCase()

    const filePath = path.join(outputDir, `${tsName}.ts`)
    console.log(`Successfully saved package '${packageName}' to ${filePath}`)
    return { success: true, filePath }
  }
  catch (error) {
    console.error(`Error fetching package '${packageName}':`, error)
    return { success: false }
  }
}

// Process interrupt handling to ensure clean exit
process.on('SIGINT', async () => {
  console.log('\nReceived interrupt signal. Cleaning up resources...')
  await cleanupBrowserResources()
  console.log('Resources cleaned up. Exiting.')
  process.exit(0)
})

// Unified fetch command with all functionality
cli
  .command('fetch [packageName]', 'Fetch package(s) from pkgx.dev')
  .option('-a, --all', 'Fetch all packages')
  .option('-p, --pkg <packageNames>', 'Comma-separated list of package names to fetch')
  .option('-m, --mode <mode>', 'Fetch mode: "basic" (legacy), "complete" (improved), or "scrape" (web scraping)', { default: 'complete' })
  .option('-o, --output <directory>', 'Directory to save package data', { default: 'src/packages' })
  .option('-t, --timeout <timeout>', 'Timeout in milliseconds (default is 30 seconds)', { default: 30000 })
  .option('-l, --limit <limit>', 'Limit the number of packages to fetch', { default: undefined })
  .option('-r, --retries <retries>', 'Number of retry attempts for failed fetches', { default: 3 })
  .option('-v, --verbose', 'Show more detailed output')
  .option('-c, --cache-duration <minutes>', 'GitHub API cache duration in minutes', { default: 60 })
  .option('-w, --web-scraping', 'Use web scraping to fetch package list instead of GitHub API')
  .option('-d, --debug', 'Enable debug mode to save error information')
  .option('-j, --json', 'Save files as JSON instead of TypeScript')
  .example('pkgx-tools fetch node')
  .example('pkgx-tools fetch --all')
  .example('pkgx-tools fetch --all --limit 50')
  .example('pkgx-tools fetch --all --mode scrape')
  .example('pkgx-tools fetch --all --timeout 15000') // 15 seconds example
  .example('pkgx-tools fetch node --timeout 20000') // 20 seconds example
  .example('pkgx-tools fetch --all --cache-duration 120')
  .example('pkgx-tools fetch --pkg node,bun,python') // Fetch multiple packages
  .example('pkgx-tools fetch --pkg "go.dev,python.org,rust-lang.org" --json') // Fetch multiple packages as JSON
  .action(async (packageName: string | undefined, options: FetchOptions) => {
    // Ensure either packageName is provided, --all flag is set, or --pkg is provided
    if (!packageName && !options.all && !options.pkg) {
      console.error('Error: You must either specify a package name, use the --all flag, or provide a comma-separated list with --pkg')
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
      // Case 1a: Fetch a specific comma-separated list of packages
      if (options.pkg) {
        const packageList = options.pkg.split(',').map(pkg => pkg.trim()).filter(Boolean)
        console.log(`Fetching ${packageList.length} packages: ${packageList.join(', ')}`)

        let successCount = 0
        const failedPackages: string[] = []

        // Process each package sequentially
        for (const pkg of packageList) {
          console.log(`\nFetching package '${pkg}' from pkgx.dev...`)

          const result = await fetchAndSavePackage(
            pkg,
            outputDir,
            options.timeout,
            options.json || false,
            1,
            maxRetries,
            options.debug,
          )

          if (result.success) {
            console.log(`Successfully fetched package '${pkg}' to ${result.filePath}`)
            successCount++
          }
          else {
            console.error(`Failed to fetch package '${pkg}'`)
            failedPackages.push(pkg)
          }
        }

        // Regenerate the index.ts file if we're using TypeScript output
        if (!options.json) {
          try {
            console.log('Regenerating package index...')
            await generateIndex()
            console.log('Package index updated successfully!')
          }
          catch (error) {
            console.error('Failed to regenerate package index:', error)
          }
        }

        // Summary
        console.log(`\nFetch summary: ${successCount} successful, ${failedPackages.length} failed`)
        if (failedPackages.length > 0) {
          console.log(`Failed packages: ${failedPackages.join(', ')}`)
        }

        // Ensure browser resources are cleaned up
        await cleanupBrowserResources()

        // Ensure process exits cleanly
        console.log('All tasks completed, exiting...')
        process.exit(failedPackages.length > 0 ? 1 : 0)
      }
      // Case 1b: Fetch a specific package
      else if (packageName) {
        try {
          // Ensure packageName is a valid package identifier
          if (packageName.startsWith('/') || packageName.includes('/bin/')) {
            console.error(`Error: '${packageName}' appears to be a path, not a valid package name.`)
            console.error('Please provide a valid package name like "bun.sh" or "node.js".')
            process.exit(1)
          }

          console.log(`Fetching package '${packageName}' from pkgx.dev...`)

          // Direct call to updateSinglePackage with the exact package name
          const success = await updateSinglePackage(packageName)

          if (!success) {
            console.error(`Failed to fetch package '${packageName}'`)
            process.exit(1)
          }

          // Skip duplicate success message since updateSinglePackage already logs this

          // Regenerate the index.ts file but only update this package's interface
          try {
            console.log('Regenerating package index...')

            // First convert the domain name to module name
            const tsName = packageName
              .replace(/\./g, '')
              .replace(/-/g, '')
              .replace(/\//g, '-')
              .toLowerCase()

            // Import and use the updateSinglePackageInterface function
            const { updateSinglePackageInterface } = await import('../src/tools/generateIndex')
            await updateSinglePackageInterface(tsName)

            console.log('Package index updated successfully!')
          }
          catch (error) {
            console.error('Failed to regenerate package index:', error)
            // Don't exit with error here, as the package was updated successfully
          }

          // Ensure browser resources are cleaned up
          console.log('Cleaning up browser resources...')
          await cleanupBrowserResources()

          // Ensure process exits cleanly
          console.log('All tasks completed, exiting...')
          process.exit(0)
        }
        catch (error) {
          console.error('Error fetching package:', error)
          await cleanupBrowserResources()
          process.exit(1)
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

        // Ensure process exits cleanly
        console.log('All tasks completed, exiting...')
        process.exit(0)
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

        // Use the same approach as updatePackages.ts
        // Check if the packages directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }

        // Use a smaller batch size to prevent memory issues
        const BATCH_SIZE = 20
        let updatedCount = 0
        const batches = Math.ceil(limitedPackages.length / BATCH_SIZE)

        // Process packages in batches to prevent memory issues
        for (let i = 0; i < batches; i++) {
          const start = i * BATCH_SIZE
          const end = Math.min(start + BATCH_SIZE, limitedPackages.length)
          const batch = limitedPackages.slice(start, end)

          console.log(`Processing batch ${i + 1}/${batches} (packages ${start + 1}-${end})`)

          // Update packages in the current batch
          const results = await Promise.all(batch.map((pkg: string) => updatePackage(pkg)))

          // Count updated packages
          updatedCount += results.filter(Boolean).length
        }

        console.log(`Updated ${updatedCount} out of ${limitedPackages.length} packages`)

        // Regenerate the index.ts file
        try {
          console.log('Regenerating package index...')
          await generateIndex()
          console.log('Package index updated successfully!')
        }
        catch (error) {
          console.error('Failed to regenerate package index:', error)
        }

        // Clean up resources
        await cleanupBrowserResources()

        // Ensure process exits cleanly
        console.log('All tasks completed, exiting...')
        process.exit(0)
      }
      // Case 4: Fetch all packages using improved mode with GitHub API cache (default)
      else if (options.all) {
        console.log('Fetching all packages from pkgx.dev using complete mode with GitHub API...')
        console.log('Current package aliases:', options.verbose ? PACKAGE_ALIASES : `${Object.keys(PACKAGE_ALIASES).length} aliases`)

        // Get the start time to measure how long the fetch takes
        const fetchStartTime = Date.now()

        // Check for GitHub API cache first using the cache from utils.ts
        let packagesToFetch: string[] = []
        const cachedPackages = getGitHubPackageCache()

        if (cachedPackages) {
          console.log(`✅ Using ${cachedPackages.length} packages from GitHub API cache (no API calls needed)`)
          packagesToFetch = cachedPackages
        }
        else {
          console.log('🔄 No valid cache found or cache expired, fetching fresh data from GitHub API')
          // Fetch all package paths from GitHub API
          packagesToFetch = await fetchPackageListFromGitHub(0) // Fetch all, apply limit after
          // Cache is automatically saved in the fetchPackageListFromGitHub function
          console.log(`✅ Fresh package data fetched and cached (${packagesToFetch.length} packages)`)
        }

        // Log how long the fetch/cache operation took
        const fetchTime = Math.round((Date.now() - fetchStartTime) / 1000)
        console.log(`Package list prepared in ${fetchTime} seconds`)

        // Apply limit if specified
        const limitedPackages = limit ? packagesToFetch.slice(0, limit) : packagesToFetch

        console.log(`Will fetch ${limitedPackages.length} packages`)

        // Use the same approach as updatePackages.ts
        // Check if the packages directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }

        // Use a smaller batch size to prevent memory issues
        const BATCH_SIZE = 20
        let updatedCount = 0
        const batches = Math.ceil(limitedPackages.length / BATCH_SIZE)

        // Process packages in batches to prevent memory issues
        for (let i = 0; i < batches; i++) {
          const start = i * BATCH_SIZE
          const end = Math.min(start + BATCH_SIZE, limitedPackages.length)
          const batch = limitedPackages.slice(start, end)

          console.log(`Processing batch ${i + 1}/${batches} (packages ${start + 1}-${end})`)

          // Update packages in the current batch
          const results = await Promise.all(batch.map((pkg: string) => updatePackage(pkg)))

          // Count updated packages
          updatedCount += results.filter(Boolean).length
        }

        console.log(`Updated ${updatedCount} out of ${limitedPackages.length} packages`)

        // Regenerate the index.ts file
        try {
          console.log('Regenerating package index...')
          await generateIndex()
          console.log('Package index updated successfully!')
        }
        catch (error) {
          console.error('Failed to regenerate package index:', error)
        }

        // Clean up resources
        await cleanupBrowserResources()

        // Ensure process exits cleanly
        console.log('All tasks completed, exiting...')
        process.exit(0)
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

cli.command('generate-docs', 'Generate package documentation for the API reference')
  .option('-o, --output <path>', 'Output path for the documentation', { default: 'docs/package-catalog.md' })
  .action(async (options) => {
    console.log('Generating package documentation...')

    try {
      // Import the generate-package-docs script dynamically
      const { generatePackageDocs } = await import('./generate-package-docs')

      // Generate the documentation with the specified output path
      await generatePackageDocs(options.output)

      console.log(`Documentation generated successfully at ${options.output}`)
    }
    catch (error) {
      console.error('Error generating documentation:', error)
      process.exit(1)
    }
  })

cli.command('cleanup', 'Fix package variable naming issues and regenerate index')
  .action(async () => {
    console.log('Cleaning up package variable names...')

    try {
      // Import the cleanupPackageNames function dynamically
      const { cleanupPackageNames } = await import('../src/tools/cleanupPackageNames')

      // Run the cleanup process
      await cleanupPackageNames()

      console.log('Package variable names cleaned up successfully')
    }
    catch (error) {
      console.error('Error cleaning up package variable names:', error)
      process.exit(1)
    }
  })

cli.command('cleanup-interfaces', 'Fix all package interface files to properly include array values')
  .action(async () => {
    console.log('Cleaning up package interface files...')

    try {
      // Get list of all package files
      const packagesDir = path.join(process.cwd(), 'src', 'packages')
      const files = fs.readdirSync(packagesDir)
        .filter(file => file.endsWith('.ts') && file !== 'index.ts')

      console.log(`Found ${files.length} package files to process`)

      let fixedCount = 0

      // Process each file
      for (const file of files) {
        console.log(`Processing ${file}...`)
        const filePath = path.join(packagesDir, file)
        const fileContent = fs.readFileSync(filePath, 'utf-8')

        // Extract package name
        const packageVarMatch = fileContent.match(/export const (\w+)Package\s*:\s*PkgxPackage\s*=\s*(\{[\s\S]+?\n\})/)
        if (!packageVarMatch) {
          console.log(`  Skipping: Could not find package object in ${file}`)
          continue
        }

        const packageVarName = packageVarMatch[1]
        const packageObjText = packageVarMatch[2]

        // Parse the package object
        try {
          // Clean up the package object to make it parseable
          let cleanPackageText = packageObjText
            .replace(/\/\/.*$/gm, '') // Remove comments
            .replace(/,(\s*[\]}])/g, '$1') // Remove trailing commas

          // Fix missing quotes and ensure valid JSON
          cleanPackageText = cleanPackageText
            .replace(/"([^"]*?)(\n)/g, '"$1"$2') // Add closing quotes if missing
            .replace(/(\w+):/g, '"$1":') // Ensure property names are quoted
            .replace(/,\s*\}/g, '}') // Remove trailing commas in objects
            .replace(/,\s*\]/g, ']') // Remove trailing commas in arrays

          // Try to parse the JSON
          try {
            const packageObj = JSON.parse(cleanPackageText)

            // Sort versions semantically if they exist
            if (Array.isArray(packageObj.versions) && packageObj.versions.length > 0) {
              try {
                // Use Bun.semver to sort versions (if available)
                if (typeof Bun !== 'undefined' && Bun.semver) {
                  // Sort using Bun.semver.order - multiply by -1 to make it descending (latest first)
                  packageObj.versions.sort((a: string, b: string) => -1 * Bun.semver.order(a, b))
                }
                else {
                  // Fallback to manual sorting when Bun.semver is not available
                  packageObj.versions.sort((a: string, b: string) => {
                    // Simple semantic version comparison
                    const aParts = a.split('.').map(Number)
                    const bParts = b.split('.').map(Number)

                    for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
                      const aVal = aParts[i] || 0
                      const bVal = bParts[i] || 0
                      if (aVal !== bVal) {
                        return bVal - aVal // Latest version first
                      }
                    }
                    return 0
                  })
                }
              }
              catch (err) {
                console.error(`Error sorting versions for ${file}:`, err)
              }
            }

            // Format array items with proper line breaks
            const formatArrayItems = (items: string[]): string => {
              if (items.length === 0)
                return '[]'

              if (items.length === 1)
                return `[${JSON.stringify(items[0])}]`

              return `[
    ${items.map(item => JSON.stringify(item)).join(',\n    ')}
  ]`
            }

            // Generate interface lines
            const interfaceLines: string[] = []

            for (const [key, value] of Object.entries(packageObj)) {
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  // Empty array
                  interfaceLines.push(`  ${key}: readonly [];`)
                }
                else if (typeof value[0] === 'string') {
                  // String array with values - format with proper indentation
                  interfaceLines.push(`  ${key}: readonly ${formatArrayItems(value)};`)
                }
                else {
                  // Other array types
                  interfaceLines.push(`  ${key}: readonly ${JSON.stringify(value)};`)
                }
              }
              else if (typeof value === 'string') {
                // String value - use string literal
                interfaceLines.push(`  ${key}: ${JSON.stringify(value)};`)
              }
              else if (value === null || value === undefined) {
                // Handle null/undefined values
                interfaceLines.push(`  ${key}: ${JSON.stringify(value)};`)
              }
              else {
                // Other value types (numbers, booleans, objects)
                interfaceLines.push(`  ${key}: ${JSON.stringify(value)};`)
              }
            }

            const interfaceDefinition = `export interface ${packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1)}Package {\n${interfaceLines.join('\n')}\n}`

            // Replace the interface in the file
            const interfaceRegex = new RegExp(`export interface ${packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1)}Package \\{[\\s\\S]+?\\n\\}`, 'm')
            const updatedContent = fileContent.replace(interfaceRegex, interfaceDefinition)

            // Check if content changed
            if (updatedContent !== fileContent) {
              fs.writeFileSync(filePath, updatedContent)
              console.log(`✅ Fixed ${file}`)
              fixedCount++
            }
            else {
              console.log(`No changes needed for ${file}`)
            }
          }
          catch (error) {
            console.error(`Error processing ${file}:`, error)
          }
        }
        catch (error) {
          console.error(`Error processing ${file}:`, error)
        }
      }

      console.log(`\nInterface cleanup complete: fixed ${fixedCount} files`)

      try {
        console.log('Regenerating package index...')
        await generateIndex()
        console.log('Package index updated successfully!')
      }
      catch (error) {
        console.error('Failed to regenerate package index:', error)
      }
    }
    catch (error) {
      console.error('Error cleaning up interfaces:', error)
      process.exit(1)
    }
  })

cli.help()
cli.version(version)

cli.parse()
