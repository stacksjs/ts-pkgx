import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { fetchPkgxPackage, PACKAGE_ALIASES } from './src/packages/fetch'

/**
 * Fetches all package paths from pkgx.dev
 */
async function fetchAllPackagePaths(): Promise<string[]> {
  console.error('Scraping all package paths from pkgx.dev...')

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  try {
    console.error('Navigating to pkgx.dev/pkgs...')

    // Navigate to the packages page
    await page.goto('https://pkgx.dev/pkgs', {
      timeout: 60000,
      waitUntil: 'networkidle',
    })

    // Wait a bit for client-side rendering
    await page.waitForTimeout(2000)

    console.error('Extracting package list...')

    // Extract all package paths (including nested paths)
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

    console.error(`Found ${packagePaths.length} package paths on pkgx.dev`)
    return packagePaths
  }
  finally {
    await browser.close()
  }
}

/**
 * Fetches all packages from pkgx.dev and store them with alias information
 */
async function fetchAllPackages(): Promise<void> {
  try {
    console.error('Starting fetch of all packages...')
    console.error('Current package aliases:', PACKAGE_ALIASES)

    // Create output directory
    const outputDir = path.join(process.cwd(), 'packages')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Fetch all package paths including nested paths
    const packagesToFetch = await fetchAllPackagePaths()

    console.error(`Will fetch ${packagesToFetch.length} packages: ${packagesToFetch.join(', ')}`)

    // Count successful and failed packages
    let successCount = 0
    let failCount = 0

    // List of packages that need retries
    const failedPackages = []

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

      console.error(`[${index + 1}/${packagesToFetch.length}] (${percentComplete}%) Fetching package ${packagePath}... ETA: ${remainingHours}h ${remainingMinutes % 60}m ${remainingSeconds % 60}s`)

      // Track retry attempts for this package
      let attempts = 1
      let success = false

      while (!success && attempts <= 3) {
        if (attempts > 1) {
          console.error(`Retry attempt ${attempts} for ${packagePath}...`)
        }

        try {
          // Adjust timeout based on the package difficulty or retry attempt
          const isComplexPackage = ['go', 'rust', 'postgresql.org', 'ruby', 'bun'].some(pkg => packagePath.includes(pkg))
          const basePageTimeout = isComplexPackage ? 60000 : 30000
          const baseGlobalTimeout = isComplexPackage ? 120000 : 60000

          const pageTimeout = basePageTimeout * attempts
          const globalTimeout = baseGlobalTimeout * attempts

          console.error(`Using timeouts for ${packagePath} (attempt ${attempts}): page=${pageTimeout}ms, global=${globalTimeout}ms`)

          // Set a timeout for each package to avoid hanging
          const fetchPromise = fetchPkgxPackage(packagePath, {
            timeout: pageTimeout,
          })

          // Add a global timeout to prevent hanging
          const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error(`Timeout fetching ${packagePath}`)), globalTimeout)
          })

          const { packageInfo, originalName, fullDomainName } = await Promise.race([
            fetchPromise,
            timeoutPromise,
          ]) as any

          // Create a filename-safe version of the fullDomainName
          const safeFilename = fullDomainName.replace(/\//g, '-')

          // Add aliases information to the package info
          const knownAliases = []

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

          // Add path components as aliases if it's a nested path
          if (packagePath.includes('/')) {
            const pathParts = packagePath.split('/')
            const lastPart = pathParts[pathParts.length - 1]
            if (!knownAliases.includes(lastPart)) {
              knownAliases.push(lastPart)
            }
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

          console.error(`Successfully saved ${packagePath} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
          successCount++
          success = true
        }
        catch (error) {
          if (attempts >= 3) {
            console.error(`Failed to fetch package ${packagePath} after ${attempts} attempts:`, error)
            failCount++
            failedPackages.push(packagePath)
          }
          else {
            console.error(`Attempt ${attempts} failed for ${packagePath}, retrying...`, error)
          }

          attempts++

          // Short pause before retrying
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
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
    console.error('Updated package aliases:', PACKAGE_ALIASES)
    console.error(`Fetch completed in ${hours}h ${minutes % 60}m ${seconds}s. Files saved to ${outputDir}`)
    console.error(`Results: ${successCount} successful, ${failCount} failed`)

    if (failedPackages.length > 0) {
      console.error(`Failed packages: ${failedPackages.join(', ')}`)
      // Save failed packages to file for possible retry later
      const failedFile = path.join(outputDir, '_failed.json')
      fs.writeFileSync(failedFile, JSON.stringify(failedPackages, null, 2))
    }

    // Save final aliases to a file
    const aliasesFile = path.join(outputDir, '_aliases.json')
    fs.writeFileSync(aliasesFile, JSON.stringify(PACKAGE_ALIASES, null, 2))

    console.error(`All done! Aliases saved to ${aliasesFile}`)

    // Explicitly exit to avoid any hanging processes
    process.exit(0)
  }
  catch (error) {
    console.error('Fetch failed:', error)
    process.exit(1)
  }
}

// Run the fetch
fetchAllPackages().catch((error) => {
  console.error('Unhandled error:', error)
  process.exit(1)
})
