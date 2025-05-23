import type { Browser } from 'playwright'
import type { FetchProjectsOptions, GitHubContent, PackageFetchOptions, PkgxPackage, ProjectFolder } from './types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { formatObjectWithoutQuotedKeys, saveRateLimitInfo, shouldProceedWithGitHubRequest } from './utils'

/**
 * Map of common package aliases to their full domain names
 */
export const PACKAGE_ALIASES: Record<string, string> = {
  node: 'nodejs.org',
  python: 'python.org',
  go: 'go.dev',
  rust: 'rust-lang.org',
  ruby: 'ruby-lang.org',
  php: 'php.net',
  perl: 'perl.org',
  deno: 'deno.land',
  bun: 'bun.sh',
}

/**
 * Default cache directory for package data
 */
export const DEFAULT_CACHE_DIR = '.cache/packages'

/**
 * Default cache expiration time in minutes (24 hours)
 */
export const DEFAULT_CACHE_EXPIRATION_MINUTES = 1440

/**
 * Known packages list as a fallback if all other methods fail
 */
const ALL_KNOWN_PACKAGES = [
  'abseil.io',
  'acorn.io',
  'agpt.co',
  'agwa.name-git-crypt',
  'akuity.io',
  'alacritty.org',
  'alembic.sqlalchemy.org',
  'alsa-project.org',
  'amber-lang.com',
  'amp.rs',
  'amrdeveloper.github.io',
  'anchore.com',
  'android.com',
  'angular.dev',
  'ansible.com',
  'aomedia.googlesource.com',
  'apache.org',
  // ... rest of the package list
]

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
const browserPool: { browser: Browser, inUse: boolean }[] = []

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
    const closePromises = browserPool.map(async (entry) => {
      try {
        await Promise.race([
          entry.browser.close().catch(e => console.error('Error closing pool browser:', e)),
          new Promise(resolve => setTimeout(resolve, 3000)),
        ])
      }
      catch (error) {
        console.error('Error closing browser from pool:', error)
      }
    })

    await Promise.all(closePromises)
    browserPool.length = 0 // Clear the pool
    console.log('Browser pool cleaned up')
  }
}

/**
 * Get a browser from the pool or create a new one if needed
 */
async function acquireBrowser(timeout: number): Promise<Browser> {
  // First, try to reuse an available browser from the pool
  const availableEntry = browserPool.find(entry => !entry.inUse)
  if (availableEntry) {
    availableEntry.inUse = true
    return availableEntry.browser
  }

  // If not found, create a new browser instance
  const browser = await chromium.launch({
    headless: true,
    timeout: timeout / 2,
  })

  // Add to pool
  browserPool.push({ browser, inUse: true })
  console.log(`Created new browser instance (pool size: ${browserPool.length})`)

  return browser
}

/**
 * Release a browser back to the pool
 */
