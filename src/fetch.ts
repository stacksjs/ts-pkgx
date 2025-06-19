/* eslint-disable no-console */
import type { Browser } from 'playwright'
import type { FetchProjectsOptions, GitHubContent, PackageFetchOptions, PkgxPackage, ProjectFolder } from './types'
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { chromium } from 'playwright'
import { getAliasOverrides, shouldReplaceAliases } from './alias-overrides'
import { DEFAULT_CACHE_DIR, DEFAULT_CACHE_EXPIRATION_MINUTES, DEFAULT_TIMEOUT_MS } from './consts'
import { aliases } from './packages/aliases'
// Lazy import of utils functions to avoid module loading issues

/**
 * GitHub repository mapping for packages that don't have complete repository paths
 */

/**
 * Converts package name from filename format to URL format for nested packages
 * Handles special cases like GitHub repositories with multiple path segments
 */
function convertPackageNameToUrl(packageName: string): string {
  // If the package name already contains a slash, it's already in URL format
  if (packageName.includes('/')) {
    return packageName
  }

  // Handle regular nested packages: "domain-name" -> "domain/name"
  // But only for hyphenated names that look like they need conversion
  return packageName.replace(/^([^-]+)-(.+)$/, (match, domain, name) => {
    // Check if this looks like a nested package (domain contains a dot)
    if (domain.includes('.')) {
      return `${domain}/${name}`
    }
    // Otherwise, keep the original name
    return packageName
  })
}

/**
 * Helper function to get domain as TypeScript variable name
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
 * Generates JSDoc comments for specific object properties
 */
function getPropertyJSDoc(key: string, value: any): string | null {
  switch (key) {
    case 'versions':
      if (Array.isArray(value) && value.length > 0) {
        return `  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */`
      }
      break

    case 'programs':
      if (Array.isArray(value) && value.length > 0) {
        return `  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */`
      }
      break

    case 'dependencies':
      if (Array.isArray(value) && value.length > 0) {
        // Check if any dependencies are OS-specific
        const hasOsDeps = value.some(dep => typeof dep === 'string' && dep.includes(':'))
        const osNote = hasOsDeps ? '\n   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).' : ''

        return `  /**
   * Required dependencies for this package.
   * These will be automatically installed.${osNote}
   */`
      }
      break

    case 'companions':
      if (Array.isArray(value) && value.length > 0) {
        return `  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */`
      }
      break

    case 'aliases':
      if (Array.isArray(value) && value.length > 0) {
        return `  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */`
      }
      break

    case 'installCommand':
      return `  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */`

    case 'description':
      return `  /**
   * Brief description of what this package does.
   */`

    case 'domain':
      return `  /**
   * The canonical domain name for this package.
   */`

    case 'name':
      return `  /**
   * The display name of this package.
   */`

    default:
      return null
  }

  return null
}

/**
 * Format an object with 'as const' assertions for TypeScript
 */
