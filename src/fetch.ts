/* eslint-disable no-console */
import type { Browser } from 'playwright'
import type { FetchProjectsOptions, GitHubContent, PackageFetchOptions, PkgxPackage, ProjectFolder } from './types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { ALL_KNOWN_PACKAGES, DEFAULT_CACHE_DIR, DEFAULT_CACHE_EXPIRATION_MINUTES, DEFAULT_TIMEOUT_MS, PACKAGE_ALIASES } from './consts'
import { saveRateLimitInfo, shouldProceedWithGitHubRequest } from './utils'

/**
 * Checks if a cached package exists and is still valid
 * @param packageName Name of the package to check
 * @param options Cache options
 * @returns The cached package data if valid, null otherwise
 */
export function getValidCachedPackage(
  packageName: string,
  options: PackageFetchOptions = {},
): { packageInfo: PkgxPackage, filePath: string } | null {
  try {
    // Determine cache directory
    const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR

    // If cache is disabled, return null immediately
    if (options.cache === false) {
      console.log(`Cache disabled for ${packageName}, skipping cache check`)
      return null
    }

    // Handle aliases - need to check the canonical name
    const resolvedName = PACKAGE_ALIASES[packageName] || packageName

    // Create a safe filename for the cache file - preserve dots, only replace slashes
    const safeFilename = resolvedName.replace(/\//g, '-')
    const cacheFilePath = path.join(cacheDir, `${safeFilename}.json`)

    console.log(`Checking for cache file: ${cacheFilePath}`)

    // Check if the cache file exists
    if (!fs.existsSync(cacheFilePath)) {
      return null
    }

    // Read and parse the cached data
    const cachedData = JSON.parse(fs.readFileSync(cacheFilePath, 'utf-8')) as PkgxPackage

    // Check if the cached data has a fetchedAt timestamp
    if (!cachedData.fetchedAt) {
      return null
    }

    // Check if the cache has expired
    const cacheExpirationMinutes = options.cacheExpirationMinutes || DEFAULT_CACHE_EXPIRATION_MINUTES
    const cacheExpirationMs = cacheExpirationMinutes * 60 * 1000
    const now = Date.now()

    if (now - cachedData.fetchedAt > cacheExpirationMs) {
      console.log(`Cache for ${packageName} has expired (age: ${Math.round((now - cachedData.fetchedAt) / 60000)} minutes)`)
      return null
    }

    console.log(`Using cached data for ${packageName} (age: ${Math.round((now - cachedData.fetchedAt) / 60000)} minutes)`)
    return { packageInfo: cachedData, filePath: cacheFilePath }
  }
  catch (error) {
    console.error(`Error reading cache for ${packageName}:`, error)
    return null
  }
}

/**
 * Saves package data to the cache
 * @param packageName Name of the package
 * @param packageInfo Package data to cache
 * @param options Cache options
 * @returns Path to the cached file
 */
export function saveToCacheAndOutput(
  packageName: string,
  packageInfo: PkgxPackage,
  options: PackageFetchOptions = {},
): { cachePath: string, outputPath: string } {
  // Add timestamp to the package info for cache
  const enhancedPackageInfo = {
    ...packageInfo,
    fetchedAt: Date.now(),
  }

  // Determine cache directory and ensure it exists
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR
  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir, { recursive: true })
  }

  // Create a safe filename for the cache file - preserve dots, only replace slashes
  const safeFilename = packageName.replace(/\//g, '-')
  const cacheFilePath = path.join(cacheDir, `${safeFilename}.json`)

  // Save to cache with fetchedAt timestamp
  fs.writeFileSync(cacheFilePath, JSON.stringify(enhancedPackageInfo, null, 2))

  // Determine output directory and ensure it exists
  const outputDir = options.outputDir || 'packages'
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Create TypeScript file in the output directory
  const outputFilePath = savePackageAsTypeScript(outputDir, safeFilename, packageInfo)

  return { cachePath: cacheFilePath, outputPath: outputFilePath }
}

// Global browser instance to be shared across fetches (only used when not in concurrent mode)
let sharedBrowser: Browser | null = null

// Browser pool for concurrent operations
const browserPool: { browser: Browser, inUse: boolean, createdAt: number }[] = []
// Maximum number of browsers to keep in the pool (will be set based on concurrency)
let MAX_BROWSER_POOL_SIZE = 10 // Default limit, can be adjusted based on concurrency setting

// Function to check system resources and adjust behavior
function getSystemResourceStatus() {
  const memUsage = process.memoryUsage()
  const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024)
  const heapTotalMB = Math.round(memUsage.heapTotal / 1024 / 1024)
  const rssUsedMB = Math.round(memUsage.rss / 1024 / 1024)

  // Consider system under stress if heap usage is high, RSS is very high, or we have many browsers
  const isUnderStress = heapUsedMB > 300 || rssUsedMB > 800 || browserPool.length >= MAX_BROWSER_POOL_SIZE

  return {
    heapUsedMB,
    heapTotalMB,
    rssUsedMB,
    browserCount: browserPool.length,
    isUnderStress,
  }
}

// Define a variable to track if we've already logged a navigation message
let navigationLogged = false

// Create a function to log navigation only once
function logNavigation(url: string) {
  if (!navigationLogged) {
    console.log(`Navigating to ${url}...`)
    navigationLogged = true
  }
}

/**
 * Ensures all browser resources are properly closed
 */
export async function cleanupBrowserResources(): Promise<void> {
  // Clean up shared browser if it exists
  if (sharedBrowser) {
    try {
      console.log('Closing shared browser contexts and pages...')
      // Close any remaining contexts first
      const contexts = await sharedBrowser.contexts()
      for (const context of contexts) {
        try {
          // Close any pages in the context
          const pages = context.pages()
          for (const page of pages) {
            try {
              await Promise.race([
                page.close().catch(() => {}),
                new Promise(resolve => setTimeout(resolve, 1000)),
              ])
            }
            catch {
              // Ignore errors when closing pages
            }
          }
          await Promise.race([
            context.close().catch(() => {}),
            new Promise(resolve => setTimeout(resolve, 1000)),
          ])
        }
        catch {
          // Ignore errors when closing contexts
        }
      }

      // Close the browser with a timeout
      console.log('Closing browser...')
      await Promise.race([
        sharedBrowser.close().catch(e => console.error('Error closing browser:', e)),
        new Promise(resolve => setTimeout(resolve, 3000)),
      ])

      // Clear the shared browser reference even if close fails
      sharedBrowser = null
      console.log('Shared browser resources cleaned up')
    }
    catch (error) {
      console.error('Error during browser cleanup:', error)
      // Clear the reference even on error
      sharedBrowser = null
    }
  }

  // Clean up browser pool
  if (browserPool.length > 0) {
    console.log(`Closing ${browserPool.length} browsers from pool...`)
    const closePromises = browserPool.map(async (entry, index) => {
      try {
        console.log(`Closing browser ${index + 1}/${browserPool.length}...`)
        await Promise.race([
          entry.browser.close().catch(e => console.error(`Error closing pool browser ${index + 1}:`, e)),
          new Promise(resolve => setTimeout(resolve, 3000)),
        ])
      }
      catch (error) {
        console.error(`Error closing browser ${index + 1} from pool:`, error)
      }
    })

    try {
      await Promise.all(closePromises)
    }
    catch (error) {
      console.error('Error during pool cleanup:', error)
    }

    // Clear the pool regardless of errors
    browserPool.length = 0
    console.log('Browser pool cleaned up')
  }
}

/**
 * Get a browser from the pool or create a new one if needed
 */
