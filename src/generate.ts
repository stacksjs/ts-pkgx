/* eslint-disable no-console */

/**
 * Script to generate the index.ts file for packages directory and documentation
 * This will scan the packages directory and automatically create imports and exports
 * for all package files found, as well as generate comprehensive documentation.
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { convertDomainToVarName, guessOriginalDomain } from './utils'

// The packages directory path
const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')
// Default documentation output directory
const DEFAULT_DOCS_DIR = path.join(process.cwd(), 'docs')

// Files to exclude from processing
const _EXCLUDED_FILES = ['index.ts', 'aliases.ts']

// Special module names that need custom handling
const SPECIAL_MODULES: Record<string, string> = {
  // Add any special module mappings here if needed
}

interface PkgxPackage {
  name: string
  domain: string
  description: string
  packageYmlUrl: string
  homepageUrl: string
  githubUrl: string
  installCommand: string
  programs: readonly string[]
  companions: readonly string[]
  dependencies: readonly string[]
  versions: readonly string[]
  fullPath: string
  aliases: readonly string[]
}

async function importPantry(packagesDir?: string): Promise<Record<string, PkgxPackage>> {
  try {
    const pantryData: Record<string, PkgxPackage> = {}

    // Use provided packages directory or default to current working directory
    const targetPackagesDir = packagesDir || path.join(process.cwd(), 'src', 'packages')

    // Check if packages directory exists
    if (!fs.existsSync(targetPackagesDir)) {
      console.log(`Packages directory does not exist: ${targetPackagesDir}`)
      return pantryData
    }

    // Get all package files
    const packageFiles = fs.readdirSync(targetPackagesDir)
      .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'aliases.ts')

    console.log(`Reading package data from ${packageFiles.length} files...`)

    // Read each package file and extract the package data
    for (const file of packageFiles) {
      try {
        const filePath = path.join(targetPackagesDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const moduleName = path.basename(file, '.ts')
        const domain = guessOriginalDomain(moduleName)
        const domainVarName = convertDomainToVarName(domain)

        // Extract package data from the file content
        const packageData = extractPackageDataFromFile(content, domain)
        if (packageData) {
          pantryData[domainVarName] = packageData
          console.log(`Loaded package data for ${domain} -> ${domainVarName}`)
        }
      }
      catch (error) {
        console.error(`Error reading package file ${file}:`, error)
      }
    }

    console.log(`Successfully loaded ${Object.keys(pantryData).length} packages`)
    return pantryData
  }
  catch (error) {
    console.error('Error importing pantry:', error)
    return {}
  }
}

/**
 * Extract package data from a TypeScript package file content
 */
