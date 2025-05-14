import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { CAC } from 'cac'
import { version } from '../package.json'
import { fetchAndSaveAllPackages, fetchPkgxPackage, PACKAGE_ALIASES } from '../src/packages/fetch'
import { fetchPackageListFromGitHub } from '../src/utils'

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
 * Fetch and save a single package with aliases handling
 */
async function fetchAndSavePackage(
  packagePath: string,
  outputDir: string,
  timeout: number,
  retryNumber = 1,
  maxRetries = 3,
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[] }> {
  try {
    // Adjust timeout based on the package difficulty or retry attempt
    const isComplexPackage = ['go', 'rust', 'postgresql.org', 'ruby', 'bun'].some(pkg =>
      packagePath.includes(pkg),
    )
    const baseTimeout = isComplexPackage ? timeout * 2 : timeout
    const actualTimeout = baseTimeout * retryNumber

    console.log(`Using timeout for ${packagePath} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Handle nested package paths
    // Check if package has a path separator (like acorn.io/acorn-cli)
    if (packagePath.includes('/')) {
      // For URLs like 'acorn.io/acorn-cli', we need to adjust the URL format
      const pathParts = packagePath.split('/')
      const domain = pathParts[0]
      const subPath = pathParts.slice(1).join('/')

      console.log(`Processing nested package: domain=${domain}, subPath=${subPath}`)

      // Fetch the package info from the nested URL
      const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(`${domain}/${subPath}`, {
        timeout: actualTimeout,
      })

      // Create a filename-safe version of the fullDomainName
      const safeFilename = fullDomainName.replace(/\//g, '-')

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

      // Use the subpath component as an alias (e.g., 'acorn-cli' for 'acorn.io/acorn-cli')
      if (!knownAliases.includes(subPath)) {
        knownAliases.push(subPath)
      }

      // Add the aliases to the package info
      const enhancedPackageInfo = {
        ...packageInfo,
        fullPath: packagePath, // Store the full path in the package info
        aliases: knownAliases.length > 0 ? knownAliases : undefined,
      }

      // Save to file using the safe filename
      const filePath = path.join(outputDir, `${safeFilename}.json`)
      fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))

      console.log(`Successfully saved nested package ${packagePath} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
      return {
        success: true,
        fullDomainName,
        aliases: knownAliases,
      }
    }
    else {
      // Fetch the package (standard non-nested path)
      const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(packagePath, {
        timeout: actualTimeout,
      })

      // Create a filename-safe version of the fullDomainName
      const safeFilename = fullDomainName.replace(/\//g, '-')

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

      // Add the aliases to the package info
      const enhancedPackageInfo = {
        ...packageInfo,
        fullPath: packagePath, // Store the full path in the package info
        aliases: knownAliases.length > 0 ? knownAliases : undefined,
      }

      // Save to file using the safe filename
      const filePath = path.join(outputDir, `${safeFilename}.json`)
      fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))

      console.log(`Successfully saved ${packagePath} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
      return {
        success: true,
        fullDomainName,
        aliases: knownAliases,
      }
    }
  }
  catch (error) {
    if (retryNumber >= maxRetries) {
      console.error(`Failed to fetch package ${packagePath} after ${retryNumber} attempts:`, error)
      return { success: false }
    }

    console.error(`Attempt ${retryNumber} failed for ${packagePath}, retrying...`, error)
    // Short pause before retrying
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Retry with increased timeout
    return fetchAndSavePackage(packagePath, outputDir, timeout, retryNumber + 1, maxRetries)
  }
}

// Unified fetch command with all functionality
cli
  .command('fetch [packageName]', 'Fetch package(s) from pkgx.dev')
  .option('-a, --all', 'Fetch all packages')
  .option('-m, --mode <mode>', 'Fetch mode: "basic" (legacy) or "complete" (improved)', { default: 'complete' })
  .option('-t, --timeout <timeout>', 'Timeout in milliseconds', { default: 60000 })
  .option('-o, --output <dir>', 'Output directory', { default: 'packages' })
  .option('-l, --limit <limit>', 'Limit the number of packages to fetch (0 for unlimited)', { default: 0 })
  .option('-r, --retries <retries>', 'Number of retry attempts', { default: 3 })
  .option('-v, --verbose', 'Show more detailed output')
  .example('pkgx-tools fetch node')
  .example('pkgx-tools fetch --all')
  .example('pkgx-tools fetch --all --limit 50')
  .example('pkgx-tools fetch --all --mode basic')
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

    if (options.verbose) {
      console.log('Fetch options:', {
        packageName,
        all: options.all,
        mode: options.mode,
        timeout: options.timeout,
        outputDir,
        maxRetries,
        limit,
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
          1,
          maxRetries,
        )

        if (!result.success) {
          console.error(`Failed to fetch package '${packageName}'`)
          process.exit(1)
        }

        console.log(`Successfully fetched package '${packageName}'`)
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
      // Case 3: Fetch all packages using improved mode (default)
      else if (options.all) {
        console.log('Fetching all packages from pkgx.dev using complete mode...')
        console.log('Current package aliases:', options.verbose ? PACKAGE_ALIASES : `${Object.keys(PACKAGE_ALIASES).length} aliases`)

        // Fetch all package paths from GitHub API
        const packagesToFetch = await fetchPackageListFromGitHub(limit || 0)

        console.log(`Will fetch ${packagesToFetch.length} packages`)

        // Count successful and failed packages
        let successCount = 0
        let failCount = 0

        // List of packages that need retries
        const failedPackages: string[] = []

        // Start time for the entire process
        const startTime = Date.now()

        // Process each package
        for (const [index, packagePath] of packagesToFetch.entries()) {
          // Calculate and display progress
          const percentComplete = Math.round((index / packagesToFetch.length) * 100)
          const elapsedSeconds = Math.round((Date.now() - startTime) / 1000)
          const estimatedTotalSeconds = index > 0 ? Math.round(elapsedSeconds / index * packagesToFetch.length) : 0
          const remainingSeconds = Math.max(0, estimatedTotalSeconds - elapsedSeconds)
          const remainingMinutes = Math.floor(remainingSeconds / 60)
          const remainingHours = Math.floor(remainingMinutes / 60)

          console.log(`[${index + 1}/${packagesToFetch.length}] (${percentComplete}%) Fetching package ${packagePath}... ETA: ${remainingHours}h ${remainingMinutes % 60}m ${remainingSeconds % 60}s`)

          // Fetch and save the package with retries
          const result = await fetchAndSavePackage(packagePath, outputDir, options.timeout, 1, maxRetries)

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
            total: packagesToFetch.length,
            completed: index + 1,
            successful: successCount,
            failed: failCount,
            failedPackages,
            updatedAliases: PACKAGE_ALIASES,
            lastUpdated: new Date().toISOString(),
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