async function acquireBrowser(timeout: number): Promise<Browser | null> {
  // Check system resources before proceeding
  const resourceStatus = getSystemResourceStatus()
  if (resourceStatus.isUnderStress) {
    console.log(`System under stress (Heap: ${resourceStatus.heapUsedMB}MB, RSS: ${resourceStatus.rssUsedMB}MB, Browsers: ${resourceStatus.browserCount}), forcing cleanup...`)
    await cleanupBrowserResources()
    await new Promise(resolve => setTimeout(resolve, 2000)) // Wait 2 seconds after cleanup
  }

  // First, check for and remove any dead browsers from the pool
  for (let i = browserPool.length - 1; i >= 0; i--) {
    try {
      // Try a simple operation to check if browser is still responsive
      try {
        await browserPool[i].browser.contexts()
      }
      catch {
        // If this fails, the browser is dead and should be removed
        console.log(`Removing dead browser from pool (index: ${i})`)
        browserPool.splice(i, 1)
      }
    }
    catch {
      // Remove from pool if any error occurs
      console.log(`Removing errored browser from pool (index: ${i})`)
      browserPool.splice(i, 1)
    }
  }

  // Try to reuse an available browser from the pool
  const availableEntry = browserPool.find(entry => !entry.inUse)
  if (availableEntry) {
    availableEntry.inUse = true
    return availableEntry.browser
  }

  // If pool is at max capacity, wait for an available browser instead of creating new ones
  if (browserPool.length >= MAX_BROWSER_POOL_SIZE) {
    console.log(`Browser pool at max capacity (${MAX_BROWSER_POOL_SIZE}), waiting for available browser...`)

    // Wait for a browser to become available (with timeout)
    const maxWaitTime = 30000 // 30 seconds
    const startWait = Date.now()

    while (Date.now() - startWait < maxWaitTime) {
      const availableEntry = browserPool.find(entry => !entry.inUse)
      if (availableEntry) {
        availableEntry.inUse = true
        return availableEntry.browser
      }
      // Wait a bit before checking again
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    // If we still can't get a browser, force close the oldest one
    console.log('Timeout waiting for available browser, forcing cleanup...')
    browserPool.sort((a, b) => a.createdAt - b.createdAt)
    const oldestEntry = browserPool.shift()
    if (oldestEntry) {
      try {
        await Promise.race([
          oldestEntry.browser.close().catch(e => console.error('Error closing oldest browser:', e)),
          new Promise(resolve => setTimeout(resolve, 3000)),
        ])
      }
      catch (error) {
        console.error('Error closing oldest browser:', error)
      }
    }
  }

  // If not found, create a new browser instance with retry logic
  let browser: Browser | null = null
  let retryCount = 0
  const maxRetries = 3

  // Add a longer delay to prevent overwhelming the system with concurrent launches
  await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000)) // 1-3 second delay

  while (!browser && retryCount < maxRetries) {
    try {
      browser = await chromium.launch({
        headless: true,
        timeout: Math.min(timeout, 8000), // Increase browser launch timeout to 8 seconds
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-web-security',
          '--disable-features=VizDisplayCompositor',
          '--memory-pressure-off',
          '--max_old_space_size=256', // Reduce memory allocation per browser
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-renderer-backgrounding',
        ],
      })
    }
    catch (error) {
      retryCount++
      console.error(`Browser launch attempt ${retryCount} failed:`, error)

      // If we get ENOENT, connection errors, or timeout errors, the system is likely overwhelmed
      const errorString = String(error)
      if (errorString.includes('ENOENT') || errorString.includes('Failed to connect')
        || errorString.includes('Timeout') || errorString.includes('No target found')
        || errorString.includes('spawn') || errorString.includes('targetId')
        || errorString.includes('Target page, context or browser has been closed')) {
        console.error('System appears overwhelmed, forcing aggressive cleanup and waiting longer...')
        // Force cleanup of all browsers
        await cleanupBrowserResources()
        // Wait much longer before retrying when system is overwhelmed
        await new Promise(resolve => setTimeout(resolve, 20000 * retryCount)) // Increased wait time
      }

      if (retryCount >= maxRetries) {
        console.error(`Failed to launch browser after ${maxRetries} attempts, skipping this operation`)
        return null // Return null instead of throwing to allow graceful degradation
      }
      // Wait before retrying with exponential backoff
      await new Promise(resolve => setTimeout(resolve, 5000 * retryCount)) // Increased retry delay
    }
  }

  if (!browser) {
    throw new Error('Failed to create browser instance')
  }

  // Add to pool with current timestamp
  browserPool.push({
    browser,
    inUse: true,
    createdAt: Date.now(),
  })
  console.log(`Created new browser instance (pool size: ${browserPool.length}/${MAX_BROWSER_POOL_SIZE})`)

  return browser
}

/**
 * Release a browser back to the pool
 */
function releaseBrowser(browser: Browser): void {
  const entry = browserPool.find(entry => entry.browser === browser)
  if (entry) {
    entry.inUse = false
    console.log(`Released browser back to pool (available: ${browserPool.filter(e => !e.inUse).length}/${browserPool.length})`)
  }
}

/**
 * Fetches project folder names from the pkgxdev pantry repository using GitHub API
 * @param options Optional configuration
 * @returns Promise resolving to an array of project folders
 */
