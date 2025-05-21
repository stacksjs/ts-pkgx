import type { PackageFetchOptions, PkgxPackage } from '../types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { saveRateLimitInfo, shouldProceedWithGitHubRequest } from '../utils'

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

  // Special handling for known patterns
  // For paths like 'agwa.name/git-crypt', treat 'git-crypt' as the name
  // and 'agwa.name' as the domain
  if (packageName.includes('/')) {
    const [domain, name] = packageName.split('/')
    console.error(`Identified nested package: domain=${domain}, name=${name}`)
  }

  // Handle common package aliases
  if (PACKAGE_ALIASES[packageName]) {
    console.error(`'${packageName}' is an alias for '${PACKAGE_ALIASES[packageName]}', redirecting...`)
    fullDomainName = PACKAGE_ALIASES[packageName]
    packageName = PACKAGE_ALIASES[packageName]
  }

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  const timeout = options.timeout || 60000 // Increase default timeout
  const debugMode = options.debug || false

  try {
    // Use domain-style format for the URL - special handling for nested paths
    const pkgUrl = `https://pkgx.dev/pkgs/${packageName}/`

    console.error(`Navigating to ${pkgUrl}...`)

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

    console.error('Extracting package information...')

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
      console.error(`Detected reverse alias: '${possibleAlias}' for '${packageInfo.domain}'`)
      // Update our full domain name if we found a reverse alias through the website
      fullDomainName = packageInfo.domain

      // Add the newly identified alias to our aliases map
      if (possibleAlias && possibleAlias !== originalName && packageInfo.domain) {
        console.error(`Adding new alias: '${possibleAlias}' -> '${packageInfo.domain}'`)
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
            .map(m => m.replace(/<\/?li>/g, ''))
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
    await browser.close()
  }
}

/**
 * Attempts to fetch package versions from GitHub API
 */