function releaseBrowser(browser: Browser): void {
  const entry = browserPool.find(entry => entry.browser === browser)
  if (entry) {
    entry.inUse = false
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
    // eslint-disable-next-line no-console
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
    const browserTimeout = options.timeout || 30000
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
          browser = await chromium.launch({ headless: true })
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
      await page.waitForTimeout(3000)

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
            catch (e) {
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

/**
 * Fetches and saves all packages with proper concurrency support
 */
export async function fetchAndSaveAllPackages(options: PackageFetchOptions = {}): Promise<string[]> {
  const timeout = options.timeout || 30000
  const outputDir = options.outputDir || 'packages'
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR
  const useCache = options.cache !== false
  const cacheExpirationMinutes = options.cacheExpirationMinutes || DEFAULT_CACHE_EXPIRATION_MINUTES
  const concurrency = options.concurrency || 10

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

        // Fetch and save the package
        const result = await fetchAndSavePackage(
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

        return null
      }
      catch (error) {
        console.error(`Failed to process package ${packageName}:`, error)
        return null
      }
      finally {
        // Always release the browser back to the pool if it was acquired
        if (browser) {
          releaseBrowser(browser)
        }
      }
    }

    // Process all packages in parallel with controlled concurrency
    console.log(`Processing ${allPackageNames.length} packages with concurrency of ${concurrency}...`)

    // Create chunks for better progress reporting
    const chunks: string[][] = []
    for (let i = 0; i < allPackageNames.length; i += concurrency) {
      chunks.push(allPackageNames.slice(i, i + concurrency))
    }

    console.log(`Split into ${chunks.length} chunks for processing`)

    // Process chunk by chunk
    for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
      const chunk = chunks[chunkIndex]
      console.log(`Processing chunk ${chunkIndex + 1}/${chunks.length} (${chunk.length} packages)`)

      // Process this chunk of packages concurrently
      const chunkPromises = chunk.map(packageName => processPackage(packageName))
      const chunkResults = await Promise.all(chunkPromises)

      // Add successfully processed packages to results
      const successfulResults = chunkResults.filter(Boolean) as string[]
      savedPackages.push(...successfulResults)

      console.log(`Completed chunk ${chunkIndex + 1}/${chunks.length}, processed ${savedPackages.length}/${allPackageNames.length} so far`)
    }

    console.log(`Successfully fetched ${savedPackages.length} packages`)

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
          lines.push(`    ${JSON.stringify(item)},`)
        }
        lines.push(`  ] as const,`)
      }
      else {
        // Other array types
        lines.push(`  ${key}: ${JSON.stringify(value)} as const,`)
      }
    }
    else if (typeof value === 'string') {
      // String with 'as const'
      lines.push(`  ${key}: ${JSON.stringify(value)} as const,`)
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
      // Fallback for other types
      lines.push(`  ${key}: ${JSON.stringify(value)},`)
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
      console.error(`Using specialized handling for agwa.name...`)
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
      const resolvedName = PACKAGE_ALIASES[packageName] || packageName

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
        let filePath: string

        // Always generate TypeScript file for output
        filePath = savePackageAsTypeScript(outputDir, safeFilename, packageInfo)

        console.log(`Using cached data for ${packageName} (saved to ${filePath})`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
    }

    // Adjust timeout based on the package difficulty or retry attempt
    const isComplexPackage = ['go', 'rust', 'postgresql.org', 'ruby', 'bun'].some(pkg =>
      packageName.includes(pkg),
    )
    const baseTimeout = isComplexPackage ? timeout * 1.5 : timeout
    const actualTimeout = Math.round(baseTimeout * (1 + (retryNumber - 1) * 0.2))

    console.log(`Using timeout for ${packageName} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Handle nested package paths
    if (packageName.includes('/')) {
      const pathParts = packageName.split('/')
      const domain = pathParts[0]
      const subPath = pathParts.slice(1).join('/')

      console.log(`Processing nested package: domain=${domain}, subPath=${subPath}`)

      try {
        // Use a try/catch here to handle 404 errors
        const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(`${domain}/${subPath}`, {
          timeout: actualTimeout,
          browser: options.browser,
        })

        // Sort versions using semver if they exist
        if (packageInfo.versions && packageInfo.versions.length > 0) {
          try {
            // Sort versions in descending order (newest first)
            packageInfo.versions.sort((a: string, b: string) => {
              try {
                // Use Bun.semver.order with negative multiplier for descending sort (newest first)
                return -1 * Bun.semver.order(a, b)
              }
              catch (e) {
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
          aliases: knownAliases.length > 0 ? knownAliases : undefined,
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
        let filePath: string
        filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

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
                timeout: actualTimeout / 2, // Shorter timeout for browser launch
              })
              const context = await altBrowser.newContext()
              const page = await context.newPage()

              try {
                // Use the exact URL we know works
                const directUrl = `https://pkgx.dev/pkgs/${packageName}/`
                console.error(`Trying direct URL: ${directUrl}`)

                await page.goto(directUrl, {
                  timeout: actualTimeout * 1.5, // Use a longer timeout
                  waitUntil: 'networkidle',
                })

                // Wait longer for client-side rendering
                await page.waitForTimeout(5000)

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
                  aliases: knownAliases.length > 0 ? knownAliases : undefined,
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

          // Don't retry on 404 errors, but use a fallback approach
          return await createPlaceholderPackage(packageName, outputDir, saveAsJson, options)
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
    else {
      // Handle standard (non-nested) packages
      try {
        const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(packageName, {
          timeout: actualTimeout,
          browser: options.browser,
        })

        // Sort versions using semver if they exist
        if (packageInfo.versions && packageInfo.versions.length > 0) {
          try {
            // Sort versions in descending order (newest first)
            packageInfo.versions.sort((a: string, b: string) => {
              try {
                // Use Bun.semver.order with negative multiplier for descending sort (newest first)
                return -1 * Bun.semver.order(a, b)
              }
              catch (e) {
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
          aliases: knownAliases.length > 0 ? knownAliases : undefined,
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
        let filePath: string
        filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

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
          return await createPlaceholderPackage(packageName, outputDir, saveAsJson, options)
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
  }
  catch (error: any) {
    // If we've exceeded retry attempts, create a minimal placeholder package
    if (retryNumber >= maxRetries) {
      console.error(`Failed to fetch package ${packageName} after ${retryNumber} attempts:`, error)

      // Save debugging information if debug mode is enabled
      if (debug) {
        const debugPath = path.join(process.cwd(), `${packageName.replace(/\//g, '-')}-error.txt`)
        fs.writeFileSync(debugPath, `Error fetching ${packageName}:\n${error.toString()}\n\nStack:\n${error.stack || 'No stack trace available'}`)
        console.error(`Saved error details to ${debugPath}`)
      }

      // Create a placeholder package as a last resort
      return await createPlaceholderPackage(packageName, outputDir, saveAsJson, options)
    }

    console.error(`Attempt ${retryNumber} failed for ${packageName}, retrying...`, error)

    // Short pause before retrying
    await new Promise(resolve => setTimeout(resolve, 1000 * retryNumber)) // Increase wait time for each retry

    // Retry with same base timeout (actual timeout will still increase due to retry counter)
    return fetchAndSavePackage(packageName, outputDir, timeout, saveAsJson, retryNumber + 1, maxRetries, debug, options)
  }
}

/**
 * Creates a minimal placeholder package when fetching fails
 * @param packageName Package name or path
 * @param outputDir Output directory
 * @param saveAsJson Whether to save as JSON or TypeScript
 * @param options Additional options
 * @returns Promise with result information
 */
async function createPlaceholderPackage(
  packageName: string,
  outputDir: string,
  saveAsJson: boolean,
  options: PackageFetchOptions = {},
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

  // Add aliases if this is a nested path
  const aliases = subPath ? [subPath] : []
  const enhancedPackageInfo = {
    ...packageInfo,
    fullPath: packageName,
    aliases: aliases.length > 0 ? aliases : undefined,
  }

  // Save in the appropriate format
  const safeFilename = packageName.replace(/\//g, '-')
  let filePath: string

  // Save to cache if caching is enabled
  const useCache = options.cache !== false
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR

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
    console.log(`Saved placeholder package data to cache: ${cachePath}`)
  }

  // Always generate TypeScript for output
  filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)

  console.error(`Created placeholder package for ${packageName} at ${filePath}`)

  return {
    success: true, // We consider this a "success" since we created a placeholder
    fullDomainName: packageName,
    aliases,
    filePath,
  }
}