export async function fetchPkgxProjects(options: FetchProjectsOptions = {}): Promise<ProjectFolder[]> {
  const apiUrl = options.apiUrl || 'https://api.github.com/repos/pkgxdev/pantry/contents/projects'

  try {
    console.log(`Fetching projects from GitHub API: ${apiUrl}`)

    const response = await fetch(apiUrl, {
      headers: {
        // Using GitHub API without authentication has a lower rate limit
        // If you hit rate limits, you'll need to add an auth token
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch from GitHub API: ${response.statusText}`)
    }

    const contents = await response.json() as GitHubContent[]

    // Filter to only include directories
    const projects = contents
      .filter(item => item.type === 'dir')
      .map(item => ({
        name: item.name,
        url: item.html_url,
      }))

    console.log(`Retrieved ${projects.length} projects from GitHub API`)

    // Sort projects alphabetically for consistency
    projects.sort((a, b) => a.name.localeCompare(b.name))

    return projects
  }
  catch (error) {
    console.error('Error fetching projects from GitHub API:', error)
    throw error
  }
}

/**
 * Fetches package information from pkgx.dev using Playwright
 * @param packageName The name of the package to fetch
 * @param options Optional configuration
 * @returns Promise resolving to package information with original name and full domain name
 */
export async function fetchPkgxPackage(
  packageName: string,
  options: PackageFetchOptions = {},
): Promise<{ packageInfo: PkgxPackage, originalName: string, fullDomainName: string }> {
  const originalName = packageName
  let fullDomainName = packageName
  let browser = null
  let page = null
  // Track if we created a browser or are using a provided one
  let createdBrowser = false

  // Special handling for known patterns
  // For paths like 'agwa.name/git-crypt', treat 'git-crypt' as the name
  // and 'agwa.name' as the domain
  if (packageName.includes('/')) {
    const [domain, name] = packageName.split('/')
    console.log(`Identified nested package: domain=${domain}, name=${name}`)
  }

  // Handle common package aliases
  if (PACKAGE_ALIASES[packageName]) {
    console.error(`'${packageName}' is an alias for '${PACKAGE_ALIASES[packageName]}', redirecting...`)
    fullDomainName = PACKAGE_ALIASES[packageName]
    packageName = PACKAGE_ALIASES[packageName]
  }

  try {
    // Set a maximum time for browser operations
    const browserTimeout = options.timeout || DEFAULT_TIMEOUT_MS
    const debugMode = options.debug || false

    // Try to use the provided browser from the pool if available
    if (options.browser) {
      browser = options.browser
    }
    // Otherwise try to use shared browser instance if available
    else if (sharedBrowser) {
      browser = sharedBrowser
    }
    else {
      // Launch a new browser with retries
      let retryCount = 0
      const maxLaunchRetries = 3
      createdBrowser = true

      while (retryCount < maxLaunchRetries) {
        try {
          browser = await chromium.launch({
            headless: true,
            timeout: 8000, // 8 second timeout for browser launch
          })
          sharedBrowser = browser
          break
        }
        catch (error) {
          retryCount++
          console.error(`Browser launch attempt ${retryCount} failed:`, error)
          if (retryCount >= maxLaunchRetries) {
            throw new Error(`Failed to launch browser after ${maxLaunchRetries} attempts`)
          }
          // Wait before retrying
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
    }

    // At this point browser should never be null due to our retry logic
    if (!browser) {
      console.error('Unexpected error: browser is null after successful launch')
      return createMinimalPackageInfo(packageName, originalName, fullDomainName)
    }

    const context = await browser.newContext()
    page = await context.newPage()

    const timeout = browserTimeout

    try {
      // Reset navigation logged state at the beginning of each fetch
      navigationLogged = false

      const pkgUrl = `https://pkgx.dev/pkgs/${packageName}/`
      logNavigation(pkgUrl)

      // Navigate to the package page
      await page.goto(pkgUrl, {
        timeout,
        waitUntil: 'networkidle',
      })

      // Wait a bit for client-side rendering to finish
      await page.waitForTimeout(2000)

      // Take a screenshot if debug mode is enabled
      if (debugMode) {
        const debugDir = path.join(process.cwd(), 'debug')
        if (!fs.existsSync(debugDir)) {
          fs.mkdirSync(debugDir, { recursive: true })
        }
        const screenshotPath = path.join(debugDir, `${packageName.replace(/\//g, '-')}_debug.png`)
        await page.screenshot({ path: screenshotPath })
        console.error(`Saved debug screenshot to ${screenshotPath}`)
      }

      console.log('Extracting package information...')

      // Extract package information and possible alias
      const result = await page.evaluate(() => {
        // Helper functions
        const getTextContent = (selector: string): string => {
          const element = document.querySelector(selector)
          return element ? (element.textContent?.trim() || '') : ''
        }

        // Get primary data from the page - using the MUI classes
        const nameElement = document.querySelector('h2.MuiTypography-h2')

        // Get the name (which might be an alias)
        const name = nameElement ? nameElement.childNodes[0].textContent?.trim() || '' : ''

        // Extract domain from span inside the h2
        const domainElement = document.querySelector('h2.MuiTypography-h2 span')
        const domain = domainElement
          ? domainElement.textContent?.trim().replace(/[()]/g, '') || ''
          : window.location.pathname.split('/pkgs/')[1]?.replace(/\/$/, '') || ''

        // Check for possible alias (e.g., "bun" for "bun.sh")
        const possibleAlias = name.toLowerCase()

        // Get description
        const description = getTextContent('h5.MuiTypography-h5:not(:has(+ ul))')

        // Get links
        const packageYmlUrl = (document.querySelector('a[href*="package.yml"]') as HTMLAnchorElement)?.href || ''
        const homepageUrl = (document.querySelector('a[href*="Homepage"]') as HTMLAnchorElement)?.href
          || (document.querySelector('a[href*="homepage"]') as HTMLAnchorElement)?.href || ''
        const githubUrl = (document.querySelector('a[href*="GitHub"]') as HTMLAnchorElement)?.href
          || (document.querySelector('a[href*="github"]') as HTMLAnchorElement)?.href || ''

        // Get install command
        const installCommand = getTextContent('div[data-terminal="true"]')

        // Find elements with specific headings and get the list items below them
        function getItemsBelowHeading(heading: string): string[] {
          const headings = Array.from(document.querySelectorAll('h5.MuiTypography-h5'))

          for (const h of headings) {
            if (h.textContent?.includes(heading)) {
              // Find the next UL after this heading
              let nextEl = h.nextElementSibling
              while (nextEl && nextEl.tagName !== 'UL') {
                nextEl = nextEl.nextElementSibling
              }

              if (nextEl && nextEl.tagName === 'UL') {
                // Get all list items
                const items = Array.from(nextEl.querySelectorAll('li'))
                return items.map(li => li.textContent?.trim() || '').filter(Boolean)
              }
            }
          }

          return []
        }

        // Get lists using the heading-based approach
        const programs = getItemsBelowHeading('Programs')
        const companions = getItemsBelowHeading('Companions')
        const dependencies = getItemsBelowHeading('Dependencies')
        const versions = getItemsBelowHeading('Versions')

        // Return two separate objects to avoid type issues
        return {
          possibleAlias,
          packageInfo: {
            name,
            domain,
            description,
            packageYmlUrl,
            homepageUrl,
            githubUrl,
            installCommand,
            programs,
            companions,
            dependencies,
            versions,
          },
        }
      })

      // Extract the package info and possible alias
      const { packageInfo, possibleAlias } = result

      // Special handling for nested paths
      if (originalName.includes('/')) {
        const [parentDomain, subPath] = originalName.split('/')

        // If we have a nested path, ensure proper domain and name are set
        if (!packageInfo.name || packageInfo.name === '') {
          // Use the subPath as the name if name is empty
          packageInfo.name = subPath
        }

        if (!packageInfo.domain || packageInfo.domain === '') {
          // Use the parent domain if domain is empty
          packageInfo.domain = parentDomain
        }

        // Update fullDomainName to include the parent
        fullDomainName = packageInfo.domain.includes('/')
          ? packageInfo.domain
          : `${packageInfo.domain}/${subPath}`
      }

      // Check for reverse aliases (eg "bun" for "bun.sh")
      if (possibleAlias && packageInfo.domain
        && possibleAlias !== packageInfo.domain
        && !packageInfo.domain.startsWith(possibleAlias)) {
        console.log(`Detected reverse alias: '${possibleAlias}' for '${packageInfo.domain}'`)
        // Update our full domain name if we found a reverse alias through the website
        fullDomainName = packageInfo.domain

        // Add the newly identified alias to our aliases map
        if (possibleAlias && possibleAlias !== originalName && packageInfo.domain) {
          console.log(`Adding new alias: '${possibleAlias}' -> '${packageInfo.domain}'`)
          PACKAGE_ALIASES[possibleAlias] = packageInfo.domain
        }

        // Also add the original name as an alias if it's different from both possibleAlias and domain
        if (originalName !== possibleAlias && originalName !== packageInfo.domain) {
          console.error(`Adding original name as alias: '${originalName}' -> '${packageInfo.domain}'`)
          PACKAGE_ALIASES[originalName] = packageInfo.domain
        }
      }

      // Alternative content extraction if the first method fails
      if (!packageInfo.name || packageInfo.name === '') {
        console.warn('First extraction method failed, trying alternative approach...')

        // Take a screenshot for debugging
        if (debugMode) {
          const debugDir = path.join(process.cwd(), 'debug')
          if (!fs.existsSync(debugDir)) {
            fs.mkdirSync(debugDir, { recursive: true })
          }
          const screenshotPath = path.join(debugDir, `${packageName.replace(/\//g, '-')}_alternative_debug.png`)
          await page.screenshot({ path: screenshotPath })
          console.error(`Saved alternative debug screenshot to ${screenshotPath}`)
        }

        // Try a simpler extraction approach
        const content = await page.content()

        // For nested paths, use the last part as the name
        if (originalName.includes('/')) {
          const parts = originalName.split('/')
          packageInfo.name = parts[parts.length - 1]
          packageInfo.domain = parts[0]
        }
        else {
          packageInfo.name = originalName
          packageInfo.domain = fullDomainName
        }

        // Try direct selector approach
        packageInfo.description = await page.evaluate(() => {
          const descEl = document.querySelector('h5.MuiTypography-root')
          return descEl ? descEl.textContent?.trim() || '' : ''
        })

        // Extract from HTML content for versions
        if (!packageInfo.versions || packageInfo.versions.length === 0) {
          const versionMatch = content.match(/<li>([\d.]+)<\/li>/g)
          if (versionMatch) {
            packageInfo.versions = versionMatch
              .map((m: string) => m.replace(/<\/?li>/g, ''))
              .filter(Boolean)
          }
          else {
            packageInfo.versions = []
          }
        }

        // Try to extract package links
        const ymlUrl = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="package.yml"]'))
          return links.length > 0 ? (links[0] as HTMLAnchorElement).href : ''
        })
        packageInfo.packageYmlUrl = ymlUrl

        const homeUrl = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="Homepage"]'))
          return links.length > 0 ? (links[0] as HTMLAnchorElement).href : ''
        })
        packageInfo.homepageUrl = homeUrl

        const gitUrl = await page.evaluate(() => {
          const links = Array.from(document.querySelectorAll('a[href*="GitHub"]'))
          return links.length > 0 ? (links[0] as HTMLAnchorElement).href : ''
        })
        packageInfo.githubUrl = gitUrl
      }

      // Try to get versions from GitHub API if still empty
      if (!packageInfo.versions || packageInfo.versions.length === 0) {
        console.warn('Attempting to fetch versions from GitHub API...')
        try {
          // Get the correct GitHub path - use domain if available
          const githubPath = packageInfo.domain || packageName
          const versions = await fetchVersionsFromGitHub(githubPath)
          packageInfo.versions = versions
        }
        catch (error) {
          console.warn(`Failed to fetch versions for ${packageName} from GitHub API:`, error)
          packageInfo.versions = []
        }
      }

      // Sort versions using semver if they exist
      if (packageInfo.versions && packageInfo.versions.length > 0) {
        try {
          // Sort versions in descending order (newest first)
          packageInfo.versions.sort((a: string, b: string) => {
            try {
              // Use Bun.semver.order with negative multiplier for descending sort (newest first)
              return -1 * Bun.semver.order(a, b)
            }
            catch {
              // Fallback to string comparison if semver fails
              return b.localeCompare(a)
            }
          })
        }
        catch (error) {
          console.warn(`Warning: Failed to sort versions for ${packageName} using semver:`, error)
        }
      }

      // Ensure we have values for required fields
      packageInfo.name = packageInfo.name || originalName
      packageInfo.domain = packageInfo.domain || fullDomainName
      packageInfo.installCommand = packageInfo.installCommand || `pkgx ${originalName}`
      packageInfo.programs = packageInfo.programs || []
      packageInfo.companions = packageInfo.companions || []
      packageInfo.dependencies = packageInfo.dependencies || []
      packageInfo.versions = packageInfo.versions || []

      // Validate data quality to prevent writing incomplete packages
      const hasAnyContent = packageInfo.versions.length > 0 || packageInfo.programs.length > 0 || packageInfo.dependencies.length > 0

      // Check if this looks like a package that should have dependencies
      // Most real packages have either programs, versions, or dependencies
      const looksLikeRealPackage = packageInfo.programs.length > 0 || packageInfo.versions.length > 0

      // Additional validation: if description is generic, it might be a failed fetch
      const hasGenericDescription = packageInfo.description.includes('Package information for')
        || packageInfo.description.trim() === ''
        || packageInfo.description === `${packageName} package`

      // If it looks like a real package but has suspicious data quality, log a warning
      if (looksLikeRealPackage && packageInfo.dependencies.length === 0 && !hasAnyContent) {
        console.warn(`⚠️  Package ${packageName} appears to have incomplete data (no dependencies, versions, or programs). This might be a fetch error.`)
      }

      if (hasGenericDescription && !hasAnyContent) {
        console.warn(`⚠️  Package ${packageName} has generic description and no substantial data. This might be a fetch error.`)
      }

      return { packageInfo, originalName, fullDomainName }
    }
    finally {
      // Close the page but keep the browser for reuse
      if (page) {
        try {
          await page.close()
        }
        catch (pageError) {
          console.error(`Error closing page for ${packageName}:`, pageError)
        }
      }
    }
  }
  catch (error) {
    console.error(`Error in fetchPkgxPackage for ${packageName}:`, error)

    // Make sure to close the browser if the outer try block fails
    if (browser) {
      try {
        await browser.close()
      }
      catch (err) {
        console.error(`Error closing browser for ${packageName}:`, err)
      }
    }

    throw error
  }
  finally {
    // Only close the browser if we created it and it's not the shared browser
    if (page) {
      try {
        await page.close()
      }
      catch {
        // Ignore errors when closing page
      }
    }

    // We don't close the browser here if we didn't create it or if it's the shared browser
    if (createdBrowser && browser && browser !== sharedBrowser) {
      try {
        await browser.close()
      }
      catch {
        // Ignore errors when closing browser
      }
    }
  }
}