function formatObjectWithAsConst(obj: Record<string, any>): string {
  const lines: string[] = []

  lines.push('{')

  // Add each property with appropriate formatting and JSDoc comments
  for (const [key, value] of Object.entries(obj)) {
    // Skip fetchedAt property to keep it out of TypeScript files
    if (key === 'fetchedAt')
      continue

    // Add JSDoc comments for specific properties
    const jsdocComment = getPropertyJSDoc(key, value)
    if (jsdocComment) {
      lines.push(jsdocComment)
    }

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
        // For aliases array, filter out shell command patterns and package name duplicates
        let filteredArray = value
        if (key === 'aliases') {
          const packageName = obj.name
          filteredArray = value.filter((alias) => {
            // Filter out shell command patterns
            if (alias.includes('--') || alias.includes('$SHELL') || alias.includes('+') || alias.includes('(') || alias.includes(')')) {
              return false
            }
            // Filter out aliases that are the same as the package name
            if (alias === packageName) {
              return false
            }
            return true
          })
        }

        // Format string array with line breaks for readability
        if (filteredArray.length === 0) {
          lines.push(`  ${key}: [] as const,`)
        }
        else {
          lines.push(`  ${key}: [`)
          for (const item of filteredArray) {
            lines.push(`    '${String(item).replace(/'/g, '\\\'')}',`)
          }
          lines.push(`  ] as const,`)
        }
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
 * Generates comprehensive JSDoc documentation for a package
 */
function generatePackageJSDoc(packageInfo: PkgxPackage, domainName: string, packageDisplayName: string): string {
  const lines: string[] = []

  lines.push('/**')

  // Package title and description
  if (packageInfo.description) {
    lines.push(` * **${packageDisplayName}** - ${packageInfo.description}`)
  }
  else {
    lines.push(` * **${packageDisplayName}** - pkgx package`)
  }

  lines.push(' *')

  // Domain information
  lines.push(` * @domain \`${packageInfo.domain || domainName}\``)

  // Programs provided
  if (packageInfo.programs && packageInfo.programs.length > 0) {
    const programsList = packageInfo.programs.slice(0, 5).join('`, `')
    const morePrograms = packageInfo.programs.length > 5 ? `, ... (+${packageInfo.programs.length - 5} more)` : ''
    lines.push(` * @programs \`${programsList}\`${morePrograms}`)
  }

  // Latest version information
  if (packageInfo.versions && packageInfo.versions.length > 0) {
    lines.push(` * @version \`${packageInfo.versions[0]}\` (${packageInfo.versions.length} versions available)`)
    lines.push(` * @versions From newest version to oldest.`)
  }

  // Installation command
  if (packageInfo.installCommand) {
    lines.push(` *`)
    lines.push(` * @install \`${packageInfo.installCommand}\``)
  }

  // Aliases - filter out invalid shell command patterns and separate package name from true aliases
  if (packageInfo.aliases && packageInfo.aliases.length > 0) {
    const validAliases = packageInfo.aliases.filter((alias) => {
      // Filter out shell command patterns
      return !alias.includes('--') && !alias.includes('$SHELL') && !alias.includes('+') && !alias.includes('(') && !alias.includes(')')
    })

    if (validAliases.length > 0) {
      // Separate the package name from true aliases
      const packageName = packageInfo.name
      const trueAliases = validAliases.filter(alias => alias !== packageName)
      const packageNameAlias = validAliases.find(alias => alias === packageName)

      // Add @name if the package name is in the aliases list
      if (packageNameAlias) {
        lines.push(` * @name \`${packageNameAlias}\``)
      }

      // Add @aliases only for true aliases (not the package name)
      if (trueAliases.length > 0) {
        lines.push(` * @aliases ${trueAliases.map(a => `\`${a}\``).join(', ')}`)
      }
    }
  }

  // Homepage URL
  if (packageInfo.homepageUrl) {
    lines.push(` * @homepage ${packageInfo.homepageUrl}`)
  }

  // Dependencies
  if (packageInfo.dependencies && packageInfo.dependencies.length > 0) {
    const depsList = packageInfo.dependencies.slice(0, 3).join('`, `')
    const moreDeps = packageInfo.dependencies.length > 3 ? `, ... (+${packageInfo.dependencies.length - 3} more)` : ''

    // Check if any dependencies are OS-specific
    const hasOsDeps = packageInfo.dependencies.some(dep => dep.includes(':'))
    const osNote = hasOsDeps ? ' (includes OS-specific dependencies with `os:package` format)' : ''

    lines.push(` * @dependencies \`${depsList}\`${moreDeps}${osNote}`)
  }

  // Companions
  if (packageInfo.companions && packageInfo.companions.length > 0) {
    const companionsList = packageInfo.companions.slice(0, 3).join('`, `')
    const moreCompanions = packageInfo.companions.length > 3 ? `, ... (+${packageInfo.companions.length - 3} more)` : ''
    lines.push(` * @companions \`${companionsList}\`${moreCompanions}`)
  }

  lines.push(' *')

  // Usage example
  lines.push(' * @example')
  lines.push(' * ```typescript')
  lines.push(' * import { pantry } from \'ts-pkgx\'')
  lines.push(' *')

  // Show both alias and domain access if valid aliases exist
  if (packageInfo.aliases && packageInfo.aliases.length > 0) {
    // Find the first valid alias for the example
    const validAlias = packageInfo.aliases.find((alias) => {
      return !alias.includes('--') && !alias.includes('$SHELL') && !alias.includes('+') && !alias.includes('(') && !alias.includes(')')
    })

    if (validAlias) {
      const aliasVarName = validAlias.replace(/[^a-z0-9]/gi, '')
      // Use the same function as the index generation to ensure consistency
      const domainVarName = domainName.replace(/[.-]/g, '').replace(/\//g, '').toLowerCase()

      // Check if the alias is the same as the package name
      const isAliasPackageName = validAlias === packageInfo.name

      if (isAliasPackageName) {
        lines.push(` * // Access the package`)
        lines.push(` * const pkg = pantry.${aliasVarName}`)
        lines.push(` * // Or access via domain`)
        lines.push(` * const samePkg = pantry.${domainVarName}`)
        lines.push(` * console.log(pkg === samePkg) // true`)
      }
      else {
        lines.push(` * // Access via alias (recommended)`)
        lines.push(` * const pkg = pantry.${aliasVarName}`)
        lines.push(` * // Or access via domain`)
        lines.push(` * const samePkg = pantry.${domainVarName}`)
        lines.push(` * console.log(pkg === samePkg) // true`)
      }
    }
    else {
      // No valid aliases, use domain only
      const domainVarName = domainName.replace(/[.-]/g, '').replace(/\//g, '').toLowerCase()
      lines.push(` * const pkg = pantry.${domainVarName}`)
    }
  }
  else {
    // Use the same function as the index generation to ensure consistency
    const domainVarName = domainName.replace(/[.-]/g, '').replace(/\//g, '').toLowerCase()
    lines.push(` * const pkg = pantry.${domainVarName}`)
  }

  lines.push(` * console.log(pkg.name)        // "${packageInfo.name || packageDisplayName}"`)

  if (packageInfo.description) {
    const shortDesc = packageInfo.description.length > 50 ? `${packageInfo.description.substring(0, 47)}...` : packageInfo.description
    lines.push(` * console.log(pkg.description) // "${shortDesc}"`)
  }

  if (packageInfo.programs && packageInfo.programs.length > 0) {
    lines.push(` * console.log(pkg.programs)    // [${packageInfo.programs.slice(0, 2).map(p => `"${p}"`).join(', ')}${packageInfo.programs.length > 2 ? ', ...' : ''}]`)
  }

  if (packageInfo.versions && packageInfo.versions.length > 0) {
    lines.push(` * console.log(pkg.versions[0]) // "${packageInfo.versions[0]}" (latest)`)
  }

  lines.push(' * ```')
  lines.push(' *')

  // Links to documentation
  lines.push(` * @see https://ts-pkgx.netlify.app/packages/${domainName.replace(/\./g, '-')}.md`)
  lines.push(` * @see https://ts-pkgx.netlify.app/usage`)

  lines.push(' */')

  return lines.join('\n')
}

/**
 * Generates TypeScript content for a package
 */
function generateTypeScriptContent(packageInfo: PkgxPackage, domainName: string): string {
  // Helper function to check if a string is a valid alias for variable naming
  function isValidAliasForVarName(alias: string): boolean {
    if (!alias || alias.length < 2)
      return false

    // Filter out shell command patterns
    if (alias.includes('--') || alias.includes('$SHELL') || alias.includes('+') || alias.includes('(') || alias.includes(')')) {
      return false
    }

    // Filter out generic words that shouldn't be standalone aliases
    const genericWords = ['cli', 'app', 'tool', 'server', 'client', 'api', 'lib', 'core']
    if (genericWords.includes(alias.toLowerCase())) {
      return false
    }

    // Filter out version strings
    if (/^\d+(?:\.\d+)*/.test(alias)) {
      return false
    }

    return true
  }

  // Determine the best variable name - use a valid primary alias if available, otherwise use domain
  let varName: string
  let packageDisplayName: string

  if (packageInfo.aliases && packageInfo.aliases.length > 0) {
    // Find the first valid alias for variable naming
    const validAlias = packageInfo.aliases.find(alias => isValidAliasForVarName(alias))

    if (validAlias) {
      // Make sure the const variable name starts with lowercase
      const aliasBase = validAlias.replace(/[^a-z0-9]/gi, '')
      varName = `${aliasBase.charAt(0).toLowerCase()}${aliasBase.slice(1)}Package`
      packageDisplayName = validAlias
    }
    else {
      // No valid aliases, fall back to domain-based naming
      varName = `${getDomainAsTypescriptName(domainName)}Package`
      packageDisplayName = packageInfo.name || domainName
    }
  }
  else {
    // Fall back to domain-based naming
    varName = `${getDomainAsTypescriptName(domainName)}Package`
    packageDisplayName = packageInfo.name || domainName
  }

  // Ensure the variable name doesn't contain hyphens (which are invalid in JavaScript)
  const safeVarName = varName.replace(/-/g, '')

  // Generate comprehensive JSDoc documentation
  const jsdoc = generatePackageJSDoc(packageInfo, domainName, packageDisplayName)

  // Format the package object with 'as const' assertions
  const formattedObj = formatObjectWithAsConst(packageInfo)

  // Create the TypeScript content with proper JSDoc, imports and exports
  return `${jsdoc}
export const ${safeVarName} = ${formattedObj}

export type ${safeVarName.charAt(0).toUpperCase() + safeVarName.slice(1)} = typeof ${safeVarName}
`
}

/**
 * Saves package data as a TypeScript file
 */
function sanitizeFilename(packageName: string): string {
  const sanitized = packageName.replace(/\{\{[^}]*\}\}/g, '').replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '')
  if (!sanitized || sanitized.length === 0)
    return 'package'

  let cleanName = sanitized.replace(/[^\w.-]/g, '-')

  // Handle extremely long filenames to avoid ENAMETOOLONG errors
  // Most filesystems support filenames up to 255 characters, but we'll be conservative
  // and limit to 200 characters, leaving room for ".ts" extension
  if (cleanName.length > 200) {
    // Keep the first 150 characters and last 45 characters, separated by "..."
    cleanName = `${cleanName.substring(0, 150)}...${cleanName.substring(cleanName.length - 45)}`
  }

  return cleanName
}

export function savePackageAsTypeScript(outputDir: string, domainName: string, packageInfo: PkgxPackage): string {
  // Ensure base output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  let filePath: string

  // For nested domains (containing "/"), create proper directory structure
  if (domainName.includes('/')) {
    // Split the domain into parts: github.com/user/repo -> [github.com, user, repo]
    const parts = domainName.split('/')
    const baseDomain = parts[0] // github.com
    const subParts = parts.slice(1) // [user, repo]

    // Create directory structure: outputDir/github.com/user/
    const packageDir = path.join(outputDir, baseDomain, ...subParts.slice(0, -1))
    if (!fs.existsSync(packageDir)) {
      fs.mkdirSync(packageDir, { recursive: true })
    }

    // Use the last part as filename: repo.ts
    const filename = sanitizeFilename(subParts[subParts.length - 1])
    filePath = path.join(packageDir, `${filename}.ts`)
  }
  else {
    // For root domains, use consistent domain-based naming
    // Strip dots entirely from root domains (e.g., alacritty.org -> alacrittyorg)
    const filename = domainName.replace(/\./g, '')

    // Create the TypeScript file path in the base directory
    filePath = path.join(outputDir, `${filename}.ts`)
  }

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
    const resolvedName = aliases[packageName] || packageName

    // Create a safe filename for the cache file - always use domain-based naming for cache
    // to ensure consistency regardless of package name extraction
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
      console.log(`Cache for ${packageName} missing fetchedAt timestamp, invalidating`)
      return null
    }

    // Check for generic/placeholder descriptions that indicate bad cached data
    const genericDescriptions = [
      'Crafters of fine Open Source products',
      'Go home.',
      'Package information for',
      'pkgx package',
      'Loading...',
      'Please wait...',
    ]

    const hasGenericDescription = genericDescriptions.some(generic =>
      cachedData.description && cachedData.description.includes(generic),
    )

    if (hasGenericDescription) {
      console.log(`Cache for ${packageName} has generic description "${cachedData.description}", invalidating`)
      return null
    }

    // Check if the package has no versions (likely incomplete data)
    if (!cachedData.versions || cachedData.versions.length === 0) {
      console.log(`Cache for ${packageName} has no versions, invalidating`)
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

  // Create a safe filename for the cache file - always use domain-based naming for cache
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
  // Pass the original packageName (domain) to savePackageAsTypeScript so it can decide the best filename
  const outputFilePath = savePackageAsTypeScript(outputDir, packageName, packageInfo)

  return { cachePath: cacheFilePath, outputPath: outputFilePath }
}

// Global browser instance to be shared across fetches (only used when not in concurrent mode)
let sharedBrowser: Browser | null = null

// Browser pool for concurrent operations (legacy - kept for compatibility)
const browserPool: { browser: Browser, inUse: boolean, createdAt: number }[] = []
// Maximum number of browsers to keep in the pool (legacy - kept for compatibility)
const MAX_BROWSER_POOL_SIZE = 10 // Default limit, can be adjusted based on concurrency setting

// Function to check system resources and adjust behavior
function _getSystemResourceStatus() {
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
export function cleanupBrowserResources(): Promise<void> {
  // Return a promise that always resolves and never rejects
  return Promise.resolve()
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
  if (aliases[packageName]) {
    console.log(`'${packageName}' is an alias for '${aliases[packageName]}', redirecting...`)
    fullDomainName = aliases[packageName]
    packageName = aliases[packageName]
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

      // Convert package name from filename format to URL format for nested packages
      const urlPackageName = convertPackageNameToUrl(packageName)
      const pkgUrl = `https://pkgx.dev/pkgs/${urlPackageName}/`
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

        // Extract aliases from the install command
        const aliases: string[] = []

        // Helper function to check if a string is a valid alias
        function isValidAlias(alias: string): boolean {
          if (!alias || alias.length < 2)
            return false

          // Filter out shell command patterns
          if (alias.includes('--') || alias.includes('$SHELL') || alias.includes('+') || alias.includes('(') || alias.includes(')')) {
            return false
          }

          // Filter out generic words that shouldn't be standalone aliases
          const genericWords = ['cli', 'app', 'tool', 'server', 'client', 'api', 'lib', 'core']
          if (genericWords.includes(alias.toLowerCase())) {
            return false
          }

          // Filter out version strings
          if (/^\d+(?:\.\d+)*/.test(alias)) {
            return false
          }

          return true
        }

        // Look for aliases in the install command - pkgx.dev shows install commands like "sh <(curl https://pkgx.sh) aws"
        // The part after the curl command is usually the primary alias
        if (installCommand) {
          const installMatch = installCommand.match(/sh\s*<\(curl[^)]+\)\s+(\S+)/)
          if (installMatch && installMatch[1]) {
            const primaryAlias = installMatch[1].trim()
            // Only add as alias if it's valid and different from domain
            if (isValidAlias(primaryAlias) && primaryAlias !== domain) {
              aliases.push(primaryAlias)
            }
          }
        }

        // For AWS CLI specifically, add known aliases
        if (domain === 'aws.amazon.com/cli' || name === 'aws/cli') {
          if (!aliases.includes('aws'))
            aliases.push('aws')
          if (!aliases.includes('aws/cli'))
            aliases.push('aws/cli')
          // Note: 'cli' alone is NOT an alias for AWS CLI - the install command uses 'aws'
        }

        // For AWS CDK specifically, add known aliases
        if (domain === 'aws.amazon.com/cdk' || name === 'aws/cdk') {
          if (!aliases.includes('cdk'))
            aliases.push('cdk')
          if (!aliases.includes('aws/cdk'))
            aliases.push('aws/cdk')
        }

        // For other packages, only add path components as aliases if they make sense
        // Don't automatically add the last part of a path as an alias unless it's confirmed
        if (domain && domain.includes('/')) {
          const parts = domain.split('/')
          const lastPart = parts[parts.length - 1]

          // Only add the last part as an alias if it's valid and appears in the install command
          if (lastPart && lastPart !== name && installCommand && isValidAlias(lastPart)) {
            const installMatch = installCommand.match(/sh\s*<\(curl[^)]+\)\s+(\S+)/)
            if (installMatch && installMatch[1]) {
              const installAlias = installMatch[1].trim()
              // Only add if the install command specifically uses this part
              if (installAlias === lastPart && !aliases.includes(lastPart)) {
                aliases.push(lastPart)
              }
            }
          }
        }

        // If the name is different from domain and looks like an alias, add it
        // But make sure it's a valid alias
        if (name && name !== domain && name.length < domain.length && isValidAlias(name) && !aliases.includes(name)) {
          aliases.push(name)
        }

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
            aliases,
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
        if (!options.outputJson) {
          console.log(`Detected reverse alias: '${possibleAlias}' for '${packageInfo.domain}'`)
        }
        // Update our full domain name if we found a reverse alias through the website
        fullDomainName = packageInfo.domain

        // Add the newly identified alias to our aliases map
        if (possibleAlias && possibleAlias !== originalName && packageInfo.domain) {
          if (!options.outputJson) {
            console.log(`Adding new alias: '${possibleAlias}' -> '${packageInfo.domain}'`)
          }
          aliases[possibleAlias] = packageInfo.domain
        }

        // Also add the original name as an alias if it's different from both possibleAlias and domain
        if (originalName !== possibleAlias && originalName !== packageInfo.domain) {
          if (!options.outputJson) {
            console.log(`Adding original name as alias: '${originalName}' -> '${packageInfo.domain}'`)
          }
          aliases[originalName] = packageInfo.domain
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

        // For nested paths, use the last part as the name and preserve the full domain
        if (originalName.includes('/')) {
          const parts = originalName.split('/')
          packageInfo.name = parts[parts.length - 1]
          packageInfo.domain = originalName // Keep the full path as domain
          fullDomainName = originalName
        }
        else {
          packageInfo.name = originalName
          packageInfo.domain = fullDomainName
        }

        // Try multiple approaches to extract description
        packageInfo.description = await page.evaluate(() => {
          // Try various selectors for description
          const selectors = [
            'h5.MuiTypography-root',
            '[data-testid="description"]',
            '.description',
            'p.description',
            'meta[name="description"]',
          ]

          for (const selector of selectors) {
            const element = document.querySelector(selector)
            if (element) {
              const text = selector.includes('meta')
                ? (element as HTMLMetaElement).content
                : element.textContent?.trim()
              if (text && text.length > 0) {
                return text
              }
            }
          }

          // Fallback: try to extract from page title or first paragraph
          const title = document.title
          if (title && !title.toLowerCase().includes('pkgx')) {
            return title
          }

          return ''
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

      // Try to get versions from GitHub API if still empty, but only for certain domains
      if (!packageInfo.versions || packageInfo.versions.length === 0) {
        const domain = packageInfo.domain || packageName
        // Only try GitHub API for packages that are likely to be in the pkgx pantry
        // Skip known external domains that don't use the pantry structure
        const skipGitHubAPI = [
          'apache.org',
          'breakfastquay.com',
          'catb.org',
          'bloomreach.com',
          'cairographics.org',
          'certifi.io',
          'charm.sh',
          'aws.amazon.com',
          'google.com',
          'microsoft.com',
          'mozilla.org',
          'freedesktop.org',
          'gnome.org',
          'kde.org',
          'sourceforge.net',
          'sf.net',
        ].some(skipDomain => domain.startsWith(skipDomain))

        if (!skipGitHubAPI) {
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
        else {
          console.log(`Skipping GitHub API lookup for external domain: ${domain}`)
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
      packageInfo.installCommand = packageInfo.installCommand || `launchpad install ${originalName}`
      packageInfo.programs = packageInfo.programs || []
      packageInfo.companions = packageInfo.companions || []
      packageInfo.dependencies = packageInfo.dependencies || []
      packageInfo.versions = packageInfo.versions || []

      // Transform install commands from pkgx format to launchpad format
      if (packageInfo.installCommand) {
        if (packageInfo.installCommand.startsWith('pkgx ')) {
          const packageNameFromCommand = packageInfo.installCommand.replace('pkgx ', '')
          packageInfo.installCommand = `launchpad install ${packageNameFromCommand}`
        }
        else if (packageInfo.installCommand.includes('sh <(curl https://pkgx.sh)')) {
          // Handle the older sh <(curl) format: "sh <(curl https://pkgx.sh) packagename"
          const match = packageInfo.installCommand.match(/sh\s*<\(curl[^)]+\)\s+(\S.*)$/)
          if (match && match[1]) {
            const packageNameFromCommand = match[1].trim()
            packageInfo.installCommand = `launchpad install ${packageNameFromCommand}`
          }
        }
      }

      // Validate data quality to prevent writing incomplete packages
      const hasAnyContent = packageInfo.versions.length > 0 || packageInfo.programs.length > 0 || packageInfo.dependencies.length > 0

      // Check if this looks like a package that should have dependencies
      // Most real packages have either programs, versions, or dependencies

      // Additional validation: if description is generic, it might be a failed fetch
      const hasGenericDescription = packageInfo.description.includes('Package information for')
        || packageInfo.description.trim() === ''
        || packageInfo.description === `${packageName} package`

      // Be more lenient - don't warn about missing data unless it's clearly an error
      if (packageInfo.description && packageInfo.description.toLowerCase().includes('go home')) {
        console.warn(`⚠️  Package ${packageName} has error page description. This might be a fetch error.`)
      }
      else if (hasGenericDescription && !hasAnyContent) {
        console.warn(`⚠️  Package ${packageName} might have incomplete data, but proceeding anyway.`)
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
    // Lazy import to avoid module loading issues
    const { shouldProceedWithGitHubRequest, saveRateLimitInfo } = await import('./utils')

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
  const errorString = String(error)
  console.error('Uncaught exception caught:', error.message)
  if (error.message.includes('No target found for targetId')
    || error.message.includes('Assertion error')
    || error.message.includes('Target page, context or browser has been closed')
    || error.message.includes('Failed to connect')
    || error.message.includes('Connection closed')
    || error.message.includes('Protocol error')
    || errorString.includes('WebSocket connection closed')
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
 * Fetches and saves all packages using the local pantry as source of truth
 */
export async function fetchAndSaveAllPackages(options: PackageFetchOptions = {}): Promise<string[]> {
  const timeout = options.timeout || DEFAULT_TIMEOUT_MS
  const outputDir = options.outputDir || 'packages'
  const cacheDir = options.cacheDir || DEFAULT_CACHE_DIR
  const useCache = options.cache !== false
  const cacheExpirationMinutes = options.cacheExpirationMinutes || DEFAULT_CACHE_EXPIRATION_MINUTES
  const concurrency = Math.min(options.concurrency || 6, 8) // Further reduce concurrency for stability
  const pantryDir = options.pantryDir || 'src/pantry'

  if (!options.outputJson) {
    console.log(`Starting bulk fetch with concurrency: ${concurrency}, timeout: ${timeout}ms`)
  }

  const startTime = Date.now()
  let allPackageNames: string[] = []

  try {
    // Use the local pantry as the source of truth
    if (!options.outputJson) {
      console.log('Scanning local pantry for packages...')
    }

    try {
      allPackageNames = await scanPantryPackages(pantryDir)

      if (!options.outputJson) {
        console.log(`Found ${allPackageNames.length} packages in local pantry`)
      }
    }
    catch (error) {
      if (!options.outputJson) {
        console.warn('Failed to scan local pantry, falling back to consts:', error)
      }

      // Fallback to the comprehensive known packages list
      try {
        const { ALL_KNOWN_PACKAGES } = await import('./consts')
        allPackageNames = [...ALL_KNOWN_PACKAGES].filter(name =>
          name && name !== 'undefined' && name !== 'aliases' && name !== 'index',
        )

        if (!options.outputJson) {
          console.log(`Using comprehensive package list: ${allPackageNames.length} packages`)
        }
      }
      catch (constError) {
        if (!options.outputJson) {
          console.warn('Failed to load consts, falling back to GitHub API:', constError)
        }

        // Final fallback: GitHub API
        try {
          const response = await fetch('https://api.github.com/repos/pkgxdev/pantry/contents/projects', {
            headers: {
              'User-Agent': 'ts-pkgx-fetcher',
              'Accept': 'application/vnd.github.v3+json',
            },
          })

          if (response.ok) {
            const projects = await response.json() as Array<{ name: string, type: string }>
            const packageNames = projects
              .filter(item => item.type === 'dir')
              .map(item => item.name)
              .sort()

            if (!options.outputJson) {
              console.log(`Retrieved ${packageNames.length} projects from GitHub API`)
            }
            allPackageNames = packageNames
          }
          else {
            throw new Error(`GitHub API returned ${response.status}`)
          }
        }
        catch (githubError) {
          if (!options.outputJson) {
            console.warn('Failed to fetch from GitHub API, falling back to local discovery:', githubError)
          }
          // Final fallback: scan existing package files
          if (fs.existsSync(outputDir)) {
            const existingFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.ts'))
            allPackageNames = existingFiles.map(f => path.basename(f, '.ts'))
            console.log(`Found ${allPackageNames.length} existing packages`)
          }
        }
      }
    }

    if (allPackageNames.length === 0) {
      console.error('No packages found to process')
      return []
    }

    // Filter out packages that shouldn't exist as standalone packages
    const PARENT_DOMAINS_ONLY = [
      'android.com',
      'apache.org',
      'akuity.io',
      'alsa-project.org',
      'anchore.com',
      'aomedia.googlesource.com',
      'apollographql.com',
      'facebook.com',
      'google.com',
      'microsoft.com',
      'mozilla.org',
      'sourceforge.net',
      'x.org',
      'xiph.org',
      'yui.github.io',
      'crates.io', // Only has nested packages like crates.io/ripgrep
      'gitlab.com', // Only has nested packages
      'github.com', // Only has nested packages
    ]

    // For GitHub packages, filter out parent paths that only exist as containers for nested packages
    const githubParentsToFilter = new Set<string>()

    // Find all github.com packages
    const githubPackages = allPackageNames.filter(name => name.startsWith('github.com/'))

    // For each github package with multiple path segments, mark the parent as potentially filterable
    for (const pkg of githubPackages) {
      const pathParts = pkg.split('/')
      if (pathParts.length > 2) { // github.com/user/repo or deeper
        const parentPath = pathParts.slice(0, 2).join('/') // github.com/user
        githubParentsToFilter.add(parentPath)
      }
    }

    allPackageNames = allPackageNames.filter((name) => {
      // Filter out .pkgroot entries - these are just markers, not actual packages
      if (name.endsWith('/.pkgroot')) {
        console.log(`Filtering out .pkgroot marker: ${name}`)
        return false
      }

      // Filter out README.rst files - these are documentation, not packages
      if (name.endsWith('/README.rst')) {
        console.log(`Filtering out README.rst documentation: ${name}`)
        return false
      }

      // Filter out agwa.name as standalone - only agwa.name/git-crypt is valid
      if (name === 'agwa.name') {
        console.log(`Filtering out standalone agwa.name - only agwa.name/git-crypt is valid`)
        return false
      }

      // Filter out known parent domains that don't have standalone packages
      if (PARENT_DOMAINS_ONLY.includes(name)) {
        console.log(`Filtering out parent domain ${name} - only has nested packages`)
        return false
      }

      // Filter out GitHub parent paths that only exist as containers for nested packages
      if (githubParentsToFilter.has(name)) {
        console.log(`Filtering out GitHub parent path ${name} - only has nested packages`)
        return false
      }

      // Filter out other invalid standalone packages
      if (name === 'undefined' || name === 'aliases' || name === 'index') {
        return false
      }

      return true
    })

    console.log(`Found ${allPackageNames.length} packages to process`)

    // Apply limit if specified
    if (options.limit && options.limit > 0) {
      allPackageNames = allPackageNames.slice(0, options.limit)
      console.log(`Limited to ${allPackageNames.length} packages`)
    }

    // Create a single browser instance for all operations
    console.log('Launching browser...')
    const browser = await chromium.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu',
        '--window-size=1920,1080',
        '--disable-extensions',
        '--disable-plugins',
        '--disable-images', // Disable image loading for faster page loads
        '--disable-javascript', // Disable JS for faster, more reliable scraping
      ],
    })

    console.log('Browser launched successfully')

    const successfulPackages: string[] = []
    const failedPackages: string[] = []
    let processed = 0

    // Process packages in smaller batches to avoid overwhelming the system
    const batchSize = Math.min(concurrency, 6)
    const batches = []
    for (let i = 0; i < allPackageNames.length; i += batchSize) {
      batches.push(allPackageNames.slice(i, i + batchSize))
    }

    if (!options.outputJson) {
      console.log(`Processing ${allPackageNames.length} packages in ${batches.length} batches...`)
    }

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex]
      if (!options.outputJson) {
        console.log(`Processing batch ${batchIndex + 1}/${batches.length} (${batch.length} packages)`)
      }

      // Process batch with controlled concurrency using pantry-based approach
      const batchPromises = batch.map(async (packageName) => {
        try {
          // Check cache first
          const cacheFile = path.join(cacheDir, `${packageName.replace(/\//g, '-')}.json`)
          if (useCache && fs.existsSync(cacheFile)) {
            const stats = fs.statSync(cacheFile)
            const ageMinutes = (Date.now() - stats.mtime.getTime()) / (1000 * 60)

            if (ageMinutes < cacheExpirationMinutes) {
              if (!options.outputJson) {
                console.log(`Using cached data for ${packageName} (age: ${Math.round(ageMinutes)} minutes)`)
              }
              try {
                const cachedData = JSON.parse(fs.readFileSync(cacheFile, 'utf-8'))
                // Remove fetchedAt before generating TypeScript
                delete cachedData.fetchedAt
                const tsFilePath = savePackageAsTypeScript(outputDir, packageName, cachedData)
                if (!options.outputJson) {
                  console.log(`Using cached data for ${packageName} (saved to ${tsFilePath})`)
                }
                return { success: true, packageName }
              }
              catch {
                console.warn(`Cache file corrupted for ${packageName}, will refetch`)
              }
            }
          }

          // Use the new pantry-based fetch approach
          const result = await fetchPantryPackageWithMetadata(packageName, {
            ...options,
            pantryDir,
            browser, // Pass the shared browser
            timeout,
            cache: useCache,
            cacheDir,
            cacheExpirationMinutes,
          })

          if (result) {
            // Save to cache and output
            const { outputPath } = saveToCacheAndOutput(packageName, result.packageInfo, {
              cacheDir,
              outputDir,
              cache: useCache,
            })

            if (!options.outputJson) {
              console.log(`Successfully processed ${packageName} (saved to ${outputPath})`)
            }
            return { success: true, packageName }
          }
          else {
            console.warn(`Failed to fetch ${packageName}`)
            return { success: false, packageName }
          }
        }
        catch (error) {
          console.error(`Error processing ${packageName}:`, error)
          return { success: false, packageName }
        }
      })

      // Wait for batch to complete
      const batchResults = await Promise.allSettled(batchPromises)

      // Process results
      for (const result of batchResults) {
        processed++
        if (result.status === 'fulfilled') {
          if (result.value.success) {
            successfulPackages.push(result.value.packageName)
          }
          else {
            failedPackages.push(result.value.packageName)
          }
        }
        else {
          console.error('Batch promise rejected:', result.reason)
          failedPackages.push('unknown')
        }
      }

      // Progress update
      const elapsed = Math.round((Date.now() - startTime) / 1000)
      const rate = Math.round(processed / elapsed * 10) / 10
      const eta = Math.round((allPackageNames.length - processed) / rate)

      if (!options.outputJson) {
        console.log(`Batch ${batchIndex + 1}/${batches.length} complete. Progress: ${processed}/${allPackageNames.length} (${Math.round(processed / allPackageNames.length * 100)}%) | Success: ${successfulPackages.length} | Failed: ${failedPackages.length} | Rate: ${rate}/s | ETA: ${eta}s`)
      }

      // Small delay between batches to prevent overwhelming the system
      if (batchIndex < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    // Clean up browser
    if (!options.outputJson) {
      console.log('Closing browser...')
    }
    await browser.close()

    const totalTime = Math.round((Date.now() - startTime) / 1000)
    if (!options.outputJson) {
      console.log(`\nCompleted in ${totalTime}s. Successfully processed: ${successfulPackages.length}, Failed: ${failedPackages.length}`)

      if (failedPackages.length > 0) {
        console.log(`Failed packages: ${failedPackages.slice(0, 10).join(', ')}${failedPackages.length > 10 ? ` ... and ${failedPackages.length - 10} more` : ''}`)
      }
    }

    return successfulPackages
  }
  catch (error) {
    console.error('Error in fetchAndSaveAllPackages:', error)
    return []
  }
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
    installCommand: `launchpad install ${packageName}`,
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
    // agwa.name is filtered out - only agwa.name/git-crypt should be processed

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

        const fullDomainName = packageInfo.domain || packageName

        // Get aliases from the cached package
        const knownAliases = packageInfo.aliases || []

        // Save the package data to the output directory
        const filePath: string = savePackageAsTypeScript(outputDir, packageName, packageInfo)

        console.log(`Using cached data for ${packageName} (saved to ${filePath})`)
        return {
          success: true,
          fullDomainName,
          aliases: knownAliases,
          filePath,
        }
      }
    }

    // Use progressive timeout based on retry attempt - longer timeouts for retries
    const baseTimeout = timeout
    const actualTimeout = baseTimeout + (retryNumber - 1) * 10000 // Add 10s per retry

    console.log(`Using timeout for ${packageName} (attempt ${retryNumber}): ${actualTimeout}ms`)

    // Set an overall operation timeout to prevent hanging the entire process
    // This is different from the browser navigation timeout
    const operationTimeout = actualTimeout // Use the same timeout
    const operationTimeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => {
        console.error(`Operation timeout for ${packageName} after ${operationTimeout}ms`)
        reject(new Error(`Operation timeout after ${operationTimeout}ms`))
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

        // The timeout promise will reject if it times out, so we can directly use the result
        const { packageInfo, originalName, fullDomainName } = fetchResult

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

        // Start with aliases that were extracted from the web scraping
        if (packageInfo.aliases && packageInfo.aliases.length > 0) {
          knownAliases.push(...packageInfo.aliases)
        }

        // Check if this is the target of an alias in PACKAGE_ALIASES
        for (const [alias, target] of Object.entries(aliases)) {
          if (target === fullDomainName && !knownAliases.includes(alias)) {
            knownAliases.push(alias)
          }
        }

        // Add the original name or path components as aliases
        if (originalName !== fullDomainName && !knownAliases.includes(originalName)) {
          knownAliases.push(originalName)
        }

        // Only add the subpath component as an alias if it makes sense
        // Don't add generic words like 'cli', 'app', 'tool' as standalone aliases
        const genericWords = ['cli', 'app', 'tool', 'server', 'client', 'api', 'lib', 'core']
        if (!knownAliases.includes(subPath) && !genericWords.includes(subPath.toLowerCase())) {
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
        const filePath: string = savePackageAsTypeScript(outputDir, fullDomainName, enhancedPackageInfo)

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

          // For nested packages, try a different URL structure
          if (packageName.includes('/')) {
          // Try fetching with a direct URL approach for nested packages
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
                // Convert package name from filename format to URL format for nested packages
                const urlPackageName = convertPackageNameToUrl(packageName)
                const directUrl = `https://pkgx.dev/pkgs/${urlPackageName}/`
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

                // Add the aliases (only if not generic)
                const safeFilename = packageName.replace(/\//g, '-')
                const genericWords = ['cli', 'app', 'tool', 'server', 'client', 'api', 'lib', 'core']
                const knownAliases = genericWords.includes(subPath.toLowerCase()) ? [] : [subPath]

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
                  filePath = savePackageAsTypeScript(outputDir, packageName, enhancedPackageInfo)
                }

                console.log(`Successfully saved nested package to ${filePath} using alternative method`)
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
              console.error(`Alternative method for nested package also failed:`, directError)
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

        // The timeout promise will reject if it times out, so we can directly use the result
        const { packageInfo, originalName, fullDomainName } = fetchResult

        // Validate that we have meaningful package data before proceeding - be more lenient
        const hasDescription = packageInfo.description && packageInfo.description.trim() !== ''
        const hasVersions = packageInfo.versions && packageInfo.versions.length > 0
        const hasPrograms = packageInfo.programs && packageInfo.programs.length > 0
        const hasPackageYml = packageInfo.packageYmlUrl && packageInfo.packageYmlUrl.length > 0
        const hasDependencies = packageInfo.dependencies && packageInfo.dependencies.length > 0
        const hasCompanions = packageInfo.companions && packageInfo.companions.length > 0

        // Only skip if clearly problematic descriptions
        const hasClearlyBadDescription = hasDescription && (
          packageInfo.description.toLowerCase().trim() === 'go home.'
          || packageInfo.description.toLowerCase().trim() === 'page not found'
          || packageInfo.description.toLowerCase().trim() === 'not found'
          || packageInfo.description.toLowerCase().trim() === '404'
          || packageInfo.description.toLowerCase().trim() === 'error'
        )

        // Be more permissive - consider a package valid if it has:
        // 1. A non-problematic description (even if generic), OR
        // 2. Any structural data (versions, programs, dependencies, companions, packageYml), OR
        // 3. A valid domain name (for external packages that may have minimal pkgx data)
        const hasValidDescription = hasDescription && !hasClearlyBadDescription
        const hasStructuralData = hasVersions || hasPrograms || hasPackageYml || hasDependencies || hasCompanions
        const hasValidDomain = packageInfo.domain && packageInfo.domain.includes('.')

        const hasValidData = hasValidDescription || hasStructuralData || hasValidDomain

        if (!hasValidData) {
          console.error(`Package ${packageName} appears to have no meaningful data. Skipping to avoid creating empty files.`)
          return { success: false, fullDomainName: packageName }
        }

        // Additional validation: Check if we're about to overwrite a file with better data
        // We need to check both possible filenames: package name and domain-based
        const packageBasedFilename = packageInfo.name
          && packageInfo.name !== fullDomainName
          && packageInfo.name !== fullDomainName.split('/')[0]
          && packageInfo.name.length > 1
          && !packageInfo.name.includes('/')
          ? sanitizeFilename(packageInfo.name)
          : null
        const domainBasedFilename = fullDomainName.replace(/\//g, '-')

        const existingFilePath = packageBasedFilename
          ? path.join(outputDir, `${packageBasedFilename}.ts`)
          : path.join(outputDir, `${domainBasedFilename}.ts`)

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

        // Start with aliases that were extracted from the web scraping
        if (packageInfo.aliases && packageInfo.aliases.length > 0) {
          knownAliases.push(...packageInfo.aliases)
        }

        // Check if this is the target of an alias in PACKAGE_ALIASES
        for (const [alias, target] of Object.entries(aliases)) {
          if (target === fullDomainName && !knownAliases.includes(alias)) {
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
        const filePath: string = savePackageAsTypeScript(outputDir, fullDomainName, enhancedPackageInfo)

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

    // Check for timeout errors that should be retried
    const isTimeoutError = errorString.includes('Operation timed out after')
      || errorString.includes('Operation timeout after')
      || errorString.includes('timeout')
      || errorString.includes('Timeout')
      || errorString.includes('Navigation timeout')

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

    if (isTimeoutError) {
      console.error(`Timeout error for ${packageName}:`, errorString.substring(0, 200))

      // Wait a bit before retrying timeout errors
      await new Promise(resolve => setTimeout(resolve, 1000 * retryNumber))
    }
    else if (isBrowserError) {
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

    // Different wait times based on error type
    let waitTime = 500 * retryNumber // default
    if (isBrowserError) {
      waitTime = 2000 * retryNumber // longer for browser errors
    }
    else if (isTimeoutError) {
      waitTime = 1000 * retryNumber // medium for timeout errors
    }

    await new Promise(resolve => setTimeout(resolve, waitTime))

    // Retry with same base timeout (actual timeout will still increase due to retry counter)
    return fetchAndSavePackage(packageName, outputDir, timeout, saveAsJson, retryNumber + 1, maxRetries, debug, options)
  }
}

/**
 * Check if a package has meaningful data and should be saved
 */

/**
 * Scans the local pantry directory and extracts all available packages
 * @param pantryDir Path to the pantry directory (default: 'src/pantry')
 * @returns Array of package names found in the pantry
 */
export async function scanPantryPackages(pantryDir = 'src/pantry'): Promise<string[]> {
  if (!fs.existsSync(pantryDir)) {
    throw new Error(`Pantry directory not found: ${pantryDir}. Please run 'bun ./bin/cli.ts update-pantry' first.`)
  }

  const packages: string[] = []

  function scanDirectory(dir: string, basePath = ''): void {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const currentPath = basePath ? `${basePath}/${entry.name}` : entry.name
        const fullPath = path.join(dir, entry.name)

        // Check if this directory contains package.yml
        const packageYmlPath = path.join(fullPath, 'package.yml')
        if (fs.existsSync(packageYmlPath)) {
          packages.push(currentPath)
        }
        else {
          // Recursively scan subdirectories
          scanDirectory(fullPath, currentPath)
        }
      }
    }
  }

  scanDirectory(pantryDir)

  console.log(`Found ${packages.length} packages in pantry`)
  return packages.sort()
}

/**
 * Reads package.yml file and extracts basic package information
 * @param packageName The package name (e.g., 'github.com/user/repo')
 * @param pantryDir Path to the pantry directory
 * @returns Basic package information from package.yml
 */
export async function readPantryPackageInfo(packageName: string, pantryDir = 'src/pantry'): Promise<Partial<PkgxPackage> | null> {
  const packageYmlPath = path.join(pantryDir, packageName, 'package.yml')

  if (!fs.existsSync(packageYmlPath)) {
    console.warn(`Package.yml not found for ${packageName}`)
    return null
  }

  try {
    const yamlContent = fs.readFileSync(packageYmlPath, 'utf-8')

    // Parse YAML content - for now we'll extract what we can with simple regex
    // In a full implementation, you'd want to use a proper YAML parser

    // Extract dependencies with version constraints (both top-level and build dependencies)
    const dependencies: string[] = []
    const depsLines = yamlContent.split('\n')
    let inDepsSection = false
    let inBuildDepsSection = false

    let inOsSection = false
    let currentOs = ''

    for (const line of depsLines) {
      // Check for top-level dependencies
      if (line.match(/^dependencies:\s*$/)) {
        inDepsSection = true
        inBuildDepsSection = false
        inOsSection = false
        continue
      }

      // Check for build.dependencies (2-space indented)
      if (line.match(/^\s{2}dependencies:\s*$/)) {
        inBuildDepsSection = true
        inDepsSection = false
        inOsSection = false
        continue
      }

      if (inDepsSection || inBuildDepsSection) {
        // Exit conditions: empty line or non-indented line (for top-level deps)
        // or less than 4-space indented line (for build deps)
        if (line.match(/^\s*$/)
          || (inDepsSection && line.match(/^\S/))
          || (inBuildDepsSection && !line.match(/^\s{4,}/))) {
          inDepsSection = false
          inBuildDepsSection = false
          inOsSection = false
          continue
        }

        // Check for OS-specific sections like "linux:", "darwin:", etc.
        const osMatch = line.match(/^\s{2}(linux|darwin|windows):\s*$/)
        if (osMatch) {
          inOsSection = true
          currentOs = osMatch[1]
          continue
        }

        // If we're in an OS section, look for packages with more indentation
        if (inOsSection) {
          // Parse lines like "    freetype.org: '*'" (4+ spaces)
          const osDepMatch = line.match(/^\s{4,}([^\s:]+):\s*['"]?([^'"]+)['"]?/)
          if (osDepMatch) {
            const pkg = osDepMatch[1]
            const version = osDepMatch[2].trim()

            // Add OS prefix to indicate conditional dependency
            const osPrefix = `${currentOs}:`

            if (version && version !== '*') {
              // Include version constraint - add @ for specific versions, ^ for ranges
              const hasVersionOperator = /^[~^>=<@]/.test(version)
              const isSpecificVersion = /^\d+(?:\.\d+)*$/.test(version)
              const operator = hasVersionOperator ? '' : (isSpecificVersion ? '@' : '^')
              dependencies.push(`${osPrefix}${pkg}${operator}${version}`)
            }
            else {
              dependencies.push(`${osPrefix}${pkg}`)
            }
          }
          // If we hit a line with less than 4 spaces, we're out of this OS section
          else if (!line.match(/^\s{4,}/) && !line.match(/^\s*$/)) {
            inOsSection = false
            currentOs = ''
          }
        }
        else {
          // Parse regular dependencies (direct under dependencies:)
          const depMatch = line.match(/^\s{2,3}([^\s:]+):\s*['"]?([^'"]+)['"]?/)
          if (depMatch) {
            const pkg = depMatch[1]
            const version = depMatch[2].trim()

            // Skip OS sections that we already handled
            if (['linux', 'darwin', 'windows'].includes(pkg)) {
              continue
            }

            if (version && version !== '*') {
              // Include version constraint - add @ for specific versions, ^ for ranges
              const hasVersionOperator = /^[~^>=<@]/.test(version)
              const isSpecificVersion = /^\d+(?:\.\d+)*$/.test(version)
              const operator = hasVersionOperator ? '' : (isSpecificVersion ? '@' : '^')
              dependencies.push(`${pkg}${operator}${version}`)
            }
            else {
              dependencies.push(pkg)
            }
          }
        }
      }
    }

    // Extract companions/runtime dependencies with version constraints
    const companions: string[] = []
    let inRuntimeSection = false

    for (const line of depsLines) {
      if (line.match(/^runtime:\s*$/)) {
        inRuntimeSection = true
        continue
      }
      if (inRuntimeSection) {
        if (line.match(/^\s*$/) || line.match(/^\S/)) {
          inRuntimeSection = false
          continue
        }

        // Skip environment variable definitions (env: section)
        if (line.match(/^\s+env:\s*$/)) {
          continue
        }

        // Skip lines that are environment variable assignments
        if (line.match(/^\s+[A-Z_]+:\s*\$\{\{/)) {
          continue
        }

        // Parse lines like "nodejs.org: '>=5'" or "curl.se: '*'" (actual package dependencies)
        const runtimeMatch = line.match(/^\s+([^\s:]+):\s*['"]?([^'"]+)['"]?/)
        if (runtimeMatch) {
          const pkg = runtimeMatch[1]
          const version = runtimeMatch[2].trim()

          // Skip if this looks like an environment variable (all caps with underscores)
          if (/^[A-Z_]+$/.test(pkg)) {
            continue
          }

          if (version && version !== '*') {
            // Include version constraint - add @ for specific versions, ^ for ranges
            const hasVersionOperator = /^[~^>=<@]/.test(version)
            const isSpecificVersion = /^\d+(?:\.\d+)*$/.test(version)
            const operator = hasVersionOperator ? '' : (isSpecificVersion ? '@' : '^')
            companions.push(`${pkg}${operator}${version}`)
          }
          else {
            companions.push(pkg)
          }
        }
      }
    }

    // Extract homepage and GitHub URLs from distributable.url
    let homepageUrl = ''
    let githubUrl = ''

    const distributableMatch = yamlContent.match(/distributable:[\t\v\f\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\n\s*url:\s*(.+)/)
    if (distributableMatch) {
      const url = distributableMatch[1].trim()
      if (url.includes('github.com')) {
        // Extract GitHub URL from git+https://github.com/owner/repo.git format
        const githubMatch = url.match(/git\+https:\/\/github\.com\/([^/]+\/[^.]+)/)
        if (githubMatch) {
          githubUrl = `https://github.com/${githubMatch[1]}`

          // For well-known projects, try to determine homepage URL
          const repoPath = githubMatch[1]
          if (repoPath === 'python-attrs/attrs') {
            homepageUrl = 'https://www.attrs.org/'
          }
          // Add more mappings as needed
        }
      }
    }

    const packageInfo: Partial<PkgxPackage> = {
      name: packageName.split('/').pop() || packageName,
      domain: packageName,
      dependencies,
      companions,
      homepageUrl,
      githubUrl,
      // We'll get the rest from pkgx.dev
    }

    return packageInfo
  }
  catch (error) {
    console.warn(`Error reading package.yml for ${packageName}:`, error)
    return null
  }
}

/**
 * Combines pantry package data with additional metadata from pkgx.dev
 * @param packageName The package name (e.g., 'github.com/user/repo')
 * @param options Fetch options including pantry directory
 * @returns Complete package information
 */
export async function fetchPantryPackageWithMetadata(
  packageName: string,
  options: PackageFetchOptions = {},
): Promise<{ packageInfo: PkgxPackage, originalName: string, fullDomainName: string } | null> {
  const pantryDir = options.pantryDir || 'src/pantry'

  try {
    // First, get basic package info from pantry files
    const pantryInfo = await readPantryPackageInfo(packageName, pantryDir)

    if (!pantryInfo) {
      console.warn(`No pantry information found for ${packageName}`)
      return null
    }

    // Then fetch additional metadata from pkgx.dev
    try {
      const webData = await fetchPkgxPackage(packageName, options)

      // Get alias overrides for this domain
      const domain = pantryInfo.domain || webData.packageInfo.domain
      const aliasOverrides = getAliasOverrides(domain)

      // Determine final aliases
      let finalAliases = webData.packageInfo.aliases || []
      if (aliasOverrides.length > 0) {
        if (shouldReplaceAliases(domain)) {
          // Replace existing aliases completely
          finalAliases = aliasOverrides
        }
        else {
          // Add to existing aliases, avoiding duplicates
          finalAliases = [...new Set([...finalAliases, ...aliasOverrides])]
        }
      }

      // Combine pantry data with web data, giving priority to pantry for dependencies/companions
      const combinedPackageInfo: PkgxPackage = {
        ...webData.packageInfo,
        // Override with pantry data where available
        dependencies: pantryInfo.dependencies && pantryInfo.dependencies.length > 0
          ? pantryInfo.dependencies
          : webData.packageInfo.dependencies,
        companions: pantryInfo.companions && pantryInfo.companions.length > 0
          ? pantryInfo.companions
          : webData.packageInfo.companions,
        domain: pantryInfo.domain || webData.packageInfo.domain,
        name: pantryInfo.name || webData.packageInfo.name,
        // Use pantry URLs if available, otherwise fallback to web data
        homepageUrl: pantryInfo.homepageUrl || webData.packageInfo.homepageUrl,
        githubUrl: pantryInfo.githubUrl || webData.packageInfo.githubUrl,
        // Apply alias overrides
        aliases: finalAliases,
      }

      return {
        packageInfo: combinedPackageInfo,
        originalName: webData.originalName,
        fullDomainName: webData.fullDomainName,
      }
    }
    catch (webError) {
      console.warn(`Failed to fetch web metadata for ${packageName}, using pantry data only:`, webError)

      // Create a minimal package from pantry data only
      const packageInfo: PkgxPackage = {
        name: pantryInfo.name || packageName.split('/').pop() || packageName,
        domain: pantryInfo.domain || packageName,
        description: `Package from pantry: ${packageName}`,
        installCommand: `launchpad install ${packageName}`,
        programs: [],
        companions: pantryInfo.companions || [],
        dependencies: pantryInfo.dependencies || [],
        versions: [],
        packageYmlUrl: `https://github.com/pkgxdev/pantry/tree/main/projects/${packageName}/package.yml`,
        homepageUrl: '',
        githubUrl: '',
      }

      return {
        packageInfo,
        originalName: packageName,
        fullDomainName: packageName,
      }
    }
  }
  catch (error) {
    console.error(`Error processing pantry package ${packageName}:`, error)
    return null
  }
}