async function fetchVersionsFromGitHub(packageName: string): Promise<string[]> {
  try {
    // Check if we're rate limited before making the request
    if (!shouldProceedWithGitHubRequest()) {
      console.error(`Skipping GitHub API request for versions due to rate limiting`)
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
      console.error(`GitHub API rate limit exceeded. Remaining: ${rateLimitRemaining || 0}, Reset: ${resetTime}`)

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
 * Fetches all packages from pkgx.dev and saves them to files
 * @param options Optional configuration
 * @returns Promise resolving to array of package names that were saved
 */
export async function fetchAndSaveAllPackages(
  options: PackageFetchOptions = {},
): Promise<string[]> {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  const timeout = options.timeout || 120000

  try {
    console.error('Navigating to pkgx.dev/pkgs...')

    // Navigate to the packages page
    await page.goto('https://pkgx.dev/pkgs', {
      timeout,
      waitUntil: 'networkidle',
    })

    // Wait a bit for client-side rendering
    await page.waitForTimeout(2000)

    console.error('Extracting package list...')

    // Extract all package names
    const packageNames = await page.evaluate(() => {
      const packageElements = Array.from(document.querySelectorAll('a[href^="/pkgs/"]'))
      return packageElements
        .map((link) => {
          const href = (link as HTMLAnchorElement).href
          const path = href.split('/pkgs/')[1]
          return path ? path.replace(/\/$/, '') : null
        })
        .filter(Boolean) as string[]
    })

    console.error(`Found ${packageNames.length} packages`)

    // Keep track of processed domains to avoid duplicates
    const processedDomains = new Set<string>()

    // Fetch and save each package
    const savedPackages: string[] = []
    for (const [index, packageName] of packageNames.entries()) {
      try {
        // Skip if we've already processed this domain
        if (processedDomains.has(packageName)) {
          console.error(`Skipping ${packageName} (already processed)`)
          continue
        }

        console.error(`[${index + 1}/${packageNames.length}] Fetching package ${packageName}...`)

        const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(packageName, {
          timeout: options.timeout || 60000,
        })

        // Save to file using the full domain name
        const outputDir = path.join(process.cwd(), options.outputDir || 'packages')

        // Ensure output directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true })
        }

        // Save with the full domain name (the canonical version)
        const filePath = path.join(outputDir, `${fullDomainName}.json`)
        fs.writeFileSync(filePath, JSON.stringify(packageInfo, null, 2))

        console.error(`Successfully saved ${packageName} to ${filePath}`)
        savedPackages.push(fullDomainName)

        // Mark this domain as processed
        processedDomains.add(fullDomainName)

        // If the original name is different from the full domain, create a symlink or reference file
        if (originalName !== fullDomainName) {
          // Option 1: Create a symlink (on Unix-like systems)
          // const aliasPath = path.join(outputDir, `${originalName}.json`)
          // try {
          //   fs.symlinkSync(filePath, aliasPath)
          //   console.error(`Created symlink from ${aliasPath} to ${filePath}`)
          // } catch (error) {
          //   console.error(`Failed to create symlink for ${originalName}: ${error}`)
          // }

          // Option 2: Create a reference file (works on all platforms)
          const aliasPath = path.join(outputDir, `${originalName}.json`)
          const referenceContent = {
            _type: 'alias',
            _targetPackage: fullDomainName,
            canonicalFile: `${fullDomainName}.json`,
            ...packageInfo,
          }
          fs.writeFileSync(aliasPath, JSON.stringify(referenceContent, null, 2))
          console.error(`Created reference file at ${aliasPath} pointing to ${fullDomainName}`)
        }
      }
      catch (error) {
        console.error(`Failed to fetch package ${packageName}:`, error)
      }
    }

    return savedPackages
  }
  finally {
    await browser.close()
  }
}

/**
 * Generates a TypeScript file name from a domain name
 * Converts domain names to camelCase format suitable for TypeScript files
 */
function getDomainAsTypescriptName(domain: string): string {
  // Replace dots, dashes and slashes with nothing
  // Convert domain.name to domainname for TypeScript files
  return domain
    .replace(/\./g, '')
    .replace(/-/g, '')
    .replace(/\//g, '-')
    .toLowerCase()
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

  // Create the TypeScript content with proper imports and exports
  return `import type { PkgxPackage } from '../types'

/**
 * ${varName} information from pkgx.dev
 * Generated from pkgx.dev data
 */
export const ${varName}: PkgxPackage = ${JSON.stringify(packageInfo, null, 2)}
`
}

/**
 * Saves package data as a TypeScript file
 * @param outputDir Directory to save the file
 * @param domainName Domain name of the package
 * @param packageInfo Package information object
 * @returns Path to the saved file
 */
function savePackageAsTypeScript(outputDir: string, domainName: string, packageInfo: PkgxPackage): string {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Convert domain name to TypeScript-friendly format
  const tsName = getDomainAsTypescriptName(domainName)

  // Create the file path
  const filePath = path.join(outputDir, `${tsName}.ts`)

  // Generate TypeScript content
  const tsContent = generateTypeScriptContent(packageInfo, domainName)

  // Write the file
  fs.writeFileSync(filePath, tsContent)

  return filePath
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
): Promise<{ success: boolean, fullDomainName?: string, aliases?: string[], filePath?: string }> {
  try {
    // Special handling for known problematic packages
    if (packageName === 'agwa.name') {
      console.error(`Using specialized handling for agwa.name...`)
      // Handle agwa.name/git-crypt directly rather than the base domain
      return await fetchAndSavePackage('agwa.name/git-crypt', outputDir, timeout * 2, saveAsJson, 1, maxRetries, debug)
    }

    // Adjust timeout based on the package difficulty or retry attempt
    const isComplexPackage = ['go', 'rust', 'postgresql.org', 'ruby', 'bun'].some(pkg =>
      packageName.includes(pkg),
    )
    const baseTimeout = isComplexPackage ? timeout * 2 : timeout
    const actualTimeout = baseTimeout * retryNumber

    console.error(`Using timeout for ${packageName} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Handle nested package paths
    if (packageName.includes('/')) {
      const pathParts = packageName.split('/')
      const domain = pathParts[0]
      const subPath = pathParts.slice(1).join('/')

      console.error(`Processing nested package: domain=${domain}, subPath=${subPath}`)

      try {
        // Use a try/catch here to handle 404 errors
        const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(`${domain}/${subPath}`, {
          timeout: actualTimeout,
        })

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

        // Save either as JSON or TypeScript based on the saveAsJson flag
        let filePath: string
        if (saveAsJson) {
          // Save to file using the safe filename as JSON
          filePath = path.join(outputDir, `${safeFilename}.json`)
          fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
        }
        else {
          // Save as TypeScript file
          filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)
        }

        console.error(`Successfully saved nested package ${packageName} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
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
            try {
              const browser = await chromium.launch({ headless: true })
              const context = await browser.newContext()
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

                console.error(`Successfully saved agwa.name package to ${filePath} using alternative method`)
                return {
                  success: true,
                  fullDomainName: packageName,
                  aliases: knownAliases,
                  filePath,
                }
              }
              finally {
                await browser.close()
              }
            }
            catch (directError) {
              console.error(`Alternative method for agwa.name also failed:`, directError)
              // Fall through to the retry logic
            }
          }

          // Don't retry on 404 errors, but use a fallback approach
          return await createPlaceholderPackage(packageName, outputDir, saveAsJson)
        }
        throw error // Re-throw for other errors to allow retries
      }
    }
    else {
      // Handle standard (non-nested) packages
      try {
        const { packageInfo, originalName, fullDomainName } = await fetchPkgxPackage(packageName, {
          timeout: actualTimeout,
        })

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

        // Save either as JSON or TypeScript based on the saveAsJson flag
        let filePath: string
        if (saveAsJson) {
          // Save to file using the safe filename as JSON
          filePath = path.join(outputDir, `${safeFilename}.json`)
          fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
        }
        else {
          // Save as TypeScript file
          filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)
        }

        console.error(`Successfully saved ${packageName} to ${filePath} with aliases: ${knownAliases.join(', ') || 'none'}`)
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
 * @param packageName Package name or path
 * @param outputDir Output directory
 * @param saveAsJson Whether to save as JSON or TypeScript
 * @returns Promise with result information
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
  const safeFilename = packageName.replace(/\//g, '-')
  let filePath: string

  if (saveAsJson) {
    filePath = path.join(outputDir, `${safeFilename}.json`)
    fs.writeFileSync(filePath, JSON.stringify(enhancedPackageInfo, null, 2))
  }
  else {
    filePath = savePackageAsTypeScript(outputDir, safeFilename, enhancedPackageInfo)
  }

  console.error(`Created placeholder package for ${packageName} at ${filePath}`)

  return {
    success: true, // We consider this a "success" since we created a placeholder
    fullDomainName: packageName,
    aliases,
    filePath,
  }
}