/**
 * Attempts to fetch package versions from GitHub API
 */
async function fetchVersionsFromGitHub(packageName: string): Promise<string[]> {
  try {
    // Check if we're rate limited before making the request
    if (!shouldProceedWithGitHubRequest()) {
      console.warn(`Skipping GitHub API request for versions due to rate limiting`)
      return []
    }

    const response = await fetch(`https://api.github.com/repos/pkgxdev/pantry/contents/projects/${packageName}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'pkgx-tools',
      },
      // Add a timeout to prevent hanging
      signal: AbortSignal.timeout(15000),
    })

    // Save rate limit information to file
    saveRateLimitInfo(response.headers)

    // Handle rate limiting
    if (response.status === 403) {
      const rateLimitRemaining = response.headers.get('X-RateLimit-Remaining')
      const rateLimitReset = response.headers.get('X-RateLimit-Reset')

      const resetTime = rateLimitReset ? new Date(Number(rateLimitReset) * 1000).toLocaleString() : 'unknown'
      console.warn(`GitHub API rate limit exceeded. Remaining: ${rateLimitRemaining || 0}, Reset: ${resetTime}`)

      // Return empty array instead of throwing to avoid breaking the flow
      return []
    }

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}: ${response.statusText}`)
    }

    const data = await response.json() as any[]
    // Look for version files or directories
    return data
      .filter(item => item.name.match(/^v\d+/))
      .map(item => item.name)
  }
  catch (error) {
    console.error('Error fetching versions from GitHub:', error)
    return []
  }
}

function generateProgressBar(completed: number, total: number, width = 30): string {
  const percentage = Math.min(100, Math.round((completed / total) * 100))
  const filledWidth = Math.round((width * completed) / total)
  const emptyWidth = width - filledWidth

  const filledBar = '='.repeat(filledWidth)
  const emptyBar = ' '.repeat(emptyWidth)

  return `[${filledBar}${emptyBar}] ${percentage}%`
}

// Add periodic cleanup function for browser resources
const CLEANUP_INTERVAL = 300000 // 5 minutes
let cleanupInterval: NodeJS.Timeout | null = null

/**
 * Sets up process exit handlers to ensure proper cleanup
 */
export function setupCleanupHandlers(): void {
  // Add graceful shutdown handlers
  const exitHandler = async (signal: string) => {
    console.log(`\nReceived ${signal} signal. Cleaning up resources...`)

    // Clear any intervals
    if (cleanupInterval) {
      clearInterval(cleanupInterval)
    }

    // Perform cleanup of browser resources
    await cleanupBrowserResources()

    console.log('Resources cleaned up. Exiting.')

    // Force exit after 5 seconds if process is hanging
    setTimeout(() => {
      console.log('Forcing process exit...')
      process.exit(0)
    }, 5000)
  }

  // Handle various termination signals
  process.on('SIGINT', () => exitHandler('SIGINT'))
  process.on('SIGTERM', () => exitHandler('SIGTERM'))
  process.on('uncaughtException', (error) => {
    console.error('Uncaught exception:', error)
    exitHandler('uncaughtException')
  })
}

// Initialize handlers
setupCleanupHandlers()

// Add global error handlers to prevent crashes
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception caught:', error.message)
  if (error.message.includes('No target found for targetId')
    || error.message.includes('Assertion error')
    || error.message.includes('Target page, context or browser has been closed')
    || error.message.includes('Failed to connect')
    || error.message.includes('Connection closed')
    || error.message.includes('Protocol error')
    || error.message.includes('WebSocket connection closed')
    || error.message.includes('Browser has been closed')) {
    console.error('Browser/network connection error detected, continuing execution...')
    // Don't exit the process for browser/network errors
    return
  }
  // For other uncaught exceptions, still exit
  console.error('Non-browser error, exiting...')
  process.exit(1)
})

process.on('unhandledRejection', (reason, _promise) => {
  const errorString = String(reason)
  console.error('Unhandled rejection caught:', errorString)
  if (errorString.includes('No target found for targetId')
    || errorString.includes('Assertion error')
    || errorString.includes('Target page, context or browser has been closed')
    || errorString.includes('Failed to connect')
    || errorString.includes('Connection closed')
    || errorString.includes('Protocol error')
    || errorString.includes('WebSocket connection closed')
    || errorString.includes('Browser has been closed')) {
    console.error('Browser/network connection error in promise, continuing execution...')
    // Don't exit the process for browser/network errors
    return
  }
  // For other unhandled rejections, still exit
  console.error('Non-browser promise rejection, exiting...')
  process.exit(1)
})

// Start a periodic cleanup task
export function startPeriodicCleanup(): void {
  // Clear any existing interval
  if (cleanupInterval) {
    clearInterval(cleanupInterval)
  }

  // Set a new interval to periodically clean up resources
  cleanupInterval = setInterval(() => {
    console.log('Running periodic browser resource cleanup...')
    cleanupBrowserResources()
      .then(() => console.log('Periodic cleanup completed'))
      .catch(err => console.error('Error during periodic cleanup:', err))
  }, CLEANUP_INTERVAL)
}

/**
 * Fetches and saves all packages with proper concurrency support
 */