function extractPackageDataFromFile(content: string, domain: string): PkgxPackage | null {
  try {
    // Extract the package object from the file
    const packageMatch = content.match(/export const \w+Package = \{([\s\S]*?)\}/)
    if (!packageMatch) {
      console.warn(`Could not find package object in file for ${domain}`)
      return null
    }

    // Helper function to extract array values
    const extractArray = (key: string): string[] => {
      const regex = new RegExp(`${key}:\\s*\\[(.*?)\\]\\s*as const`, 's')
      const match = content.match(regex)
      if (!match)
        return []

      const arrayContent = match[1]
      // Try single quotes first, then double quotes
      let items = arrayContent.match(/'([^']*)'/g)
      if (items) {
        return items.map(item => item.replace(/'/g, ''))
      }

      // Try double quotes
      items = arrayContent.match(/"([^"]*)"/g)
      if (items) {
        return items.map(item => item.replace(/"/g, ''))
      }

      return []
    }

    // Helper function to extract string values
    const extractString = (key: string): string => {
      // Try with 'as const' first - handle escaped quotes properly
      let regex = new RegExp(`${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'\\s*as const`)
      let match = content.match(regex)
      if (match) {
        // Unescape the string - convert \' back to '
        return match[1].replace(/\\'/g, '\'').replace(/\\\\/g, '\\')
      }

      // Try without 'as const' - handle escaped quotes properly
      regex = new RegExp(`${key}:\\s*'((?:[^'\\\\]|\\\\.)*)'`)
      match = content.match(regex)
      if (match) {
        // Unescape the string - convert \' back to '
        return match[1].replace(/\\'/g, '\'').replace(/\\\\/g, '\\')
      }

      return ''
    }

    // Extract all the package properties
    const name = extractString('name') || domain
    const description = extractString('description') || ''
    const packageYmlUrl = extractString('packageYmlUrl') || ''
    const homepageUrl = extractString('homepageUrl') || ''
    const githubUrl = extractString('githubUrl') || ''
    const installCommand = extractString('installCommand') || ''
    const fullPath = extractString('fullPath') || domain

    const programs = extractArray('programs')
    const companions = extractArray('companions')
    const dependencies = extractArray('dependencies')
    const versions = extractArray('versions')
    const aliases = extractArray('aliases')

    return {
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
      fullPath,
      aliases,
    }
  }
  catch (error) {
    console.error(`Error extracting package data for ${domain}:`, error)
    return null
  }
}

/**
 * Filters out invalid aliases according to the user rules
 * @param alias The alias to check
 * @param targetDomain The target domain
 * @returns true if the alias is valid, false otherwise
 */
function isValidAlias(alias: string, targetDomain: string): boolean {
  // Don't create standalone aliases from generic sub-path words
  const genericWords = ['cli', 'app', 'tool', 'server', 'client', 'api', 'lib', 'core', 'sdk', 'dev', 'bin']

  // If the alias is just a generic word, skip it
  if (genericWords.includes(alias.toLowerCase())) {
    return false
  }

  // Don't create aliases that are the same as the domain
  if (alias === targetDomain) {
    return false
  }

  // Don't create aliases that are just the domain without dots
  const domainWithoutDots = targetDomain.replace(/\./g, '')
  if (alias === domainWithoutDots) {
    return false
  }

  // Filter out shell command patterns (install scripts)
  // These contain shell operators and are not real aliases
  if (alias.includes('--') || alias.includes('$SHELL') || alias.includes('curl') || alias.includes('sh <(')) {
    return false
  }

  // Filter out patterns that look like shell commands or install scripts
  if (alias.includes(' -- ') || alias.includes(' -i') || (alias.includes('+') && alias.includes(' '))) {
    return false
  }

  // Don't create aliases for paths that end with generic words
  // For example, don't create 'cli' alias for 'cedarpolicy.com/cli'
  if (targetDomain.includes('/')) {
    const pathParts = targetDomain.split('/')
    const lastPart = pathParts[pathParts.length - 1]
    if (genericWords.includes(lastPart.toLowerCase()) && alias === lastPart) {
      return false
    }
  }

  // Don't create aliases that are too short (less than 3 characters) unless they're well-known
  const wellKnownShortAliases = ['go', 'js', 'py', 'rb', 'sh', 'vi', 'cc', 'gc', 'jq', 'awk', 'sed']
  if (alias.length < 3 && !wellKnownShortAliases.includes(alias.toLowerCase())) {
    return false
  }

  // Don't create aliases that are just numbers or version-like strings
  if (/^\d+(?:\.\d+)*$/.test(alias)) {
    return false
  }

  // Don't create aliases that contain only special characters
  if (!/[a-z]/i.test(alias)) {
    return false
  }

  return true
}

/**
 * Enhanced category mapping with better organization
 * Note: Domain names are normalized (dots removed, lowercase)
 */
function getCategoryMapping(): Record<string, string[]> {
  return {
    'Programming Languages': [
      'nodejsorg',
      'node',
      'pythonorg',
      'python',
      'rustlangorg',
      'rubylangorg',
      'godev',
      'scalalangorg',
      'julialangorg',
      'kotlinlangorg',
      'perlorg',
      'phpnet',
      'swiftorg',
      'typescriptlangorg',
      'crystallangorg',
      'elixirlangorg',
      'haskellorg',
      'gleamrun',
      'denoland',
      'vlangio',
      'ziglangorg',
      'nimlangorg',
      'ocamlorg',
      'dartdev',
      'erlangorg',
    ],
    'JavaScript & Node.js Ecosystem': [
      'nodejsorg',
      'node',
      'bunsh',
      'denoland',
      'npmjscom',
      'pnpmio',
      'yarnpkgcom',
      'classicyarnpkgcom',
      'vitejsdev',
      'angulardev',
      'expodev',
      'flutterdev',
    ],
    'Package Managers & Build Tools': [
      'npmjscom',
      'pnpmio',
      'yarnpkgcom',
      'pythonpoetryorg',
      'pipenvpypaio',
      'pippypaio',
      'rubygemsorg',
      'cratesio',
      'mavenapacheorg',
      'gradleorg',
      'cmakeorg',
      'ninjabuildorg',
      'mesonbuildcom',
    ],
    'Databases': [
      'postgresqlorg',
      'mysqlcom',
      'redisio',
      'mongodbcom',
      'sqliteorg',
      'cassandraapacheorg',
      'influxdatacom',
      'couchdbapacheorg',
      'neo4jcom',
      'clickhousecom',
      'surrealdbcom',
      'duckdborg',
      'valkeyio',
    ],
    'DevOps & Infrastructure': [
      'dockercom',
      'kubernetesio',
      'terraformio',
      'helmsh',
      'consulio',
      'vaulthashicorpio',
      'nomadprojectio',
      'ansiblecom',
      'podmanio',
      'traefikio',
      'envoyproxyio',
      'istioio',
      'ciliumio',
      'fluxcdio',
      'argoprojgithubio',
    ],
    'Cloud Platforms & Services': [
      'awsamazoncom',
      'githubcom',
      'gitlabcom',
      'digitaloceancom',
      'herokucom',
      'vercelcom',
      'cloudflarecom',
      'flyio',
      'railwayapp',
    ],
    'Monitoring & Observability': [
      'prometheusio',
      'grafanacom',
      'jaegertracingiojaeger',
      'opentelemetryio',
      'sentryio',
      'datadogcom',
    ],
    'Security & Authentication': [
      'hashicorpcom',
      'bitwardencom',
      'developer1passwordcom',
      'auth0com',
      'oktacom',
      'keycloakorg',
    ],
    'Development Tools': [
      'gitscmorg',
      'githubcom',
      'gitlabcom',
      'codevisualstudiocom',
      'neovimio',
      'vimorg',
      'jetbrainscom',
      'prettierio',
      'eslintorg',
    ],
    'CLI Tools & Utilities': [
      'curlse',
      'wgetgnuorg',
      'jqstedolangithubio',
      'ripgrepburntsushinet',
      'fdsharkdpgithubio',
      'batsharkdpgithubio',
      'exavaladaptivenet',
      'htopdev',
      'tmuxgithubio',
    ],
    'Web Servers & Proxies': [
      'nginxorg',
      'apacheorg',
      'caddycommunity',
      'traefikio',
      'envoyproxyio',
      'haproxyorg',
    ],
    'Testing & Quality Assurance': [
      'jestio',
      'cypressio',
      'playwrightdev',
      'seleniumdev',
      'pytestorg',
      'junitorg',
    ],
  }
}

/**
 * Safely convert a filename to a valid JavaScript identifier
 * @param moduleName The module filename without extension
 * @returns A valid JavaScript identifier
 */
function toSafeVarName(moduleName: string): string {
  if (SPECIAL_MODULES[moduleName]) {
    return SPECIAL_MODULES[moduleName]
  }
  // Replace special characters with underscores
  return moduleName.replace(/\W/g, '_')
}

/**
 * Normalize a module name by converting to lowercase
 * This helps with files that have capital letters in their names
 * @param moduleName The module filename without extension
 * @returns A normalized module name
 */
function normalizeModuleName(moduleName: string): string {
  return moduleName.toLowerCase()
}

/**
 * Read a package file and extract the actual export names
 * @param moduleName The module filename without extension
 * @param packagesDir The packages directory to read from
 * @returns Object with the actual package variable name and type name
 */
function getActualExportNames(moduleName: string, packagesDir?: string): { packageVarName: string, typeName: string } {
  try {
    const targetPackagesDir = packagesDir || PACKAGES_DIR
    const filePath = path.join(targetPackagesDir, `${moduleName}.ts`)
    const content = fs.readFileSync(filePath, 'utf-8')

    // Extract the export const name
    const exportConstMatch = content.match(/export const (\w+) = \{/)
    const packageVarName = exportConstMatch ? exportConstMatch[1] : `${moduleName.replace(/\W/g, '')}Package`

    // Extract the export type name
    const exportTypeMatch = content.match(/export type (\w+) = typeof/)
    const typeName = exportTypeMatch ? exportTypeMatch[1] : `${packageVarName.charAt(0).toUpperCase()}${packageVarName.slice(1)}`

    return { packageVarName, typeName }
  }
  catch (error) {
    // Fallback to the old logic if file reading fails
    console.warn(`Could not read package file ${moduleName}.ts, using fallback naming:`, error)
    const fallbackVarName = toPackageVarNameFallback(moduleName)
    const fallbackTypeName = toTypeNameFallback(moduleName)
    return { packageVarName: fallbackVarName, typeName: fallbackTypeName }
  }
}

/**
 * Convert a filename to the expected type name in the file (fallback)
 * @param moduleName The module filename without extension
 * @returns The expected type name
 */
function toTypeNameFallback(moduleName: string): string {
  // If it's a special module, use the special name with first letter capitalized
  if (SPECIAL_MODULES[moduleName]) {
    const special = SPECIAL_MODULES[moduleName]
    return `${special.charAt(0).toUpperCase()}${special.slice(1)}Package`
  }

  // Normalize the module name to lowercase to handle case sensitivity
  const normalized = normalizeModuleName(moduleName)

  // The pattern in the actual files is that a filename like "foo.bar" becomes FoobarPackage
  // rather than FooBarPackage, so we need to replace dots and other special characters

  // Remove special characters
  const safe = normalized.replace(/\W/g, '')

  // Then capitalize the first letter
  return `${safe.charAt(0).toUpperCase()}${safe.slice(1)}Package`
}

/**
 * Convert a filename to the expected package variable name in the file (fallback)
 * @param moduleName The module filename without extension
 * @returns The expected package variable name
 */
function toPackageVarNameFallback(moduleName: string): string {
  // Special handling for special modules
  if (SPECIAL_MODULES[moduleName]) {
    return `${SPECIAL_MODULES[moduleName]}Package`
  }

  // Normalize the module name to lowercase to handle case sensitivity
  const normalized = normalizeModuleName(moduleName)

  // For package variable names, follow the same pattern as type names
  // but without capitalizing the first letter
  const safe = normalized.replace(/\W/g, '')
  return `${safe}Package`
}

/**
 * Convert a filename to the expected type name in the file
 * @param moduleName The module filename without extension
 * @param packagesDir The packages directory to read from
 * @returns The expected type name
 */
function toTypeName(moduleName: string, packagesDir?: string): string {
  const { typeName } = getActualExportNames(moduleName, packagesDir)
  return typeName
}

/**
 * Convert a filename to the expected package variable name in the file
 * @param moduleName The module filename without extension
 * @param packagesDir The packages directory to read from
 * @returns The expected package variable name
 */
function toPackageVarName(moduleName: string, packagesDir?: string): string {
  const { packageVarName } = getActualExportNames(moduleName, packagesDir)
  return packageVarName
}

/**
 * Generate the index.ts file for the packages directory
 * @param packagesDir Optional packages directory path (for testing)
 * @returns The path to the generated index file
 */
export async function generateIndex(packagesDir?: string): Promise<string | null> {
  try {
    console.log('🔧 Generating package index...')

    // Use provided packages directory or default
    const targetPackagesDir = packagesDir || PACKAGES_DIR
    const targetIndexFile = path.join(targetPackagesDir, 'index.ts')

    // Import existing pantry data (may be empty if this is the first run)
    const pantryData = await importPantry(targetPackagesDir)

    // Check if packages directory exists
    if (!fs.existsSync(targetPackagesDir)) {
      console.log(`Packages directory does not exist: ${targetPackagesDir}`)

      // Ensure the packages directory exists before writing the index file
      fs.mkdirSync(targetPackagesDir, { recursive: true })

      // Create minimal index file
      const content = `// Auto-generated package index
// Do not edit this file directly

export interface Pantry {
}

export type Packages = Pantry

export const pantry: Pantry = {
}

export const packages: Packages = pantry
export * from './aliases'
`
      await fs.promises.writeFile(targetIndexFile, content)
      console.log(`Generated minimal ${targetIndexFile}`)
      return targetIndexFile
    }

    // Get all package files
    const packageFiles = fs.readdirSync(targetPackagesDir)
      .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'aliases.ts')
      .map(file => path.join(targetPackagesDir, file))
    console.log(`Found ${packageFiles.length} package files`)

    // Extract aliases from package files
    const aliases = await extractAllAliases(targetPackagesDir)

    // Build domain to variable name mapping
    const domainToVarName: Record<string, string> = {}
    const aliasToVarName: Record<string, string> = {}

    // First pass: build domain mappings
    for (const file of packageFiles) {
      const moduleName = path.basename(file, '.ts')
      const domain = guessOriginalDomain(moduleName)
      const domainVarName = convertDomainToVarName(domain)
      domainToVarName[domain] = domainVarName
    }

    // Build alias mappings with improved handling for special characters
    for (const [alias, targetDomain] of Object.entries(aliases)) {
      const targetVarName = domainToVarName[targetDomain]
      if (targetVarName && alias !== targetDomain) {
        // Check if this is a valid alias according to our rules
        if (!isValidAlias(alias, targetDomain)) {
          continue
        }

        // For aliases with spaces or special characters, we need special handling
        // Convert alias to a safe variable name for internal use
        const aliasVarName = convertDomainToVarName(alias)

        // Only add if the alias var name is different from the target var name
        // and if the original alias is meaningful (not just the domain itself)
        if (aliasVarName !== targetVarName && alias !== targetDomain) {
          // Store both the safe variable name and the original alias
          aliasToVarName[alias] = targetVarName
        }
      }
    }

    // Generate imports and interface
    let imports = '// Auto-generated package index\n// Do not edit this file directly\n\n'
    let interfaceDecl = 'export interface Pantry {\n'
    let pantry = 'export const pantry: Pantry = {\n'

    // Sort package files alphabetically for consistent import order
    // Sort by original domain name for proper alphabetical ordering
    const sortedPackageFiles = packageFiles.sort((a, b) => {
      const moduleA = path.basename(a, '.ts')
      const moduleB = path.basename(b, '.ts')
      const domainA = guessOriginalDomain(moduleA)
      const domainB = guessOriginalDomain(moduleB)

      return domainA.localeCompare(domainB, undefined, { numeric: true, sensitivity: 'base' })
    })

    // Process each package file
    for (const file of sortedPackageFiles) {
      const moduleName = path.basename(file, '.ts')
      const domain = guessOriginalDomain(moduleName)

      // Skip invalid package domains
      if (!isValidPackageDomain(domain)) {
        console.log(`Skipping invalid package domain: ${domain} (from file: ${moduleName}.ts)`)
        continue
      }

      const moduleVarName = toSafeVarName(moduleName)
      const packageVarName = toPackageVarName(moduleName, targetPackagesDir)
      const typeName = toTypeName(moduleName, targetPackagesDir)
      const domainVarName = convertDomainToVarName(domain)

      // Add the import
      imports += `import * as ${moduleVarName} from './${moduleName}'\n`

      // Get package data for JSDoc - try multiple approaches to find the data
      // Handle the case where pantryData might be undefined or empty
      let pkgData = null
      if (pantryData && typeof pantryData === 'object') {
        pkgData = pantryData[domainVarName] || pantryData[moduleVarName] || pantryData[domain]
      }

      // Generate comprehensive JSDoc for this package
      let jsdoc = '  /**\n'

      if (pkgData && !shouldExcludePackage(pkgData)) {
        // Package name and description - escape and limit length
        let description = ''
        if (pkgData.description) {
          // Escape special characters for JSDoc (but not backslashes)
          let escapedDesc = pkgData.description
            .replace(/\*/g, '\\*') // Escape asterisks
            .replace(/`/g, '\\`') // Escape backticks

          // Limit description length for readability
          if (escapedDesc.length > 200) {
            escapedDesc = `${escapedDesc.substring(0, 197)}...`
          }

          description = ` - ${escapedDesc}`
        }
        jsdoc += `   * **${pkgData.name || domain}**${description}\n`
        jsdoc += '   *\n'

        // Domain information
        jsdoc += `   * @domain \`${domain}\`\n`

        // Programs provided
        if (pkgData.programs && pkgData.programs.length > 0) {
          const programsList = pkgData.programs.slice(0, 5).join('`, `')
          const morePrograms = pkgData.programs.length > 5 ? `, ... (+${pkgData.programs.length - 5} more)` : ''
          jsdoc += `   * @programs \`${programsList}\`${morePrograms}\n`
        }

        // Latest version
        if (pkgData.versions && pkgData.versions.length > 0) {
          jsdoc += `   * @version \`${pkgData.versions[0]}\` (${pkgData.versions.length} versions available)\n`
        }

        // Installation command
        if (pkgData.installCommand) {
          jsdoc += `   * @install \`${pkgData.installCommand}\`\n`
        }

        // Aliases - separate package name from true aliases
        if (pkgData.aliases && pkgData.aliases.length > 0) {
          const packageName = pkgData.name
          const trueAliases = pkgData.aliases.filter(alias => alias !== packageName)
          const packageNameAlias = pkgData.aliases.find(alias => alias === packageName)

          // Add @name if the package name is in the aliases list
          if (packageNameAlias) {
            jsdoc += `   * @name \`${packageNameAlias}\`\n`
          }

          // Add @aliases only for true aliases (not the package name)
          if (trueAliases.length > 0) {
            jsdoc += `   * @aliases ${trueAliases.map(a => `\`${a}\``).join(', ')}\n`
          }
        }

        // Homepage URL
        if (pkgData.homepageUrl) {
          jsdoc += `   * @homepage ${pkgData.homepageUrl}\n`
        }

        // Dependencies
        if (pkgData.dependencies && pkgData.dependencies.length > 0) {
          const depsList = pkgData.dependencies.slice(0, 3).join('`, `')
          const moreDeps = pkgData.dependencies.length > 3 ? `, ... (+${pkgData.dependencies.length - 3} more)` : ''
          jsdoc += `   * @dependencies \`${depsList}\`${moreDeps}\n`
        }

        // Companions
        if (pkgData.companions && pkgData.companions.length > 0) {
          const companionsList = pkgData.companions.slice(0, 3).join('`, `')
          const moreCompanions = pkgData.companions.length > 3 ? `, ... (+${pkgData.companions.length - 3} more)` : ''
          jsdoc += `   * @companions \`${companionsList}\`${moreCompanions}\n`
        }

        jsdoc += '   *\n'
        jsdoc += '   * @example\n'
        jsdoc += '   * ```typescript\n'
        jsdoc += `   * import { pantry } from 'ts-pkgx'\n`
        jsdoc += '   *\n'
        jsdoc += `   * const pkg = pantry.${domainVarName}\n`
        jsdoc += `   * console.log(pkg.name)        // "${pkgData.name || domain}"\n`
        if (pkgData.description) {
          const shortDesc = pkgData.description.length > 50 ? `${pkgData.description.substring(0, 47)}...` : pkgData.description
          jsdoc += `   * console.log(pkg.description) // "${shortDesc}"\n`
        }
        if (pkgData.programs && pkgData.programs.length > 0) {
          jsdoc += `   * console.log(pkg.programs)    // [${pkgData.programs.slice(0, 2).map(p => `"${p}"`).join(', ')}${pkgData.programs.length > 2 ? ', ...' : ''}]\n`
        }
        if (pkgData.versions && pkgData.versions.length > 0) {
          jsdoc += `   * console.log(pkg.versions[0]) // "${pkgData.versions[0]}"\n`
        }
        jsdoc += '   * ```\n'
      }
      else {
        // Fallback for packages without data
        jsdoc += `   * **${domain}** - pkgx package\n`
        jsdoc += '   *\n'
        jsdoc += `   * @domain \`${domain}\`\n`
        jsdoc += '   *\n'
        jsdoc += '   * @example\n'
        jsdoc += '   * ```typescript\n'
        jsdoc += `   * import { pantry } from 'ts-pkgx'\n`
        jsdoc += `   * const pkg = pantry.${domainVarName}\n`
        jsdoc += '   * ```\n'
      }

      jsdoc += '   */\n'

      // Add the interface property with JSDoc (always quote property names for consistency)
      interfaceDecl += jsdoc
      interfaceDecl += `  '${domainVarName}': ${moduleVarName}.${typeName}\n\n`

      // Add to pantry (always quote property names for consistency)
      pantry += `  '${domainVarName}': ${moduleVarName}.${packageVarName},\n`
    }

    // Add alias properties to the interface and pantry object
    const sortedAliases = Object.entries(aliasToVarName).sort((a, b) => a[0].localeCompare(b[0]))

    if (sortedAliases.length > 0) {
      interfaceDecl += '  // Alias properties for convenience\n'

      // Track used property names to avoid duplicates
      const usedPropertyNames = new Set<string>()

      // Add all domain variable names to the used set
      Object.values(domainToVarName).forEach(varName => usedPropertyNames.add(varName))

      for (const [originalAlias, targetVarName] of sortedAliases) {
        const targetDomain = Object.keys(domainToVarName).find(d => domainToVarName[d] === targetVarName)
        const pkgData = pantryData[targetVarName] || (targetDomain ? pantryData[convertDomainToVarName(targetDomain)] : null)

        // Convert the original alias to a safe property name
        const aliasVarName = convertDomainToVarName(originalAlias)

        // Check if this property name is already used (avoid duplicates)
        if (usedPropertyNames.has(aliasVarName)) {
          console.log(`Skipping duplicate alias property: ${aliasVarName} for ${originalAlias} (already used)`)
          continue
        }

        // Also check if this alias variable name is the same as the target variable name
        if (aliasVarName === targetVarName) {
          console.log(`Skipping redundant alias property: ${aliasVarName} for ${originalAlias} (same as target)`)
          continue
        }

        // Mark this property name as used
        usedPropertyNames.add(aliasVarName)

        // Always quote property names for consistency (even valid identifiers)
        const isValidIdentifier = /^[a-z_$][\w$]*$/i.test(aliasVarName)
        const quotedAliasVarName = `'${aliasVarName}'`

        // Generate JSDoc for alias
        let aliasJsdoc = '  /**\n'
        if (pkgData && targetDomain && !shouldExcludePackage(pkgData)) {
          aliasJsdoc += `   * **${originalAlias}** - Alias for \`${targetDomain}\`\n`
          aliasJsdoc += '   *\n'
          if (pkgData.description) {
            // Escape and limit description for alias (but not backslashes)
            let escapedDesc = pkgData.description
              .replace(/\*/g, '\\*') // Escape asterisks
              .replace(/`/g, '\\`') // Escape backticks

            if (escapedDesc.length > 150) {
              escapedDesc = `${escapedDesc.substring(0, 147)}...`
            }

            aliasJsdoc += `   * ${escapedDesc}\n`
            aliasJsdoc += '   *\n'
          }
          aliasJsdoc += `   * @alias_for \`pantry.${targetVarName}\`\n`
          aliasJsdoc += `   * @domain \`${targetDomain}\`\n`

          if (pkgData.programs && pkgData.programs.length > 0) {
            const programsList = pkgData.programs.slice(0, 3).join('`, `')
            const morePrograms = pkgData.programs.length > 3 ? `, ... (+${pkgData.programs.length - 3} more)` : ''
            aliasJsdoc += `   * @programs \`${programsList}\`${morePrograms}\n`
          }

          aliasJsdoc += '   *\n'
          aliasJsdoc += '   * @example\n'
          aliasJsdoc += '   * ```typescript\n'
          aliasJsdoc += `   * import { pantry } from 'ts-pkgx'\n`
          aliasJsdoc += '   *\n'
          aliasJsdoc += `   * // Both access the same package object\n`
          if (isValidIdentifier) {
            aliasJsdoc += `   * const pkg1 = pantry.${aliasVarName}  // via alias\n`
          }
          else {
            aliasJsdoc += `   * const pkg1 = pantry['${aliasVarName}']  // via alias\n`
          }
          aliasJsdoc += `   * const pkg2 = pantry.${targetVarName}  // via domain\n`
          aliasJsdoc += `   * console.log(pkg1 === pkg2)  // true\n`
          aliasJsdoc += '   * ```\n'
        }
        else {
          aliasJsdoc += `   * **${originalAlias}** - Alias for \`${targetVarName}\`\n`
          aliasJsdoc += '   *\n'
          aliasJsdoc += `   * @alias_for \`pantry.${targetVarName}\`\n`
        }
        aliasJsdoc += '   */\n'

        // Find the target type
        const targetFile = packageFiles.find((file) => {
          const moduleName = path.basename(file, '.ts')
          const domain = guessOriginalDomain(moduleName)
          return convertDomainToVarName(domain) === targetVarName
        })

        if (targetFile) {
          const targetModuleName = path.basename(targetFile, '.ts')
          const targetModuleVarName = toSafeVarName(targetModuleName)
          const targetTypeName = toTypeName(targetModuleName, targetPackagesDir)

          interfaceDecl += aliasJsdoc
          interfaceDecl += `  ${quotedAliasVarName}: ${targetModuleVarName}.${targetTypeName}\n\n`

          // Add to pantry object (property names are already quoted in quotedAliasVarName)
          pantry += `  ${quotedAliasVarName}: ${targetModuleVarName}.${toPackageVarName(targetModuleName, targetPackagesDir)},\n`
        }
      }
    }

    // Close the interface and pantry
    interfaceDecl += '}\n\n'
    pantry += '}\n\n'

    // Add the Packages type alias and packages const
    const packagesType = 'export type Packages = Pantry\n\n'
    const packagesConst = 'export const packages: Packages = pantry\n'

    // Add export for aliases
    const aliasesExport = 'export * from \'./aliases\'\n'

    // Combine all sections
    const content = `${imports}\n${interfaceDecl}${packagesType}${pantry}${packagesConst}${aliasesExport}`

    // Write to the index file
    await fs.promises.writeFile(targetIndexFile, content)
    console.log(`Successfully generated ${targetIndexFile}`)

    return targetIndexFile
  }
  catch (error) {
    console.error('Error generating index file:', error)
    return null
  }
}

// Legacy support - if script is run directly without arguments, generate the index
if (require.main === module && process.argv.length === 2) {
  generateIndex()
    .then((result) => {
      if (!result) {
        process.exit(1)
      }
    })
    .catch((error) => {
      console.error('Unhandled error:', error)
      process.exit(1)
    })
}

/**
 * Extracts aliases from all package files
 * @param packagesDir Optional packages directory path (for testing)
 * @returns A map of alias to domain name
 */
async function extractAllAliases(packagesDir?: string): Promise<Record<string, string>> {
  const allAliases: Record<string, string> = {}

  // Use provided packages directory or default to current working directory
  const targetPackagesDir = packagesDir || path.join(process.cwd(), 'src', 'packages')

  // Check if packages directory exists
  if (!fs.existsSync(targetPackagesDir)) {
    console.log(`Packages directory does not exist: ${targetPackagesDir}`)
    return allAliases
  }

  // Get all TypeScript files in the packages directory
  const files = fs.readdirSync(targetPackagesDir)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'aliases.ts')

  console.log(`Found ${files.length} package files`)

  // Process each file to extract aliases
  for (const file of files) {
    try {
      const filePath = path.join(targetPackagesDir, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      const moduleName = path.basename(file, '.ts')
      const domain = guessOriginalDomain(moduleName)

      // Extract aliases array from the file content
      const aliasesMatch = content.match(/aliases:\s*\[([\s\S]*?)\]/)
      if (aliasesMatch && aliasesMatch[1]) {
        const aliases = aliasesMatch[1].match(/["']([^"']*)["']/g)
        if (aliases) {
          // Add each alias to the map, but filter out shell commands
          for (const alias of aliases) {
            const cleanAlias = alias.replace(/["']/g, '')
            if (cleanAlias && isValidAlias(cleanAlias, domain)) {
              allAliases[cleanAlias] = domain
              console.log(`Found alias ${cleanAlias} -> ${domain}`)
            }
            else {
              console.log(`Filtered out invalid alias: ${cleanAlias} for ${domain}`)
            }
          }
        }
      }

      // Special handling for AWS packages to ensure proper aliases
      if (domain === 'aws.amazon.com/cli') {
        if (!allAliases.aws) {
          allAliases.aws = domain
          console.log(`Added AWS CLI alias: aws -> ${domain}`)
        }
        if (!allAliases['aws/cli']) {
          allAliases['aws/cli'] = domain
          console.log(`Added AWS CLI path alias: aws/cli -> ${domain}`)
        }
      }

      if (domain === 'aws.amazon.com/cdk') {
        if (!allAliases.cdk) {
          allAliases.cdk = domain
          console.log(`Added AWS CDK alias: cdk -> ${domain}`)
        }
        if (!allAliases['aws/cdk']) {
          allAliases['aws/cdk'] = domain
          console.log(`Added AWS CDK path alias: aws/cdk -> ${domain}`)
        }
      }

      // Don't add the domain itself as an alias - that's not actually an alias
    }
    catch (error) {
      console.error(`Error extracting aliases from ${file}:`, error)
    }
  }

  return allAliases
}

/**
 * Generates the aliases.ts file
 * @returns Path to the generated file
 */
export async function generateAliases(): Promise<string> {
  try {
    // Extract all aliases
    const aliases = await extractAllAliases()

    // Use current working directory for aliases file path (for testing)
    const aliasesFile = path.join(process.cwd(), 'src', 'packages', 'aliases.ts')

    // Ensure the directory exists before writing the file
    const aliasesDir = path.dirname(aliasesFile)
    if (!fs.existsSync(aliasesDir)) {
      fs.mkdirSync(aliasesDir, { recursive: true })
    }

    // Generate the file content
    let content = '/**\n * Auto-generated aliases for pkgx packages\n */\n\n'
    content += 'export const aliases: Record<string, string> = {\n'

    // Sort aliases alphabetically
    const sortedAliases = Object.entries(aliases).sort((a, b) => a[0].localeCompare(b[0]))

    // Add each alias entry
    for (const [alias, domain] of sortedAliases) {
      content += `  '${alias}': '${domain}',\n`
    }

    content += '}\n'

    // Write the file
    fs.writeFileSync(aliasesFile, content)
    console.log(`Successfully generated ${aliasesFile} with ${sortedAliases.length} aliases`)

    return aliasesFile
  }
  catch (error) {
    console.error('Error generating aliases file:', error)
    return ''
  }
}

/**
 * Check if a package domain is valid and not a reserved keyword
 */
function isValidPackageDomain(domain: string): boolean {
  // Reserved JavaScript keywords that should not be used as package domains
  const reservedKeywords = [
    'undefined',
    'null',
    'true',
    'false',
    'var',
    'let',
    'const',
    'function',
    'class',
    'if',
    'else',
    'for',
    'while',
    'do',
    'switch',
    'case',
    'default',
    'break',
    'continue',
    'return',
    'try',
    'catch',
    'finally',
    'throw',
    'new',
    'this',
    'super',
    'import',
    'export',
    'from',
    'as',
    'typeof',
    'instanceof',
    'in',
    'of',
    'delete',
    'void',
    'async',
    'await',
    'yield',
    'static',
    'extends',
    'implements',
    'interface',
    'type',
    'enum',
    'namespace',
    'module',
    'declare',
    'abstract',
    'public',
    'private',
    'protected',
    'readonly',
    'get',
    'set',
  ]

  // Check if domain is a reserved keyword
  if (reservedKeywords.includes(domain.toLowerCase())) {
    return false
  }

  // Domain should have at least one dot (be a valid domain format)
  // Exception: some single-word domains like 'go' are valid
  const validSingleWordDomains = ['go', 'rust', 'zig', 'nim', 'dart', 'julia', 'scala', 'kotlin', 'swift']
  if (!domain.includes('.') && !validSingleWordDomains.includes(domain.toLowerCase())) {
    return false
  }

  // Domain should not be empty or just whitespace
  if (!domain || domain.trim().length === 0) {
    return false
  }

  // Domain should not contain invalid characters for a domain name
  if (!/^[a-z0-9.\-/]+$/i.test(domain)) {
    return false
  }

  return true
}

/**
 * Check if a package has placeholder/invalid data and should be excluded
 */
function shouldExcludePackage(pkg: PkgxPackage): boolean {
  // First check if the domain itself is valid
  if (!isValidPackageDomain(pkg.domain)) {
    return true
  }

  if (!pkg.description)
    return true

  const placeholderDescriptions = [
    'Go home.',
    'Crafters of fine Open Source products',
    'Package information for',
    'pkgx package',
    'Loading...',
    'Please wait...',
    'Package information available on pkgx.dev',
  ]

  return placeholderDescriptions.some(placeholder =>
    pkg.description.includes(placeholder),
  )
}

/**
 * Generate package catalog with proper categorization
 */
async function generatePackageCatalog(outputDir: string): Promise<string> {
  const pantry = await importPantry()
  const categories = getCategoryMapping()
  const catalogPath = path.join(outputDir, 'package-catalog.md')

  // Filter out packages with placeholder data
  const validPantry: Record<string, PkgxPackage> = {}
  let excludedCount = 0

  for (const [key, pkg] of Object.entries(pantry)) {
    if (!shouldExcludePackage(pkg)) {
      validPantry[key] = pkg
    }
    else {
      excludedCount++
      console.log(`Excluding package ${pkg.domain || key} (placeholder data)`)
    }
  }

  console.log(`Filtered out ${excludedCount} packages with placeholder data`)

  // Track categorized packages
  const categorizedDomains = new Set<string>()
  Object.values(categories).forEach((domains) => {
    domains.forEach(domain => categorizedDomains.add(domain))
  })

  // Add uncategorized packages to Utilities (only valid packages)
  const uncategorizedPackages: string[] = []
  Object.keys(validPantry).forEach((domain) => {
    if (!categorizedDomains.has(domain)) {
      uncategorizedPackages.push(domain)
    }
  })

  if (uncategorizedPackages.length > 0) {
    categories['Other Utilities'] = uncategorizedPackages
  }

  let content = `# Package Catalog

This comprehensive catalog lists all ${Object.keys(validPantry).length}+ packages available in ts-pkgx, organized by category.

Each package can be accessed using \`getPackage(name)\` or directly via \`pantry.domain\`.

## Quick Stats

- **Total Packages**: ${Object.keys(validPantry).length}
- **Categories**: ${Object.keys(categories).length}
- **Last Updated**: ${new Date().toISOString()}

## Table of Contents

`

  // Generate table of contents
  Object.keys(categories).forEach((category) => {
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const count = categories[category].filter(domain => validPantry[domain]).length
    content += `- [${category}](#${slug}) (${count} packages)\n`
  })

  content += '\n'

  // Generate sections for each category
  for (const [category, domains] of Object.entries(categories)) {
    const validDomains = domains.filter(domain => validPantry[domain]).sort()

    if (validDomains.length === 0)
      continue

    content += `## ${category}\n\n`
    content += `*${validDomains.length} packages in this category*\n\n`
    content += '| Package | Description | Programs | Versions | Install |\n'
    content += '|---------|-------------|----------|----------|----------|\n'

    for (const domain of validDomains) {
      try {
        const pkg = validPantry[domain]
        if (!pkg)
          continue

        // Format aliases
        const aliases = pkg.aliases ? ` (${pkg.aliases.join(', ')})` : ''

        // Limit programs display and escape template variables for VitePress
        let programs = pkg.programs.slice(0, 3).map((p: string) => p.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')).join(', ')
        if (pkg.programs.length > 3) {
          programs += `, ... (+${pkg.programs.length - 3})`
        }
        if (pkg.programs.length === 0) {
          programs = '-'
        }

        // Get version info
        const versionCount = pkg.versions?.length || 0
        const latestVersion = pkg.versions?.[0] || 'latest'
        const versionInfo = versionCount > 0 ? `${latestVersion} (+${versionCount - 1})` : 'latest'

        // Escape pipe characters for markdown table
        let description = pkg.description.replace(/\|/g, '\\|')

        // Limit description length for table readability
        if (description.length > 100) {
          description = `${description.substring(0, 97)}...`
        }

        // Create install command
        const installCmd = `\`pkgx ${pkg.name || domain}\``

        // Create safe filename for package link in catalog
        let safeCatalogFilename = domain
        if (/^\d/.test(safeCatalogFilename)) {
          safeCatalogFilename = `pkg-${safeCatalogFilename}`
        }
        safeCatalogFilename = safeCatalogFilename.replace(/[^\w.-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '')

        content += `| **[${domain}](./packages/${safeCatalogFilename}.md)**${aliases} | ${description} | ${programs} | ${versionInfo} | ${installCmd} |\n`
      }
      catch (error) {
        console.error(`Error processing ${domain}:`, error)
        content += `| **${domain}** | Error retrieving package information | - | - | - |\n`
      }
    }

    content += '\n'
  }

  // Add usage examples
  content += `## Usage Examples

### Basic Usage

\`\`\`typescript
import { getPackage, pantry } from 'ts-pkgx'

// Get a package by domain
const nodePackage = pantry.nodejsorg

// Get a package by alias
const nodeByAlias = getPackage('node')

// Access package properties
console.log(\`Package: \${nodePackage.name} - \${nodePackage.description}\`)
console.log(\`Install: \${nodePackage.installCommand}\`)
console.log(\`Programs: \${nodePackage.programs.join(', ')}\`)
\`\`\`

### Advanced Usage

\`\`\`typescript
// Find packages by category
const databases = [
  pantry.postgresqlorg,
  pantry.mysqlcom,
  pantry.redisio,
  pantry.mongodbcom
]

// Get all available versions
const nodeVersions = pantry.nodejsorg.versions
console.log(\`Node.js versions: \${nodeVersions.slice(0, 5).join(', ')}...\`)

// Check dependencies
const nodeDeps = pantry.nodejsorg.dependencies
console.log(\`Node.js dependencies: \${nodeDeps.join(', ')}\`)
\`\`\`

### Installation Examples

\`\`\`bash
# Install using pkgx
pkgx node
pkgx python
pkgx rust

# Install specific versions
pkgx node@20
pkgx python@3.11

# Install multiple packages
pkgx node python rust
\`\`\`

## Package Information

Each package includes:

- **Name**: Short identifier for the package
- **Domain**: Full domain identifier
- **Description**: What the package does
- **Programs**: Executable programs provided
- **Versions**: Available versions
- **Dependencies**: Required dependencies
- **Companions**: Related packages
- **Install Command**: How to install with pkgx

## Contributing

To add or update packages, see the pkgx [contribution guide](https://docs.pkgx.sh/appendix/packaging/pantry).
`

  fs.writeFileSync(catalogPath, content)
  return catalogPath
}

/**
 * Generate individual package documentation pages
 */
async function generatePackagePages(outputDir: string): Promise<string[]> {
  const pantry = await importPantry()
  const packagesDir = path.join(outputDir, 'packages')

  // Ensure packages directory exists
  if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir, { recursive: true })
  }

  const generatedFiles: string[] = []

  for (const [domainVarName, pkg] of Object.entries(pantry)) {
    // Skip packages with placeholder data
    if (shouldExcludePackage(pkg)) {
      console.log(`Skipping package page for ${pkg.domain || domainVarName} (placeholder data)`)
      continue
    }
    try {
      // Create a safe filename that doesn't start with numbers or contain spaces
      let safeFilename = domainVarName

      // If filename starts with a number, prepend with 'pkg-'
      if (/^\d/.test(safeFilename)) {
        safeFilename = `pkg-${safeFilename}`
      }

      // Replace spaces and other problematic characters with hyphens
      safeFilename = safeFilename.replace(/[^\w-]/g, '-')

      // Ensure it doesn't have consecutive hyphens
      safeFilename = safeFilename.replace(/-+/g, '-')

      // Remove leading/trailing hyphens
      safeFilename = safeFilename.replace(/^-+|-+$/g, '')

      const filename = `${safeFilename}.md`
      const filepath = path.join(packagesDir, filename)

      const domain = pkg.domain || pkg.fullPath || domainVarName
      const description = pkg.description || ''

      let content = `# ${pkg.name || domain}

>${description ? ` ${description}` : ''}

## Package Information

- **Domain**: \`${domain}\`
- **Name**: \`${pkg.name || domain}\`
- **Homepage**: ${pkg.homepageUrl || 'Not specified'}
- **Source**: [View on GitHub](${pkg.packageYmlUrl || `https://github.com/pkgxdev/pantry/tree/main/projects/${domain}/package.yml`})

## Installation

\`\`\`bash
# Install with pkgx
${pkg.installCommand || `sh <(curl https://pkgx.sh) +${domain} -- $SHELL -i`}
\`\`\`

## Programs

This package provides the following executable programs:

`

      if (pkg.programs && pkg.programs.length > 0) {
        pkg.programs.forEach((program: string) => {
          // Escape template variables for VitePress
          const escapedProgram = program.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')
          content += `- \`${escapedProgram}\`\n`
        })
      }
      else {
        content += '*No programs specified*\n'
      }

      // Add aliases if available
      if (pkg.aliases && pkg.aliases.length > 0) {
        content += `\n## Aliases

This package can also be accessed using these aliases:

`
        pkg.aliases.forEach((alias) => {
          content += `- \`${alias}\`\n`
        })
      }

      // Add versions
      if (pkg.versions && pkg.versions.length > 0) {
        content += `\n## Available Versions

<details>
<summary>Show all ${pkg.versions.length} versions</summary>

`
        // Show versions in a more readable format
        const versionChunks = []
        for (let i = 0; i < pkg.versions.length; i += 5) {
          versionChunks.push(pkg.versions.slice(i, i + 5))
        }

        versionChunks.forEach((chunk) => {
          content += `- ${chunk.map(v => `\`${v}\``).join(', ')}\n`
        })

        content += `\n</details>

**Latest Version**: \`${pkg.versions[0]}\`

### Install Specific Version

\`\`\`bash
# Install specific version
sh <(curl https://pkgx.sh) +${domain}@${pkg.versions[0]} -- $SHELL -i
\`\`\`
`
      }

      // Add dependencies
      if (pkg.dependencies && pkg.dependencies.length > 0) {
        content += `\n## Dependencies

This package depends on:

`
        pkg.dependencies.forEach((dep) => {
          content += `- \`${dep}\`\n`
        })
      }

      // Add companions
      if (pkg.companions && pkg.companions.length > 0) {
        content += `\n## Related Packages

These packages work well with ${pkg.name || domain}:

`
        pkg.companions.forEach((companion) => {
          const companionVarName = convertDomainToVarName(companion)
          const companionPkg = pantry[companionVarName]
          if (companionPkg) {
            // Create safe filename for companion link
            let safeCompanionFilename = companionVarName
            if (/^\d/.test(safeCompanionFilename)) {
              safeCompanionFilename = `pkg-${safeCompanionFilename}`
            }
            safeCompanionFilename = safeCompanionFilename.replace(/[^\w-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '')

            content += `- [\`${companion}\`](${safeCompanionFilename}.md) - ${companionPkg.description}\n`
          }
          else {
            content += `- \`${companion}\`\n`
          }
        })
      }

      // Add usage examples
      content += `\n## Usage Examples

\`\`\`typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.${domainVarName}

console.log(\`Package: \${pkg.name}\`)
console.log(\`Description: \${pkg.description}\`)
console.log(\`Programs: \${pkg.programs.join(', ')}\`)
\`\`\`

## Links

- [Package Source](${pkg.packageYmlUrl || `https://github.com/pkgxdev/pantry/tree/main/projects/${domain}/package.yml`})
- [Homepage](${pkg.homepageUrl || '#'})
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
`

      fs.writeFileSync(filepath, content)
      generatedFiles.push(filepath)
    }
    catch (error) {
      console.error(`Error generating page for ${domainVarName}:`, error)
    }
  }

  return generatedFiles
}

/**
 * Generate category index pages
 */
async function generateCategoryPages(outputDir: string): Promise<string[]> {
  const pantry = await importPantry()
  const categories = getCategoryMapping()
  const categoriesDir = path.join(outputDir, 'categories')

  // Ensure categories directory exists
  if (!fs.existsSync(categoriesDir)) {
    fs.mkdirSync(categoriesDir, { recursive: true })
  }

  const generatedFiles: string[] = []

  for (const [categoryName, domainVarNames] of Object.entries(categories)) {
    // Convert domain variable names back to actual domains and get valid packages
    const validPackages = domainVarNames
      .map((domainVarName) => {
        const pkg = pantry[domainVarName]
        return pkg ? { domainVarName, pkg } : null
      })
      .filter((item): item is { domainVarName: string, pkg: PkgxPackage } => item !== null)
      .filter(({ pkg }) => !shouldExcludePackage(pkg)) // Exclude packages with placeholder data
      .sort((a, b) => (a.pkg.domain || a.domainVarName).localeCompare(b.pkg.domain || b.domainVarName))

    if (validPackages.length === 0)
      continue

    const filename = `${categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.md`
    const filepath = path.join(categoriesDir, filename)

    let content = `# ${categoryName}

*${validPackages.length} packages in this category*

${categoryName === 'Programming Languages'
    ? 'Popular programming languages and their runtimes available through pkgx.'
    : categoryName === 'Databases'
      ? 'Database systems and data storage solutions.'
      : categoryName === 'DevOps & Infrastructure'
        ? 'Tools for deployment, orchestration, and infrastructure management.'
        : `Packages related to ${categoryName.toLowerCase()}.`
}

## Packages

`

    validPackages.forEach(({ domainVarName, pkg }) => {
      const domain = pkg.domain || pkg.fullPath || 'unknown'
      const aliases = pkg.aliases && pkg.aliases.length > 0 ? ` (${pkg.aliases.join(', ')})` : ''
      const description = pkg.description || ''

      // Create safe filename for package link
      let safePackageFilename = domainVarName
      if (/^\d/.test(safePackageFilename)) {
        safePackageFilename = `pkg-${safePackageFilename}`
      }
      safePackageFilename = safePackageFilename.replace(/[^\w-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '')

      content += `### [${domain}](../packages/${safePackageFilename}.md)${aliases}
${description
  ? `
${description}
`
  : ''}
**Programs**: ${pkg.programs && pkg.programs.length > 0 ? pkg.programs.map((p: string) => p.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')).join(', ') : 'None specified'}

**Install**: \`${pkg.installCommand || `sh <(curl https://pkgx.sh) +${domain} -- $SHELL -i`}\`

---

`
    })

    content += `[← Back to Package Catalog](../package-catalog.md)
`

    fs.writeFileSync(filepath, content)
    generatedFiles.push(filepath)
  }

  return generatedFiles
}

/**
 * Main documentation generation function
 */
export async function generateDocs(outputDir: string = DEFAULT_DOCS_DIR): Promise<void> {
  console.error('🚀 Generating comprehensive package documentation...')

  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Generate main catalog
    console.error('📚 Generating package catalog...')
    const catalogPath = await generatePackageCatalog(outputDir)
    console.error(`✅ Generated: ${catalogPath}`)

    // Generate individual package pages
    console.error('📄 Generating individual package pages...')
    const packagePages = await generatePackagePages(outputDir)
    console.error(`✅ Generated ${packagePages.length} package pages`)

    // Generate category pages
    console.error('📂 Generating category pages...')
    const categoryPages = await generateCategoryPages(outputDir)
    console.error(`✅ Generated ${categoryPages.length} category pages`)

    console.error(`\n🎉 Documentation generation complete!`)
    console.error(`📍 Output directory: ${outputDir}`)
    console.error(`📊 Total files generated: ${1 + packagePages.length + categoryPages.length}`)
    console.error(`\nFiles generated:`)
    console.error(`- Package catalog: ${catalogPath}`)
    console.error(`- Package pages: ${packagePages.length} files in docs/packages/`)
    console.error(`- Category pages: ${categoryPages.length} files in docs/categories/`)
  }
  catch (error) {
    console.error('❌ Error generating documentation:', error)
    throw error
  }
}

/**
 * Main function - handles both index and documentation generation
 */
async function main() {
  try {
    const args = process.argv.slice(2)
    const command = args[0] || 'index'

    switch (command) {
      case 'index': {
        console.log('🔧 Generating package index...')
        const indexResult = await generateIndex()
        if (!indexResult) {
          console.error('❌ Failed to generate index')
          process.exit(1)
        }

        console.log('🏷️  Generating aliases...')
        const aliasesResult = await generateAliases()
        if (!aliasesResult) {
          console.error('❌ Failed to generate aliases')
          process.exit(1)
        }

        console.log('✨ Index and aliases generation completed successfully!')
        break
      }

      case 'docs': {
        const outputDir = args[1] || DEFAULT_DOCS_DIR
        console.log(`📚 Generating documentation to ${outputDir}...`)
        await generateDocs(outputDir)
        console.log('✨ Documentation generation completed successfully!')
        break
      }

      case 'all': {
        console.log('🚀 Generating everything...')

        // Generate index and aliases first
        console.log('🔧 Generating package index...')
        const allIndexResult = await generateIndex()
        if (!allIndexResult) {
          console.error('❌ Failed to generate index')
          process.exit(1)
        }

        console.log('🏷️  Generating aliases...')
        const allAliasesResult = await generateAliases()
        if (!allAliasesResult) {
          console.error('❌ Failed to generate aliases')
          process.exit(1)
        }

        // Then generate documentation
        const allOutputDir = args[1] || DEFAULT_DOCS_DIR
        console.log(`📚 Generating documentation to ${allOutputDir}...`)
        await generateDocs(allOutputDir)

        console.log('✨ All generation completed successfully!')
        break
      }

      default:
        console.log(`
Usage: bun run src/generate.ts [command] [options]

Commands:
  index                 Generate package index and aliases (default)
  docs [output-dir]     Generate documentation (default: ./docs)
  all [output-dir]      Generate everything (index, aliases, and docs)

Examples:
  bun run src/generate.ts
  bun run src/generate.ts index
  bun run src/generate.ts docs
  bun run src/generate.ts docs ./custom-docs
  bun run src/generate.ts all
  bun run src/generate.ts all ./custom-docs
`)
        break
    }
  }
  catch (error) {
    console.error('💥 Error during generation:', error)
    process.exit(1)
  }
}

// Run the main function only when run directly (for both CommonJS and ES modules)
if (require.main === module || import.meta.url.endsWith('generate.ts')) {
  main()
}
