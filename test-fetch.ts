import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { fetchPkgxPackage, PACKAGE_ALIASES } from './src/packages/fetch'

/**
 * Fetches all package paths from pkgx.dev
 */
async function fetchAllPackagePaths(limit = 50): Promise<string[]> {
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

    // Take only up to the limit
    const limitedPaths = packagePaths.slice(0, limit)
    return limitedPaths
  }
  finally {
    await browser.close()
  }
}

/**
 * Fetches project list from the GitHub API as fallback
 */
async function fetchPackageListFromGitHub(limit = 50): Promise<string[]> {
  try {
    console.error('Fetching package list from GitHub API...')

    // API URL for pkgxdev/pantry projects directory
    const apiUrl = 'https://api.github.com/repos/pkgxdev/pantry/contents/projects'

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'ts-pkgx-tool',
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`)
    }

    const data = await response.json() as any[]

    // Extract project names
    const projects = data
      .filter(item => item.type === 'dir')
      .map(item => item.name)
      .slice(0, limit)

    console.error(`Found ${projects.length} projects on GitHub: ${projects.join(', ')}`)
    return projects
  }
  catch (error) {
    console.error('Error fetching projects from GitHub:', error)
    // Fallback to hardcoded list if GitHub API fails
    return [
      'node',
      'python',
      'go',
      'rust',
      'ruby',
      'php',
      'perl',
      'deno',
      'bun',
      'postgresql.org',
      'llvm.org',
      'cmake.org',
      'sqlite.org',
      'mysql.com',
      'nginx.org',
    ].slice(0, limit)
  }
}

/**
 * Test script to fetch packages from pkgx.dev and store them with alias information
 */
async function testFetchPackages(): Promise<void> {
  try {
    console.error('Starting test fetch of packages...')
    console.error('Current package aliases:', PACKAGE_ALIASES)

    // Create output directory
    const outputDir = path.join(process.cwd(), 'test-packages')
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // First try to fetch all package paths including nested paths
    let packagesToTest: string[]
    try {
      packagesToTest = await fetchAllPackagePaths(50)
    }
    catch (error) {
      console.error('Failed to scrape package paths, falling back to GitHub API:', error)
      packagesToTest = await fetchPackageListFromGitHub(50)
    }

    // Clean the directory first
    fs.readdirSync(outputDir).forEach((file) => {
      fs.unlinkSync(path.join(outputDir, file))
    })
    console.error(`Cleaned output directory: ${outputDir}`)

    console.error(`Testing with ${packagesToTest.length} packages: ${packagesToTest.join(', ')}`)

    // Count successful and failed packages
    let successCount = 0
    let failCount = 0

    // List of packages that need retries
    const retryPackages = []

    // Start time for the entire process
    const startTime = Date.now()

    // Process each package
    for (const [index, packagePath] of packagesToTest.entries()) {
      // Calculate and display progress
      const percentComplete = Math.round((index / packagesToTest.length) * 100)
      const elapsedSeconds = Math.round((Date.now() - startTime) / 1000)
      const estimatedTotalSeconds = index > 0 ? Math.round(elapsedSeconds / index * packagesToTest.length) : 0
      const remainingSeconds = Math.max(0, estimatedTotalSeconds - elapsedSeconds)

      console.error(`[${index + 1}/${packagesToTest.length}] (${percentComplete}%) Fetching package ${packagePath}... ETA: ${Math.floor(remainingSeconds / 60)}m ${remainingSeconds % 60}s`)

      // Track retry attempts for this package
      let attempts = 1
      let success = false

      while (!success && attempts <= 3) {
        if (attempts > 1) {
          console.error(`Retry attempt ${attempts} for ${packagePath}...`)
        }

        try {
          // Adjust timeout based on the package difficulty or retry attempt
          // Increase timeout for each retry attempt
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

          // Create a filename-safe version of the fullDomainName and originalName
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
            retryPackages.push(packagePath)
          }
          else {
            console.error(`Attempt ${attempts} failed for ${packagePath}, retrying...`, error)
          }

          attempts++

          // Short pause before retrying
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    }

    // Calculate total time
    const totalSeconds = Math.round((Date.now() - startTime) / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    // Display the updated aliases
    console.error('Updated package aliases:', PACKAGE_ALIASES)
    console.error(`Test completed in ${minutes}m ${seconds}s. Files saved to ${outputDir}`)
    console.error(`Results: ${successCount} successful, ${failCount} failed`)

    if (retryPackages.length > 0) {
      console.error(`Failed packages: ${retryPackages.join(', ')}`)
    }

    // Explicitly exit to avoid any hanging processes
    process.exit(0)
  }
  catch (error) {
    console.error('Test failed:', error)
    process.exit(1)
  }
}

// Run the test
testFetchPackages().catch((error) => {
  console.error('Unhandled error:', error)
  process.exit(1)
})