export async function fetchAndSaveAllPackages(options: PackageFetchOptions = {}): Promise<string[]> {
  // Start the periodic cleanup task
  startPeriodicCleanup()

  const timeout = options.timeout || DEFAULT_TIMEOUT_MS
  const outputDir = options.outputDir || 'packages'
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR
  const useCache = options.cache !== false
  const cacheExpirationMinutes = options.cacheExpirationMinutes || DEFAULT_CACHE_EXPIRATION_MINUTES
  const concurrency = options.concurrency || 10

  // Set the browser pool size to match concurrency for 1:1 ratio, but cap it for system stability
  // This gives each concurrent request its own browser for better performance
  let maxBrowsers = 10 // Allow up to 10 browsers
  if (concurrency > 15) {
    maxBrowsers = 10 // Cap at 10 even for very high concurrency
  }
  MAX_BROWSER_POOL_SIZE = Math.min(concurrency, maxBrowsers)

  // Use the requested concurrency
  const actualConcurrency = concurrency

  console.log(`Using timeout: ${timeout}ms for all operations`)
  console.log(`Using concurrency: ${actualConcurrency} concurrent requests (browser pool size: ${MAX_BROWSER_POOL_SIZE})`)

  // Track progress and timing
  const startTime = Date.now()
  let lastCleanupTime = startTime

  try {
    console.log('Fetching all packages...')

    // Start by fetching the complete list from GitHub API
    let allPackageNames: string[] = []
    try {
      // This is now our primary source of package information
      const projects = await fetchPkgxProjects()
      allPackageNames = projects.map(project => project.name)
      console.log(`Found ${allPackageNames.length} packages from GitHub API`)
    }
    catch (githubError) {
      console.error(`Error fetching from GitHub API: ${githubError}`)

      // Fall back to web scraping if GitHub API fails
      console.log('Falling back to web scraping...')

      try {
        // Launch browser for web scraping (not shared, just for this operation)
        const scrapingBrowser = await chromium.launch({
          headless: true,
          timeout: timeout / 2,
        })

        try {
          const context = await scrapingBrowser.newContext()
          const page = await context.newPage()

          console.log('Navigating to pkgx.dev/pkgs...')
          await page.goto('https://pkgx.dev/pkgs', {
            timeout,
            waitUntil: 'networkidle',
          })

          // Wait for client-side rendering
          await page.waitForTimeout(2000)

          console.log('Extracting package list...')
          allPackageNames = await page.evaluate(() => {
            const packageElements = Array.from(document.querySelectorAll('a[href^="/pkgs/"]'))
            return packageElements
              .map((link) => {
                const href = (link as HTMLAnchorElement).href
                const path = href.split('/pkgs/')[1]
                return path ? path.replace(/\/$/, '') : null
              })
              .filter(Boolean) as string[]
          })

          console.log(`Found ${allPackageNames.length} packages from web scraping`)
        }
        finally {
          // Close the scraping browser
          await scrapingBrowser.close()
        }
      }
      catch (scrapingError) {
        console.error(`Error with web scraping fallback: ${scrapingError}`)
      }
    }

    // If both methods failed or returned too few packages, use our built-in list
    if (allPackageNames.length < 600) {
      console.log(`Package count seems low (${allPackageNames.length}), using built-in package list...`)

      // Merge with any packages we already found to ensure we have a complete list
      const combinedList = [...new Set([...allPackageNames, ...ALL_KNOWN_PACKAGES])]
      allPackageNames = combinedList

      console.log(`Combined with built-in list, now have ${allPackageNames.length} packages`)
    }

    // Apply limit if specified
    if (options.limit && options.limit > 0 && options.limit < allPackageNames.length) {
      console.log(`Limiting to ${options.limit} packages as requested`)
      allPackageNames = allPackageNames.slice(0, options.limit)
    }

    // Process packages in chunks for concurrency
    const processedDomains = new Set<string>()
    const savedPackages: string[] = []
    const failedPackages: string[] = []

    // Define a function to process a single package with its own browser instance
    const processPackage = async (packageName: string): Promise<string | null> => {
      // Skip if we've already processed this domain
      if (processedDomains.has(packageName)) {
        console.log(`Skipping ${packageName} (already processed)`)
        return null
      }

      // Check cache first if enabled
      if (useCache) {
        const cachedPackage = getValidCachedPackage(packageName, {
          cacheDir,
          cacheExpirationMinutes,
        })

        if (cachedPackage) {
          const { packageInfo } = cachedPackage
          const fullDomainName = packageInfo.domain || packageName
          const safeFilename = fullDomainName.replace(/\//g, '-')

          // Generate TypeScript file in the output directory
          savePackageAsTypeScript(outputDir, safeFilename, packageInfo)
          console.log(`Used cached data for ${packageName} (generated TypeScript)`)

          // Mark this domain as processed
          processedDomains.add(fullDomainName)

          // Also mark any aliases as processed
          if (packageInfo.aliases && packageInfo.aliases.length > 0) {
            for (const alias of packageInfo.aliases) {
              processedDomains.add(alias)
            }
          }

          return fullDomainName
        }
      }

      let browser = null
      try {
        // Only acquire a browser if we didn't find the package in cache
        browser = await acquireBrowser(timeout)

        // If browser acquisition failed, skip this package
        if (!browser) {
          console.error(`Failed to acquire browser for ${packageName}, skipping`)
          failedPackages.push(packageName)
          return null
        }

        // Fetch and save the package with a timeout to prevent hanging
        const fetchPromise = fetchAndSavePackage(
          packageName,
          outputDir,
          timeout,
          false, // Save as TypeScript instead of JSON
          1, // First attempt
          3, // Max retries
          options.debug || false,
          { // Pass the same cache options
            cacheDir,
            cache: useCache,
            cacheExpirationMinutes,
            browser, // Now correctly passing the browser instance
          },
        )

        // Set a package-specific timeout as a safety measure
        const packageTimeout = timeout // Use the same flat timeout
        const result = await Promise.race([
          fetchPromise,
          new Promise<null>((resolve) => {
            setTimeout(() => {
              console.error(`Package ${packageName} processing timed out after ${packageTimeout}ms`)
              resolve(null)
            }, packageTimeout)
          }),
        ])

        if (!result) {
          // Timeout occurred
          failedPackages.push(packageName)
          console.error(`Skipping ${packageName} due to timeout`)
          return null
        }

        if (result.success && result.fullDomainName) {
          // Mark this domain as processed
          processedDomains.add(result.fullDomainName)

          // Also mark any aliases as processed
          if (result.aliases && result.aliases.length > 0) {
            for (const alias of result.aliases) {
              processedDomains.add(alias)
            }
          }

          return result.fullDomainName
        }
        else {
          // Failed to fetch - check if we have an existing file to preserve
          const safeFilename = packageName.replace(/\//g, '-')
          const existingFilePath = path.join(outputDir, `${safeFilename}.ts`)

          if (fs.existsSync(existingFilePath)) {
            console.log(`Preserving existing file for ${packageName} at ${existingFilePath}`)
            // Mark as processed to avoid overwriting
            processedDomains.add(packageName)
            return packageName
          }

          // No existing file, mark as failed
          failedPackages.push(packageName)
          return null
        }
      }
      catch (error) {
        const errorString = String(error)

        // Check for specific Playwright errors that indicate browser disconnection
        if (errorString.includes('No target found for targetId')
          || errorString.includes('Target page, context or browser has been closed')
          || errorString.includes('Protocol error')
          || errorString.includes('Assertion error')
          || errorString.includes('Connection closed')
          || errorString.includes('Browser has been closed')
          || errorString.includes('Target closed')
          || errorString.includes('Session closed')) {
          console.error(`Browser disconnection error for ${packageName}: ${errorString.substring(0, 100)}...`)

          // Force cleanup of all browsers when we get these errors
          console.log('Forcing browser cleanup due to connection errors...')
          await cleanupBrowserResources()

          // Wait longer before continuing
          await new Promise(resolve => setTimeout(resolve, 3000))
        }
        else {
          console.error(`Error processing package ${packageName}:`, error)
        }

        // Always add to failed packages and continue processing
        failedPackages.push(packageName)
        console.log(`Added ${packageName} to failed packages list, continuing with remaining packages...`)
        return null
      }
      finally {
        // Always release the browser back to the pool if we acquired one
        if (browser) {
          try {
            releaseBrowser(browser)
          }
          catch (error) {
            console.error(`Error releasing browser for ${packageName}:`, error)
            // If we can't release the browser, try to close it to prevent leaks
            try {
              await browser.close().catch(() => {})
            }
            catch {
              // Ignore any close errors
            }
          }
        }
      }
    }

    // Process all packages in parallel with controlled concurrency
    console.log(`Processing ${allPackageNames.length} packages with concurrency of ${actualConcurrency}...`)

    // Set a maximum time for the entire operation (30 minutes)
    const maxOperationTime = 30 * 60 * 1000 // 30 minutes
    const operationStartTime = Date.now()

    // Create chunks for better progress reporting
    // Use the full concurrency setting for chunk size
    const chunkSize = actualConcurrency
    const chunks: string[][] = []
    for (let i = 0; i < allPackageNames.length; i += chunkSize) {
      chunks.push(allPackageNames.slice(i, i + chunkSize))
    }

    console.log(`Split into ${chunks.length} chunks for processing`)

    // Process chunk by chunk
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
      try {
        // Check if we've exceeded the maximum operation time
        if (Date.now() - operationStartTime > maxOperationTime) {
          console.log(`Maximum operation time (${maxOperationTime / 60000} minutes) exceeded, stopping processing`)
          break
        }

        const chunk = chunks[chunkIndex]
        console.log(`Processing chunk ${chunkIndex + 1}/${chunks.length} (${chunk.length} packages)`)

        // Process this chunk of packages concurrently with error isolation
        const chunkPromises = chunk.map(packageName =>
          processPackage(packageName).catch((error) => {
            const errorString = String(error)
            console.error(`Critical error processing ${packageName}:`, errorString.substring(0, 200))

            // Check for browser errors and trigger cleanup
            if (errorString.includes('No target found for targetId')
              || errorString.includes('Assertion error')
              || errorString.includes('Target page, context or browser has been closed')
              || errorString.includes('Protocol error')) {
              console.error('Browser error detected, triggering cleanup...')
              // Trigger cleanup asynchronously without blocking
              cleanupBrowserResources().catch(() => {})
            }

            failedPackages.push(packageName)
            return null
          }),
        )

        const chunkResults = await Promise.allSettled(chunkPromises)

        // Extract successful results from settled promises
        const successfulResults = chunkResults
          .filter(result => result.status === 'fulfilled' && result.value !== null)
          .map(result => (result as PromiseFulfilledResult<string>).value)

        // Add successfully processed packages to results
        savedPackages.push(...successfulResults)

        // Add a delay between chunks to prevent system overload
        if (chunkIndex < chunks.length - 1) { // Don't delay after the last chunk
          // With 1:1 browser ratio, we can use more predictable delays
          let baseDelay = 2000 // Base 2 second delay
          if (actualConcurrency > 10) {
            baseDelay = 4000 // 4 seconds for high concurrency
          }
          else if (actualConcurrency > 6) {
            baseDelay = 3000 // 3 seconds for medium concurrency
          }

          console.log(`Waiting ${Math.round(baseDelay / 1000)}s between chunks (concurrency: ${actualConcurrency}, browsers: ${MAX_BROWSER_POOL_SIZE})`)
          await new Promise(resolve => setTimeout(resolve, baseDelay))
        }
      }
      catch (chunkError) {
        console.error(`Error processing chunk ${chunkIndex + 1}:`, chunkError)
        // Continue with next chunk even if this one fails completely
        continue
      }

      // Report progress
      const now = Date.now()
      const elapsedSeconds = Math.round((now - startTime) / 1000)
      const processedCount = savedPackages.length + failedPackages.length
      const remainingCount = allPackageNames.length - processedCount
      const completedPercent = Math.round((processedCount / allPackageNames.length) * 100)
      const progressBar = generateProgressBar(processedCount, allPackageNames.length)

      console.log(`${progressBar} Completed chunk ${chunkIndex + 1}/${chunks.length}, processed ${processedCount}/${allPackageNames.length} (${completedPercent}%), ${failedPackages.length} failed, ${remainingCount} remaining, elapsed time: ${elapsedSeconds}s`)

      // Periodic cleanup of browser resources to prevent memory issues
      // With 1:1 browser to concurrency ratio, we can be less aggressive with cleanup
      const cleanupFrequency = Math.max(2, Math.floor(10 / Math.max(actualConcurrency / 5, 1))) // Less frequent cleanup
      if (browserPool.length >= MAX_BROWSER_POOL_SIZE
        || (chunkIndex + 1) % cleanupFrequency === 0 // Every N chunks based on concurrency
        || (now - lastCleanupTime > 30 * 1000)) { // 30 seconds
        console.log('Performing periodic browser resource cleanup...')
        await cleanupBrowserResources()
        lastCleanupTime = now

        // Longer delay to let system recover after cleanup, scaled by concurrency
        const recoveryDelayMs = Math.max(3000, Math.min(actualConcurrency * 300, 8000)) // 3-8s recovery time
        await new Promise(resolve => setTimeout(resolve, recoveryDelayMs))
      }
    }

    console.log(`Successfully fetched ${savedPackages.length} packages, ${failedPackages.length} failed`)

    if (failedPackages.length > 0) {
      console.log(`Failed packages: ${failedPackages.slice(0, 10).join(', ')}${failedPackages.length > 10 ? '...' : ''}`)
    }

    // Generate index
    if (savedPackages.length > 0) {
      console.log('Regenerating package index...')
      // The generateIndex function would be called here if available
    }

    return savedPackages
  }
  catch (error) {
    console.error('Error during package fetching:', error)
    throw error
  }
  finally {
    // Clean up browser resources
    await cleanupBrowserResources()
    // Clean up the interval when finished
    if (cleanupInterval) {
      clearInterval(cleanupInterval)
      cleanupInterval = null
    }
  }
}

/**
 * Generates a TypeScript file name from a domain name
 * Converts domain names to camelCase format suitable for TypeScript files
 */
function getDomainAsTypescriptName(domain: string): string {
  // First handle the case where there are slashes (nested paths)
  if (domain.includes('/')) {
    // Split into parent domain and subpath
    const [parentDomain, ...subPathParts] = domain.split('/')
    const subPath = subPathParts.join('/')

    // Clean parent domain part (remove dots)
    const cleanParent = parentDomain.replace(/\./g, '')

    // For GitHub projects, include the full subpath in the variable name
    if (parentDomain.includes('github.com')) {
      // For GitHub repos, we need to keep all parts of the path
      // and transform them into a valid variable name
      // Replace all special characters and join everything into a single string
      const fullPath = subPath.replace(/[/.-]/g, '')
      return `${cleanParent}${fullPath}`.toLowerCase()
    }

    // For variable names, we need to remove special characters in the subpath
    const cleanSubPath = subPath.replace(/[.-]/g, '')

    // Join without a separator to make a valid variable name
    return `${cleanParent}${cleanSubPath}`.toLowerCase()
  }

  // For regular domains (no slashes), just remove dots
  return domain.replace(/\./g, '').toLowerCase()
}

/**
 * Generates TypeScript content for a package
 * @param packageInfo The package information object
 * @param domainName The domain name (used for the variable name)
 * @returns TypeScript file content as string
 */
function generateTypeScriptContent(packageInfo: PkgxPackage, domainName: string): string {
  // Convert domain to camelCase for variable name
  const varName = `${getDomainAsTypescriptName(domainName)}Package`

  // Ensure the variable name doesn't contain hyphens (which are invalid in JavaScript)
  const safeVarName = varName.replace(/-/g, '')

  // Format the package object with 'as const' assertions
  const formattedObj = formatObjectWithAsConst(packageInfo)

  // Create the TypeScript content with proper imports and exports
  return `export const ${safeVarName} = ${formattedObj}

export type ${safeVarName.charAt(0).toUpperCase() + safeVarName.slice(1)} = typeof ${safeVarName}
`
}

/**
 * Format an object with 'as const' assertions for TypeScript
 * @param obj The object to format
 * @returns A string representation of the object with 'as const' assertions
 */
function formatObjectWithAsConst(obj: Record<string, any>): string {
  const lines: string[] = []

  lines.push('{')

  // Add each property with appropriate formatting
  for (const [key, value] of Object.entries(obj)) {
    // Skip fetchedAt property to keep it out of TypeScript files
    if (key === 'fetchedAt')
      continue

    if (value === undefined) {
      lines.push(`  ${key}: undefined,`)
      continue
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        // Empty array
        lines.push(`  ${key}: [] as const,`)
      }
      else if (typeof value[0] === 'string') {
        // Format string array with line breaks for readability
        lines.push(`  ${key}: [`)
        for (const item of value) {
          lines.push(`    '${String(item).replace(/'/g, '\\\'')}',`)
        }
        lines.push(`  ] as const,`)
      }
      else {
        // Other array types - convert JSON.stringify output to use single quotes
        const jsonStr = JSON.stringify(value).replace(/"/g, '\'')
        lines.push(`  ${key}: ${jsonStr} as const,`)
      }
    }
    else if (typeof value === 'string') {
      // String with 'as const' using single quotes
      lines.push(`  ${key}: '${String(value).replace(/'/g, '\\\'')}' as const,`)
    }
    else if (typeof value === 'number' || typeof value === 'boolean') {
      // Numbers and booleans with 'as const'
      lines.push(`  ${key}: ${value} as const,`)
    }
    else if (value === null) {
      // Null values
      lines.push(`  ${key}: null,`)
    }
    else if (typeof value === 'object') {
      // Nested objects
      lines.push(`  ${key}: ${formatObjectWithAsConst(value)},`)
    }
    else {
      // Fallback for other types - convert JSON.stringify output to use single quotes
      const jsonStr = JSON.stringify(value).replace(/"/g, '\'')
      lines.push(`  ${key}: ${jsonStr},`)
    }
  }

  lines.push('}')

  return lines.join('\n')
}

/**
 * Saves package data as a TypeScript file
 * @param outputDir Directory to save the file
 * @param domainName Domain name of the package
 * @param packageInfo Package information object
 * @returns Path to the saved file
 */
export function savePackageAsTypeScript(outputDir: string, domainName: string, packageInfo: PkgxPackage): string {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Create a safe version of the domain name for the file name
  // For paths like 'apple.com/remote_cmds', replace the slash with hyphen
  // but preserve dots for better readability
  const safeFilename = domainName.replace(/\//g, '-')

  // Create the TypeScript file path using the same name as JSON files
  const filePath = path.join(outputDir, `${safeFilename}.ts`)

  // Remove fetchedAt from the package info before generating TypeScript
  const cleanPackageInfo = { ...packageInfo }
  delete cleanPackageInfo.fetchedAt

  // Generate TypeScript content
  const tsContent = generateTypeScriptContent(cleanPackageInfo, domainName)

  // Write the file
  fs.writeFileSync(filePath, tsContent)

  return filePath
}

/**
 * Creates a minimal package info object when browser launch fails
 */
function createMinimalPackageInfo(
  packageName: string,
  originalName: string,
  fullDomainName: string,
): { packageInfo: PkgxPackage, originalName: string, fullDomainName: string } {
  // If it's a nested path like 'agwa.name/git-crypt', extract parts
  const parts = packageName.split('/')
  const domain = parts[0]
  const subPath = parts.length > 1 ? parts.slice(1).join('/') : null

  // Create a minimal package info object
  const packageInfo: PkgxPackage = {
    name: subPath || packageName,
    domain,
    description: `Package information for ${packageName}`,
    packageYmlUrl: '',
    homepageUrl: '',
    githubUrl: '',
    installCommand: `sh <(curl https://pkgx.sh) ${packageName}`,
    programs: [],
    companions: [],
    dependencies: [],
    versions: [],
  }

  return { packageInfo, originalName, fullDomainName }
}

/**
 * Fetch and save a single package with improved handling for problematic packages
 * @param packageName The name of the package to fetch
 * @param outputDir Directory to save package data
 * @param timeout Timeout in milliseconds
 * @param saveAsJson Whether to save as JSON (true) or TypeScript (false)
 * @param retryNumber Current retry attempt number
 * @param maxRetries Maximum number of retry attempts
 * @param debug Whether to enable debug mode
 * @param options Additional options
 * @returns Promise with result information
 */
export async function fetchAndSavePackage(
  packageName: string,
  outputDir: string,
  timeout: number,
  saveAsJson = false,
  retryNumber = 1,
  maxRetries = 3,
  debug = false,
  options: PackageFetchOptions = {},
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[], filePath?: string }> {
  try {
    // Special handling for known problematic packages
    if (packageName === 'agwa.name') {
      console.log(`Using specialized handling for agwa.name...`)
      // Handle agwa.name/git-crypt directly rather than the base domain
      return await fetchAndSavePackage('agwa.name/git-crypt', outputDir, timeout, saveAsJson, 1, maxRetries, debug, options)
    }

    // Check cache first if caching is enabled
    const useCache = options.cache !== false
    const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR

    // If caching is disabled, log it and skip cache check completely
    if (!useCache) {
      console.log(`Cache disabled for ${packageName}, will fetch directly`)
    }
    else {
      // Handle aliases - need to check the canonical name
      // const resolvedName = PACKAGE_ALIASES[packageName] || packageName

      const cachedPackage = getValidCachedPackage(packageName, {
        cacheDir,
        cacheExpirationMinutes: options.cacheExpirationMinutes,
        cache: options.cache,
      })

      if (cachedPackage) {
        // We found valid cached data
        const { packageInfo } = cachedPackage

        // Create a safe version of the fullDomainName for filenames
        const safeFilename = packageName.replace(/\//g, '-')
        const fullDomainName = packageInfo.domain || packageName

        // Get aliases from the cached package
        const knownAliases = packageInfo.aliases || []

        // Save the package data to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, safeFilename, packageInfo)

        console.log(`Using cached data for ${packageName} (saved to ${filePath})`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
    }

    // Use flat timeout for all packages - no special handling
    const actualTimeout = timeout

    console.log(`Using timeout for ${packageName} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Set an overall operation timeout to prevent hanging the entire process
    // This is different from the browser navigation timeout
    const operationTimeout = actualTimeout // Use the same timeout
    const operationTimeoutPromise = new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => {
        console.error(`Operation timeout for ${packageName} after ${operationTimeout}ms`)
        resolve({ success: false })
      }, operationTimeout)
    })

    // Handle nested package paths
    if (packageName.includes('/')) {
      const pathParts = packageName.split('/')
      const domain = pathParts[0]
      const subPath = pathParts.slice(1).join('/')

      console.log(`Processing nested package: domain=${domain}, subPath=${subPath}`)

      try {
        // Use a try/catch here to handle 404 errors
        // Race the fetch operation against the timeout
        const fetchPromise = fetchPkgxPackage(`${domain}/${subPath}`, {
          timeout: actualTimeout,
          browser: options.browser,
        })

        const fetchResult = await Promise.race([fetchPromise, operationTimeoutPromise])

        // If timeout occurred, throw a specialized error
        if ('success' in fetchResult && !fetchResult.success) {
          throw new Error(`Operation timed out after ${operationTimeout}ms`)
        }

        // Unwrap the proper result
        const { packageInfo, originalName, fullDomainName } = fetchResult as any

        // Sort versions using semver if they exist
        if (packageInfo.versions && packageInfo.versions.length > 0) {
          try {
            // Sort versions in descending order (newest first)
            packageInfo.versions.sort((a: string, b: string) => {
              try {
                // Use Bun.semver.order with negative multiplier for descending sort (newest first)
                return -1 * Bun.semver.order(a, b)
              }
              catch {
                // Fallback to string comparison if semver fails
                return b.localeCompare(a)
              }
            })
          }
          catch (error) {
            console.warn(`Warning: Failed to sort versions for ${packageName} using semver:`, error)
          }
        }

        // Create a safe version of the fullDomainName for filenames
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
          fullPath: packageName, // Store the full path in the package info
          aliases: knownAliases.length > 0 ? knownAliases : [],
        }

        // Save to cache first
        if (useCache) {
          // Save to cache directory
          const cachePath = path.join(cacheDir, `${safeFilename}.json`)
          const cacheData = {
            ...enhancedPackageInfo,
            fetchedAt: Date.now(),
          }

          // Ensure cache directory exists
          if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true })
          }

          // Write to cache
          fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2))
          console.log(`Saved package data to cache: ${cachePath}`)
        }

        // Always save the TypeScript file to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

        console.log(`Successfully saved nested package ${packageName} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
      catch (error: any) {
        if (error.toString().includes('404') || error.toString().includes('Not Found')) {
          console.error(`Package ${packageName} returned 404 Not Found. Trying alternative approaches...`)

          // For agwa.name specifically, try a different URL structure
          if (packageName.startsWith('agwa.name')) {
            // Try fetching with a direct URL approach for agwa.name
            let altBrowser = null
            try {
              altBrowser = await chromium.launch({
                headless: true,
                timeout: actualTimeout, // Use the same timeout
              })
              const context = await altBrowser.newContext()
              const page = await context.newPage()

              try {
                // Use the exact URL we know works
                const directUrl = `https://pkgx.dev/pkgs/${packageName}/`
                console.error(`Trying direct URL: ${directUrl}`)

                await page.goto(directUrl, {
                  timeout: actualTimeout, // Use the same timeout
                  waitUntil: 'networkidle',
                })

                // Wait for client-side rendering
                await page.waitForTimeout(2000)

                // Create a minimal package info object based on what we know
                const packageInfo: PkgxPackage = {
                  name: packageName.includes('/') ? packageName.split('/').pop() || packageName : packageName,
                  domain,
                  description: await page.evaluate(() => {
                    const descEl = document.querySelector('h5.MuiTypography-h5')
                    return descEl ? descEl.textContent?.trim() || '' : ''
                  }) || `${packageName} package`,
                  packageYmlUrl: `https://github.com/pkgxdev/pantry/tree/main/projects/${packageName}/package.yml`,
                  homepageUrl: '',
                  githubUrl: '',
                  installCommand: `pkgx ${packageName}`,
                  programs: [],
                  companions: [],
                  dependencies: [],
                  versions: [],
                }

                // Add the aliases
                const safeFilename = packageName.replace(/\//g, '-')
                const knownAliases = [subPath]

                const enhancedPackageInfo = {
                  ...packageInfo,
                  fullPath: packageName,
                  aliases: knownAliases.length > 0 ? knownAliases : [],
                }

                // Save the package data
                let filePath: string
                if (saveAsJson) {
                  filePath = path.join(outputDir, `${safeFilename}.json`)
                  fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
                }
                else {
                  filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)
                }

                console.log(`Successfully saved agwa.name package to ${filePath} using alternative method`)
                return {
                  success: true,
                  fullDomainName: packageName,
                  aliases: knownAliases,
                  filePath,
                }
              }
              finally {
                if (altBrowser) {
                  try {
                    await altBrowser.close()
                  }
                  catch (err) {
                    console.error(`Error closing alternative browser for ${packageName}:`, err)
                  }
                }
              }
            }
            catch (directError) {
              // Make sure to close the browser if an error occurs
              if (altBrowser) {
                try {
                  await altBrowser.close()
                }
                catch (err) {
                  console.error(`Error closing alternative browser for ${packageName}:`, err)
                }
              }
              console.error(`Alternative method for agwa.name also failed:`, directError)
              // Fall through to the retry logic
            }
          }

          // Don't retry on 404 errors, skip to avoid overwriting existing files
          console.error(`Package ${packageName} returned 404 Not Found. Skipping to avoid overwriting existing files.`)
          return { success: false, fullDomainName: packageName }
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
    else {
      // Handle standard (non-nested) packages
      try {
        // Race the fetch operation against the timeout
        const fetchPromise = fetchPkgxPackage(packageName, {
          timeout: actualTimeout,
          browser: options.browser,
        })

        const fetchResult = await Promise.race([fetchPromise, operationTimeoutPromise])

        // If timeout occurred, throw a specialized error
        if ('success' in fetchResult && !fetchResult.success) {
          throw new Error(`Operation timed out after ${operationTimeout}ms`)
        }

        // Unwrap the proper result
        const { packageInfo, originalName, fullDomainName } = fetchResult as any

        // Validate that we have meaningful package data before proceeding
        const hasValidData = packageInfo.description && packageInfo.description.trim() !== ''
          && packageInfo.description !== `Package information for ${packageName}`
          && (packageInfo.versions.length > 0 || packageInfo.programs.length > 0 || packageInfo.packageYmlUrl)

        if (!hasValidData) {
          console.error(`Package ${packageName} appears to have no meaningful data. Skipping to avoid creating empty files.`)
          return { success: false, fullDomainName: packageName }
        }

        // Additional validation: Check if we're about to overwrite a file with better data
        const checkSafeFilename = fullDomainName.replace(/\//g, '-')
        const existingFilePath = path.join(outputDir, `${checkSafeFilename}.ts`)

        if (fs.existsSync(existingFilePath)) {
          const existingContent = fs.readFileSync(existingFilePath, 'utf-8')

          // Check if existing file has dependencies but new fetch doesn't
          const existingHasDependencies = existingContent.includes('dependencies: [')
            && !existingContent.includes('dependencies: [] as const')
          const newHasNoDependencies = packageInfo.dependencies.length === 0

          // Check if existing file has a real description but new fetch has generic one
          const existingHasRealDescription = !existingContent.includes('description: \'Package information for')
            && !existingContent.includes('description: \'\' as const')
          const newHasGenericDescription = packageInfo.description.includes('Package information for')
            || packageInfo.description.trim() === ''

          // If existing file is better, skip to avoid data degradation
          if ((existingHasDependencies && newHasNoDependencies)
            || (existingHasRealDescription && newHasGenericDescription)) {
            console.warn(`⚠️  Existing file ${existingFilePath} has better data than new fetch. Skipping to prevent data loss.`)
            console.warn(`   Existing deps: ${existingHasDependencies}, New deps: ${!newHasNoDependencies}`)
            console.warn(`   Existing desc: ${existingHasRealDescription}, New desc: ${!newHasGenericDescription}`)
            return { success: false, fullDomainName: packageName }
          }
        }

        // Sort versions using semver if they exist
        if (packageInfo.versions && packageInfo.versions.length > 0) {
          try {
            // Sort versions in descending order (newest first)
            packageInfo.versions.sort((a: string, b: string) => {
              try {
                // Use Bun.semver.order with negative multiplier for descending sort (newest first)
                return -1 * Bun.semver.order(a, b)
              }
              catch {
                // Fallback to string comparison if semver fails
                return b.localeCompare(a)
              }
            })
          }
          catch (error) {
            console.warn(`Warning: Failed to sort versions for ${packageName} using semver:`, error)
          }
        }

        // Create a safe version of the fullDomainName for filenames
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
          fullPath: packageName, // Store the full path in the package info
          aliases: knownAliases.length > 0 ? knownAliases : [],
        }

        // Save to cache first
        if (useCache) {
          // Save to cache directory
          const cachePath = path.join(cacheDir, `${safeFilename}.json`)
          const cacheData = {
            ...enhancedPackageInfo,
            fetchedAt: Date.now(),
          }

          // Ensure cache directory exists
          if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir, { recursive: true })
          }

          // Write to cache
          fs.writeFileSync(cachePath, JSON.stringify(cacheData, null, 2))
          console.log(`Saved package data to cache: ${cachePath}`)
        }

        // Always save the TypeScript file to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

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
          console.error(`Package ${packageName} returned 404 Not Found. Skipping to avoid overwriting existing files.`)
          return { success: false, fullDomainName: packageName }
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
  }
  catch (error: any) {
    const errorString = String(error)

    // Check for Playwright connection errors that indicate browser issues
    const isBrowserError = errorString.includes('No target found')
      || errorString.includes('targetId')
      || errorString.includes('Target page, context or browser has been closed')
      || errorString.includes('Protocol error')
      || errorString.includes('Connection closed')
      || errorString.includes('Assertion error')
      || errorString.includes('Browser has been closed')
      || errorString.includes('Target closed')
      || errorString.includes('Session closed')
      || errorString.includes('WebSocket connection closed')

    if (isBrowserError) {
      console.error(`Browser connection error for ${packageName}:`, errorString.substring(0, 200))

      // Force cleanup and wait longer for browser errors
      if (options.browser) {
        try {
          // Try to close the problematic browser
          await options.browser.close().catch(() => {})
        }
        catch {
          // Ignore errors when closing
        }
      }

      // Wait longer before retrying browser errors
      await new Promise(resolve => setTimeout(resolve, 3000 * retryNumber))
    }

    // If we've exceeded retry attempts, create a minimal placeholder package
    if (retryNumber >= maxRetries) {
      console.error(`Failed to fetch package ${packageName} after ${retryNumber} attempts:`, error)

      // Save debugging information if debug mode is enabled
      if (debug) {
        const debugPath = path.join(process.cwd(), `${packageName.replace(/\//g, '-')}-error.txt`)
        fs.writeFileSync(debugPath, `Error fetching ${packageName}:\n${error.toString()}\n\nStack:\n${error.stack || 'No stack trace available'}`)
        console.error(`Saved error details to ${debugPath}`)
      }

      // Don't create placeholder packages to avoid overwriting existing good files
      console.error(`Skipping ${packageName} after ${retryNumber} failed attempts to avoid overwriting existing files.`)
      return { success: false, fullDomainName: packageName }
    }

    console.error(`Attempt ${retryNumber} failed for ${packageName}, retrying...`, error)

    // Longer pause for browser errors, shorter for other errors
    const waitTime = isBrowserError ? 2000 * retryNumber : 500 * retryNumber
    await new Promise(resolve => setTimeout(resolve, waitTime))

    // Retry with same base timeout (actual timeout will still increase due to retry counter)
    return fetchAndSavePackage(packageName, outputDir, timeout, saveAsJson, retryNumber + 1, maxRetries, debug, options)
  }
}
