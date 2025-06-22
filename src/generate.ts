/* eslint-disable no-console */

/**
 * Script to generate the index.ts file for packages directory and documentation
 * This will scan the packages directory and automatically create imports and exports
 * for all package files found, as well as generate comprehensive documentation.
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { getAllAliasOverrides } from './alias-overrides'
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
  pkgxInstallCommand: string
  launchpadInstallCommand: string
  programs: readonly string[]
  companions: readonly string[]
  dependencies: readonly string[]
  versions: readonly string[]
  fullPath: string
  aliases: readonly string[]
}

async function importPantry(packagesDir?: string): Promise<Record<string, PkgxPackage>> {
  try {
    // Use the generated index file to get the correct alias mapping
    const targetPackagesDir = packagesDir || path.join(process.cwd(), 'src', 'packages')
    const indexPath = path.join(targetPackagesDir, 'index.ts')

    if (fs.existsSync(indexPath)) {
      console.log('Using generated index file for package mapping...')

      // Import the generated pantry object
      const indexModule = await import(path.resolve(indexPath))
      const pantry = indexModule.pantry || indexModule.packages

      if (pantry) {
        console.log(`Successfully loaded ${Object.keys(pantry).length} packages from index`)
        return pantry
      }
    }

    // Fallback to direct file reading if index doesn't exist
    console.log('Index file not found, falling back to direct file reading...')
    const pantryData: Record<string, PkgxPackage> = {}

    // Check if packages directory exists
    if (!fs.existsSync(targetPackagesDir)) {
      console.log(`Packages directory does not exist: ${targetPackagesDir}`)
      return pantryData
    }

    // Get all package files recursively
    let packageFiles: string[] = []
    try {
      function scanForPackageFiles(dir: string, basePath = ''): string[] {
        const files: string[] = []
        const entries = fs.readdirSync(dir, { withFileTypes: true })

        for (const entry of entries) {
          if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'aliases.ts') {
            files.push(path.join(dir, entry.name))
          }
          else if (entry.isDirectory() && !entry.name.startsWith('.')) {
            const subDirPath = path.join(dir, entry.name)
            const subBasePath = basePath ? `${basePath}/${entry.name}` : entry.name
            files.push(...scanForPackageFiles(subDirPath, subBasePath))
          }
        }

        return files
      }

      packageFiles = scanForPackageFiles(targetPackagesDir)
      console.log(`Found ${packageFiles.length} package files`)
    }
    catch (error) {
      console.error(`Error reading packages directory ${targetPackagesDir}:`, error)
      packageFiles = []
    }

    console.log(`Reading package data from ${packageFiles.length} files...`)

    // Read each package file and extract the package data
    for (const file of packageFiles) {
      try {
        // If file is already an absolute path, use it directly; otherwise join with targetPackagesDir
        const filePath = path.isAbsolute(file) ? file : path.join(targetPackagesDir, file)
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
        console.error(`Error processing file ${file}:`, error)
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
    const description = extractString('description') || `A package from ${domain}`
    const packageYmlUrl = extractString('packageYmlUrl') || ''
    const homepageUrl = extractString('homepageUrl') || ''
    const githubUrl = extractString('githubUrl') || ''
    const installCommand = extractString('installCommand') || ''
    const pkgxInstallCommand = extractString('pkgxInstallCommand') || `sh <(curl https://pkgx.sh) +${domain} -- $SHELL -i`
    const launchpadInstallCommand = extractString('launchpadInstallCommand') || `launchpad install ${domain}`
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
      pkgxInstallCommand,
      launchpadInstallCommand,
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
  const wellKnownShortAliases = ['go', 'js', 'py', 'rb', 'sh', 'vi', 'cc', 'gc', 'jq', 'awk', 'sed', 'mc']
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

  // Don't create aliases that contain template variables
  if (alias.includes('{{') || alias.includes('}}')) {
    return false
  }

  // Don't create aliases that are clearly template fragments or incomplete
  if (alias.includes('version.major') || alias.includes('version.minor') || alias.includes('version')) {
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
export function toSafeVarName(moduleName: string): string {
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
function getActualExportNames(moduleName: string, packagesDir?: string, fullFilePath?: string): { packageVarName: string, typeName: string } {
  try {
    const targetPackagesDir = packagesDir || PACKAGES_DIR
    // Use the full file path if provided (for nested files), otherwise construct the path
    const filePath = fullFilePath || path.join(targetPackagesDir, `${moduleName}.ts`)
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
    console.warn(`Could not read package file ${fullFilePath || `${moduleName}.ts`}, using fallback naming:`, error)
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
export function toTypeName(moduleName: string, packagesDir?: string): string {
  const { typeName } = getActualExportNames(moduleName, packagesDir)
  return typeName
}

/**
 * Convert a filename to the expected package variable name in the file
 * @param moduleName The module filename without extension
 * @param packagesDir The packages directory to read from
 * @returns The expected package variable name
 */
export function toPackageVarName(moduleName: string, packagesDir?: string): string {
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
    console.log(`DEBUG generateIndex START: packagesDir=${packagesDir}`)
    console.log(`DEBUG generateIndex START: process.cwd()=${process.cwd()}`)

    // Use provided packages directory or default
    const targetPackagesDir = packagesDir || PACKAGES_DIR
    const targetIndexFile = path.resolve(targetPackagesDir, 'index.ts')

    // Debug logging for GitHub Actions
    console.log(`DEBUG generateIndex: packagesDir=${packagesDir}`)
    console.log(`DEBUG generateIndex: PACKAGES_DIR=${PACKAGES_DIR}`)
    console.log(`DEBUG generateIndex: targetPackagesDir=${targetPackagesDir}`)
    console.log(`DEBUG generateIndex: targetIndexFile=${targetIndexFile}`)
    console.log(`DEBUG generateIndex: path.isAbsolute(targetIndexFile)=${path.isAbsolute(targetIndexFile)}`)

    // Ensure the target directory exists
    if (!fs.existsSync(targetPackagesDir)) {
      console.log(`Creating packages directory: ${targetPackagesDir}`)
      fs.mkdirSync(targetPackagesDir, { recursive: true })
    }

    // Check if packages directory exists after creation
    if (!fs.existsSync(targetPackagesDir)) {
      console.error(`Failed to create packages directory: ${targetPackagesDir}`)
      return null
    }

    // Get all package files recursively
    let packageFiles: string[] = []
    try {
      function scanForPackageFiles(dir: string, basePath = ''): string[] {
        const files: string[] = []
        const entries = fs.readdirSync(dir, { withFileTypes: true })

        for (const entry of entries) {
          if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'aliases.ts') {
            files.push(path.join(dir, entry.name))
          }
          else if (entry.isDirectory() && !entry.name.startsWith('.')) {
            const subDirPath = path.join(dir, entry.name)
            const subBasePath = basePath ? `${basePath}/${entry.name}` : entry.name
            files.push(...scanForPackageFiles(subDirPath, subBasePath))
          }
        }

        return files
      }

      packageFiles = scanForPackageFiles(targetPackagesDir)
      console.log(`Found ${packageFiles.length} package files`)
    }
    catch (error) {
      console.error(`Error reading packages directory ${targetPackagesDir}:`, error)
      packageFiles = []
    }

    // Create basic index file
    let content = `// Auto-generated package index
// Do not edit this file directly

export interface Pantry {
}

export type Packages = Pantry

export const pantry: Pantry = {
}

export const packages: Packages = pantry
`

    // If we have package files, generate the proper complete index
    if (packageFiles.length > 0) {
      console.log(`Processing ${packageFiles.length} package files...`)

      // Use the same logic as the real implementation
      // const pantry = await importPantry(targetPackagesDir) // Not needed for simple index generation

      // Generate imports
      let imports = '// Auto-generated package index\n// Do not edit this file directly\n\n'
      let interfaceDecl = 'export interface Pantry {\n'
      let pantryDecl = 'export const pantry: Pantry = {\n'
      const usedPropertyNames = new Set<string>()
      const usedImportNames = new Set<string>()

      // Sort package files for consistent output
      const sortedFiles = packageFiles.sort()

      for (const file of sortedFiles) {
        try {
          const moduleName = path.basename(file, '.ts')
          const safeVarName = toSafeVarName(moduleName)

          // Get the relative path from packages directory for import
          const relativeFilePath = path.relative(targetPackagesDir, file).replace(/\.ts$/, '')
          const importPath = relativeFilePath.replace(/\\/g, '/') // Normalize for cross-platform

          // Get the actual export names from the package file
          const { packageVarName } = getActualExportNames(moduleName, targetPackagesDir, file)

          // Create a unique import alias to avoid naming collisions
          let importAlias = packageVarName
          let counter = 1
          while (usedImportNames.has(importAlias)) {
            importAlias = `${packageVarName}${counter}`
            counter++
          }
          usedImportNames.add(importAlias)

          // Import the specific package export with unique alias if needed
          if (importAlias === packageVarName) {
            imports += `import { ${packageVarName} } from './${importPath}'\n`
          }
          else {
            imports += `import { ${packageVarName} as ${importAlias} } from './${importPath}'\n`
          }

          // Use the unique import alias in the interface and object declarations

          // Create unique property names to avoid collisions
          let propertyName = safeVarName
          let propCounter = 1
          while (usedPropertyNames.has(propertyName)) {
            propertyName = `${safeVarName}${propCounter}`
            propCounter++
          }
          usedPropertyNames.add(propertyName)

          // Quote property names that start with numbers or contain special chars
          const quotedPropertyName = /^\d/.test(propertyName) || !/^[a-z_$][\w$]*$/i.test(propertyName)
            ? `'${propertyName}'`
            : propertyName

          interfaceDecl += `  ${quotedPropertyName}: typeof ${importAlias}\n`
          pantryDecl += `  ${quotedPropertyName}: ${importAlias},\n`

          // Add domain-based property names for specific packages
          // Read the file to extract the actual domain
          const content = fs.readFileSync(file, 'utf-8')
          const domainMatch = content.match(/domain:\s*['"]([^'"]*)['"]\s*as const/)
          const domain = domainMatch ? domainMatch[1] : ''

          // Add domain-based property for ALL packages (convert domain to valid property name)
          if (domain) {
            const baseDomainPropertyName = domain.replace(/[^a-z0-9]/gi, '_')
            // Only add if it's different from the existing property name
            if (baseDomainPropertyName !== propertyName) {
              // Create unique domain property name to avoid collisions
              let domainPropertyName = baseDomainPropertyName
              let domainCounter = 1
              while (usedPropertyNames.has(domainPropertyName)) {
                domainPropertyName = `${baseDomainPropertyName}${domainCounter}`
                domainCounter++
              }
              usedPropertyNames.add(domainPropertyName)

              // Quote domain property names that start with numbers or contain special chars
              const quotedDomainPropertyName = /^\d/.test(domainPropertyName) || !/^[a-z_$][\w$]*$/i.test(domainPropertyName)
                ? `'${domainPropertyName}'`
                : domainPropertyName

              interfaceDecl += `  ${quotedDomainPropertyName}: typeof ${importAlias}\n`
              pantryDecl += `  ${quotedDomainPropertyName}: ${importAlias},\n`
            }
          }
        }
        catch (error) {
          console.error(`Error processing file ${file}:`, error)
        }
      }

      // Add alias properties by reading from aliases.ts and extracting from package files
      const allAliases = await extractAllAliases(targetPackagesDir)

      // Create a mapping from domain to import alias for quick lookup
      const domainToImportAlias = new Map<string, string>()

      // Re-scan files to build domain mapping
      for (const file of sortedFiles) {
        try {
          const content = fs.readFileSync(file, 'utf-8')
          const domainMatch = content.match(/domain:\s*['"]([^'"]*)['"]\s*as const/)
          const domain = domainMatch ? domainMatch[1] : ''

          if (domain) {
            const moduleName = path.basename(file, '.ts')
            const { packageVarName } = getActualExportNames(moduleName, targetPackagesDir, file)

            // Find the import alias used for this package
            let importAlias = packageVarName
            let counter = 1
            while (usedImportNames.has(importAlias) && importAlias !== packageVarName) {
              importAlias = `${packageVarName}${counter}`
              counter++
            }

            domainToImportAlias.set(domain, importAlias)
          }
        }
        catch (error) {
          console.error(`Error processing file for alias mapping ${file}:`, error)
        }
      }

      // Add alias properties (allow overriding existing properties)
      for (const [alias, targetDomain] of Object.entries(allAliases)) {
        const importAlias = domainToImportAlias.get(targetDomain)

        if (importAlias) {
          // Quote property names that start with numbers or contain special chars
          const quotedAlias = /^\d/.test(alias) || !/^[a-z_$][\w$]*$/i.test(alias)
            ? `'${alias}'`
            : alias

          // If alias already exists, we need to override it
          if (usedPropertyNames.has(alias)) {
            // Remove the existing property from interface and pantry declarations
            // Use more robust regex patterns that match the entire line
            const escapedAlias = quotedAlias.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            const interfaceLineRegex = new RegExp(`^\\s*${escapedAlias}:\\s*typeof\\s+\\w+\\s*$`, 'gm')
            const pantryLineRegex = new RegExp(`^\\s*${escapedAlias}:\\s*\\w+,\\s*$`, 'gm')

            interfaceDecl = interfaceDecl.replace(interfaceLineRegex, '')
            pantryDecl = pantryDecl.replace(pantryLineRegex, '')
          }

          interfaceDecl += `  ${quotedAlias}: typeof ${importAlias}\n`
          pantryDecl += `  ${quotedAlias}: ${importAlias},\n`
          usedPropertyNames.add(alias)
        }
      }

      interfaceDecl += '}\n\n'
      pantryDecl += '}\n\n'

      const packagesType = 'export type Packages = Pantry\n\n'
      const packagesConst = 'export const packages: Packages = pantry\n\n'

      content = `${imports}\n${interfaceDecl}${packagesType}${pantryDecl}${packagesConst}export * from './aliases'\n`
    }

    // Write to the index file
    try {
      fs.writeFileSync(targetIndexFile, content)
      console.log(`Successfully generated ${targetIndexFile}`)
    }
    catch (error) {
      console.error(`Error writing index file ${targetIndexFile}:`, error)
      return null
    }

    // Verify the file was created
    if (!fs.existsSync(targetIndexFile)) {
      console.error(`Index file was not created: ${targetIndexFile}`)
      return null
    }

    // Debug logging for return value
    console.log(`DEBUG generateIndex: returning ${targetIndexFile}`)
    console.log(`DEBUG generateIndex: return value isAbsolute=${path.isAbsolute(targetIndexFile)}`)
    console.log(`DEBUG generateIndex: return value type=${typeof targetIndexFile}`)

    return targetIndexFile
  }
  catch (error) {
    console.error('Error generating index file:', error)
    return null
  }
}

/**
 * Extracts aliases from all package files
 * @param packagesDir Optional packages directory path (for testing)
 * @returns A map of alias to domain name
 */
async function extractAllAliases(packagesDir?: string): Promise<Record<string, string>> {
  const allAliases: Record<string, string> = {}

  // Don't import PACKAGE_ALIASES to avoid circular dependency
  // Aliases will be generated purely from package files
  console.log(`Generating aliases from package files (avoiding circular dependency)`)

  // Use provided packages directory or default to current working directory
  const targetPackagesDir = packagesDir || path.join(process.cwd(), 'src', 'packages')

  // Check if packages directory exists
  if (!fs.existsSync(targetPackagesDir)) {
    console.log(`Packages directory does not exist: ${targetPackagesDir}`)
    return allAliases
  }

  // Get all TypeScript files in the packages directory recursively
  function scanForPackageFiles(dir: string, basePath = ''): string[] {
    const files: string[] = []
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.ts') && entry.name !== 'index.ts' && entry.name !== 'aliases.ts') {
        files.push(path.join(dir, entry.name))
      }
      else if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const subDirPath = path.join(dir, entry.name)
        const subBasePath = basePath ? `${basePath}/${entry.name}` : entry.name
        files.push(...scanForPackageFiles(subDirPath, subBasePath))
      }
    }

    return files
  }

  const files = scanForPackageFiles(targetPackagesDir)

  console.log(`Found ${files.length} package files`)

  // Process each file to extract aliases
  for (const file of files) {
    try {
      const filePath = file // file is already the full path
      const content = fs.readFileSync(filePath, 'utf-8')

      const moduleName = path.basename(file, '.ts')
      // Extract actual domain from the file content instead of guessing from filename
      const domainMatch = content.match(/domain:\s*['"]([^'"]*)['"]\s*as const/)
      const domain = domainMatch ? domainMatch[1] : guessOriginalDomain(moduleName)

      // Extract package name from the file content
      const nameMatch = content.match(/name:\s*['"]([^'"]*)['"]\s*as const/)
      const packageName = nameMatch ? nameMatch[1] : ''

      // If package name differs from domain and is a valid alias, add it automatically
      if (packageName && packageName !== domain && isValidAlias(packageName, domain)) {
        if (!allAliases[packageName]) {
          allAliases[packageName] = domain
          console.log(`Auto-generated alias: ${packageName} -> ${domain}`)
        }
        else {
          console.log(`Skipped auto-generated alias ${packageName} -> ${domain} (already exists as ${allAliases[packageName]})`)
        }
      }

      // Extract aliases array from the file content
      const aliasesMatch = content.match(/aliases:\s*\[([\s\S]*?)\]/)
      if (aliasesMatch && aliasesMatch[1]) {
        const aliases = aliasesMatch[1].match(/["']([^"']*)["']/g)
        if (aliases) {
          // Add each alias to the map - for explicit aliases, be more permissive
          for (const alias of aliases) {
            const cleanAlias = alias.replace(/["']/g, '')

            // For explicit aliases, only filter out shell commands and obvious invalid cases
            const isExplicitlyInvalid = (
              !cleanAlias
              // Filter out shell command patterns (install scripts)
              || cleanAlias.includes('--')
              || cleanAlias.includes('$SHELL')
              || cleanAlias.includes('curl')
              || cleanAlias.includes('sh <(')
              || cleanAlias.includes(' -- ')
              || cleanAlias.includes(' -i')
              || (cleanAlias.includes('+') && cleanAlias.includes(' '))
              // Filter out template variables
              || cleanAlias.includes('{{')
              || cleanAlias.includes('}}')
              || cleanAlias.includes('version.major')
              || cleanAlias.includes('version.minor')
              // Filter out if it's just the domain
              || cleanAlias === domain
            )

            if (!isExplicitlyInvalid) {
              // Don't override predefined aliases from PACKAGE_ALIASES
              if (!allAliases[cleanAlias]) {
                allAliases[cleanAlias] = domain
                console.log(`Found explicit alias ${cleanAlias} -> ${domain}`)
              }
              else {
                console.log(`Skipped explicit alias ${cleanAlias} -> ${domain} (already exists as ${allAliases[cleanAlias]})`)
              }
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

  // Add alias overrides from the configuration - these take precedence over auto-generated aliases
  const aliasOverrides = getAllAliasOverrides()
  for (const [alias, domain] of Object.entries(aliasOverrides)) {
    if (!allAliases[alias]) {
      allAliases[alias] = domain
      console.log(`Added alias override: ${alias} -> ${domain}`)
    }
    else {
      // Force override existing aliases with the configured overrides
      const previousDomain = allAliases[alias]
      allAliases[alias] = domain
      console.log(`Overrode alias ${alias}: ${previousDomain} -> ${domain}`)
    }
  }

  return allAliases
}

/**
 * Generates the aliases.ts file
 * @param packagesDir Optional packages directory path (for testing)
 * @returns Path to the generated file
 */
export async function generateAliases(packagesDir?: string): Promise<string> {
  try {
    console.log(`DEBUG generateAliases START: packagesDir=${packagesDir}`)
    console.log(`DEBUG generateAliases START: process.cwd()=${process.cwd()}`)

    // Extract all aliases
    const aliases = await extractAllAliases(packagesDir)

    // Use provided packages directory or default - always resolve to absolute path
    const targetPackagesDir = packagesDir ? path.resolve(packagesDir) : path.resolve(process.cwd(), 'src', 'packages')
    const aliasesFile = path.resolve(targetPackagesDir, 'aliases.ts')

    console.log(`DEBUG generateAliases: targetPackagesDir=${targetPackagesDir}`)
    console.log(`DEBUG generateAliases: aliasesFile=${aliasesFile}`)
    console.log(`DEBUG generateAliases: path.isAbsolute(aliasesFile)=${path.isAbsolute(aliasesFile)}`)

    // Ensure the directory exists before writing the file
    const aliasesDir = path.dirname(aliasesFile)
    if (!fs.existsSync(aliasesDir)) {
      fs.mkdirSync(aliasesDir, { recursive: true })
    }

    // Include all aliases in the generated file (no duplicate removal here - that happens in constants file)
    const filteredAliases: Record<string, string> = aliases

    // Generate the file content
    let content = '/**\n * Auto-generated aliases for pkgx packages\n */\n\n'
    content += 'export const aliases: Record<string, string> = {\n'

    // Sort aliases alphabetically
    const sortedAliases = Object.entries(filteredAliases).sort((a, b) => a[0].localeCompare(b[0]))

    // Add each alias entry
    for (const [alias, domain] of sortedAliases) {
      content += `  '${alias}': '${domain}',\n`
    }

    content += '}\n'

    // Write the file
    fs.writeFileSync(aliasesFile, content)
    console.log(`Successfully generated ${aliasesFile} with ${sortedAliases.length} aliases`)

    console.log(`DEBUG generateAliases: returning ${aliasesFile}`)
    console.log(`DEBUG generateAliases: return value isAbsolute=${path.isAbsolute(aliasesFile)}`)
    console.log(`DEBUG generateAliases: return value type=${typeof aliasesFile}`)

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
  const validSingleWordDomains = ['go', 'rust', 'zig', 'nim', 'dart', 'julia', 'scala', 'kotlin', 'swift', 'node', 'bun']
  if (!domain.includes('.') && !validSingleWordDomains.includes(domain.toLowerCase())) {
    return false
  }

  // Domain should not be empty or just whitespace
  if (!domain || domain.trim().length === 0) {
    return false
  }

  // Domain should not contain invalid characters for a domain name (allow underscores in paths)
  if (!/^[\w.\-/]+$/.test(domain)) {
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
 * Generate the appropriate install command for a package
 */
function generateInstallCommand(pkg: PkgxPackage): string {
  // Helper function to resolve template variables with actual version values
  const resolveTemplateVars = (text: string) => {
    if (!pkg.versions || pkg.versions.length === 0) {
      // No version data available, escape template variables to prevent Vue errors
      return text.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')
    }

    const latestVersion = pkg.versions[0]
    const versionParts = latestVersion.split('.')
    const major = versionParts[0] || ''
    const minor = versionParts[1] || ''
    const patch = versionParts[2] || ''

    // Create marketing version (major.minor, e.g., "2.1" from "2.1.0")
    const marketing = minor ? `${major}.${minor}` : major

    return text
      .replace(/\{\{\s*version\.marketing\s*\}\}/g, marketing)
      .replace(/\{\{\s*version\.major\s*\}\}/g, major)
      .replace(/\{\{\s*version\.minor\s*\}\}/g, minor)
      .replace(/\{\{\s*version\.patch\s*\}\}/g, patch)
      .replace(/\{\{\s*version\.raw\s*\}\}/g, latestVersion)
      .replace(/\{\{\s*version\s*\}\}/g, latestVersion)
      // Escape any remaining incomplete template variables to prevent Vue errors
      .replace(/\{\{(?![^}]*\}\})/g, '&lbrace;&lbrace;')
  }

  // If there's a launchpadInstallCommand, use it but normalize the package name
  if (pkg.launchpadInstallCommand) {
    // Check if the command contains uppercase letters that should be lowercase
    const match = pkg.launchpadInstallCommand.match(/launchpad install (.+)/)
    if (match) {
      const packageName = match[1]
      // If the package has aliases, prefer the shortest one (usually the most common name)
      if (pkg.aliases && pkg.aliases.length > 0) {
        const sortedAliases = [...pkg.aliases].sort((a, b) => a.length - b.length)
        const resolvedAlias = resolveTemplateVars(sortedAliases[0])
        return `launchpad install ${resolvedAlias}`
      }
      // If the package name is the same as an alias but with different case, use lowercase
      if (pkg.aliases && pkg.aliases.some(alias => alias.toLowerCase() === packageName.toLowerCase())) {
        const resolvedName = resolveTemplateVars(packageName.toLowerCase())
        return `launchpad install ${resolvedName}`
      }
      // Otherwise use the command as-is but resolve template variables
      return resolveTemplateVars(pkg.launchpadInstallCommand)
    }
  }

  // If there's an installCommand, use it but resolve template variables
  if (pkg.installCommand) {
    return resolveTemplateVars(pkg.installCommand)
  }

  // Generate install command using the best available name
  let installName = pkg.domain

  // If the package has aliases, prefer the shortest one (usually the most common name)
  if (pkg.aliases && pkg.aliases.length > 0) {
    const sortedAliases = [...pkg.aliases].sort((a, b) => a.length - b.length)
    installName = sortedAliases[0]
  }

  // Resolve template variables with actual values
  installName = resolveTemplateVars(installName)

  return `launchpad install ${installName}`
}

/**
 * Generate package catalog with proper categorization
 */
async function generatePackageCatalog(outputDir: string, packagesDir?: string): Promise<string> {
  const pantry = await importPantry(packagesDir)
  const categories = getCategoryMapping()
  const catalogPath = path.resolve(outputDir, 'package-catalog.md')

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

  // Track processed domains to avoid duplicates
  const processedDomains = new Set<string>()

  // Create a domain-to-package mapping to avoid duplicates
  const domainToPackage = new Map<string, PkgxPackage>()
  for (const [_key, pkg] of Object.entries(validPantry)) {
    const domain = pkg.domain
    if (!processedDomains.has(domain)) {
      domainToPackage.set(domain, pkg)
      processedDomains.add(domain)
    }
  }

  // Track categorized packages
  const categorizedDomains = new Set<string>()
  Object.values(categories).forEach((domains) => {
    domains.forEach(domain => categorizedDomains.add(domain))
  })

  // Add uncategorized packages to Utilities (only valid unique domains)
  const uncategorizedPackages: string[] = []
  domainToPackage.forEach((pkg, domain) => {
    if (!categorizedDomains.has(domain)) {
      uncategorizedPackages.push(domain)
    }
  })

  if (uncategorizedPackages.length > 0) {
    categories['Other Utilities'] = uncategorizedPackages
  }

  let content = `# Package Catalog

This comprehensive catalog lists all ${domainToPackage.size}+ packages available in ts-pkgx, organized by category.

Each package can be accessed using \`getPackage(name)\` or directly via \`pantry.domain\`.

## Quick Stats

- **Total Packages**: ${domainToPackage.size}
- **Categories**: ${Object.keys(categories).length}
- **Last Updated**: ${new Date().toISOString()}

## Table of Contents

`

  // Generate table of contents
  Object.keys(categories).forEach((category) => {
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    const count = categories[category].filter(domain => domainToPackage.has(domain)).length
    content += `- [${category}](#${slug}) (${count} packages)\n`
  })

  content += '\n'

  // Generate sections for each category
  for (const [categoryName, domainVarNames] of Object.entries(categories)) {
    // Convert domain variable names back to actual domains and get valid packages
    const packagesMap = new Map<string, { domainVarName: string, pkg: PkgxPackage }>()

    // First pass: collect all packages and deduplicate by domain
    domainVarNames.forEach((domainVarName) => {
      const pkg = pantry[domainVarName]
      if (pkg && !shouldExcludePackage(pkg)) {
        const domain = pkg.domain || pkg.fullPath || 'unknown'
        // Only keep the first occurrence of each domain (prefer shorter variable names)
        if (!packagesMap.has(domain) || domainVarName.length < packagesMap.get(domain)!.domainVarName.length) {
          packagesMap.set(domain, { domainVarName, pkg })
        }
      }
    })

    // Convert to array and sort
    const validPackages = Array.from(packagesMap.values())
      .sort((a, b) => (a.pkg.domain || a.domainVarName).localeCompare(b.pkg.domain || b.domainVarName))

    if (validPackages.length === 0)
      continue

    content += `## ${categoryName}\n\n`
    content += `*${validPackages.length} packages in this category*\n\n`
    content += '| Package | Description | Programs | Versions | Install |\n'
    content += '|---------|-------------|----------|----------|----------|\n'

    for (const { pkg } of validPackages) {
      try {
        const domain = pkg.domain || pkg.fullPath || 'unknown'

        // Format aliases and escape template variables for VitePress
        const aliases = pkg.aliases ? ` (${pkg.aliases.map(a => a.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')).join(', ')})` : ''

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

        // Escape special characters for markdown table and Vue template syntax
        let description = pkg.description
          .replace(/\s+/g, ' ') // Replace multiple whitespace/newlines with single space
          .replace(/\{\{/g, '&lbrace;&lbrace;')
          .replace(/\}\}/g, '&rbrace;&rbrace;') // Template variables (complete and incomplete)
          .replace(/'/g, '&#39;') // Single quotes
          .replace(/"/g, '&quot;') // Double quotes
          .replace(/</g, '&lt;') // Less than
          .replace(/>/g, '&gt;') // Greater than
          .replace(/\|/g, '\\|') // Pipe characters for markdown

        // Limit description length for table readability
        if (description.length > 100) {
          description = `${description.substring(0, 97)}...`
        }

        // Create install command using the best available name
        let installName = pkg.name || domain
        if (pkg.aliases && pkg.aliases.length > 0) {
          const sortedAliases = [...pkg.aliases].sort((a, b) => a.length - b.length)
          installName = sortedAliases[0]
        }
        // Escape template variables for VitePress using v-pre (including incomplete ones)
        installName = installName.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')
        const installCmd = `\`pkgx ${installName}\``

        // Create safe filename for package link in catalog (must match generatePackagePages logic)
        // Find the domain variable name by converting domain back to var name
        const domainVarName = convertDomainToVarName(domain)
        let safeCatalogFilename = domainVarName.toLowerCase()
        if (/^\d/.test(safeCatalogFilename)) {
          safeCatalogFilename = `pkg-${safeCatalogFilename}`
        }
        safeCatalogFilename = safeCatalogFilename.replace(/[^\w-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '')

        content += `| **[${domain}](./packages/${safeCatalogFilename}.md)**${aliases} | ${description} | ${programs} | ${versionInfo} | ${installCmd} |\n`
          .replace(/\r?\n/g, ' ') // Ensure entire table row is on one line
          .replace(/\s+/g, ' ') // Collapse multiple spaces
      }
      catch (error) {
        const domain = pkg.domain || pkg.fullPath || 'unknown'
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
console.log(\`Package: \$\{nodePackage.name\} - \$\{nodePackage.description\}\`)
console.log(\`Install: \$\{nodePackage.installCommand\}\`)
console.log(\`Programs: \$\{nodePackage.programs.join(', ')\}\`)
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
console.log(\`Node.js versions: \$\{nodeVersions.slice(0, 5).join(', ')\}...\`)

// Check dependencies
const nodeDeps = pantry.nodejsorg.dependencies
console.log(\`Node.js dependencies: \$\{nodeDeps.join(', ')\}\`)
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

  await fs.promises.writeFile(catalogPath, content)
  return catalogPath
}

/**
 * Generate individual package documentation pages
 */
async function generatePackagePages(outputDir: string, sourcePackagesDir?: string): Promise<string[]> {
  const pantry = await importPantry(sourcePackagesDir)
  const packagesDir = path.join(outputDir, 'packages')

  // Ensure packages directory exists
  if (!fs.existsSync(packagesDir)) {
    fs.mkdirSync(packagesDir, { recursive: true })
  }

  const generatedFiles: string[] = []

  // Track processed domains to avoid duplicates
  const processedDomains = new Set<string>()

  for (const [domainVarName, pkg] of Object.entries(pantry)) {
    // Skip packages with placeholder data
    if (shouldExcludePackage(pkg)) {
      console.log(`Skipping package page for ${pkg.domain || domainVarName} (placeholder data)`)
      continue
    }

    // Skip if we've already processed this domain (prevents duplicates from aliases)
    if (processedDomains.has(pkg.domain)) {
      continue
    }
    processedDomains.add(pkg.domain)

    try {
      // Use domain variable name as filename (no alias-based naming to avoid duplicates)
      // Ensure consistent lowercase naming
      let safeFilename = domainVarName.toLowerCase()

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

      // Resolve template variables with actual version values, fallback to escaping if resolution fails
      const resolveTemplateVars = (text: string) => {
        if (!pkg.versions || pkg.versions.length === 0) {
          // No version data available, escape template variables to prevent Vue errors
          return text.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')
        }

        const latestVersion = pkg.versions[0]
        const versionParts = latestVersion.split('.')
        const major = versionParts[0] || ''
        const minor = versionParts[1] || ''
        const patch = versionParts[2] || ''

        // Create marketing version (major.minor, e.g., "2.1" from "2.1.0")
        const marketing = minor ? `${major}.${minor}` : major

        return text
          .replace(/\{\{\s*version\.marketing\s*\}\}/g, marketing)
          .replace(/\{\{\s*version\.major\s*\}\}/g, major)
          .replace(/\{\{\s*version\.minor\s*\}\}/g, minor)
          .replace(/\{\{\s*version\.patch\s*\}\}/g, patch)
          .replace(/\{\{\s*version\.raw\s*\}\}/g, latestVersion)
          .replace(/\{\{\s*version\s*\}\}/g, latestVersion)
          // Escape any remaining incomplete template variables to prevent Vue errors
          .replace(/\{\{(?![^}]*\}\})/g, '&lbrace;&lbrace;')
      }

      const resolvedName = resolveTemplateVars(pkg.name || domain)
      const resolvedDescription = resolveTemplateVars(description)
        .replace(/\s+/g, ' ') // Replace multiple whitespace/newlines with single space

      let content = `# ${resolvedName}

>${resolvedDescription ? ` ${resolvedDescription}` : ''}

## Package Information

- **Domain**: \`${domain}\`
- **Name**: \`${resolvedName}\`
- **Homepage**: ${pkg.homepageUrl || 'Not specified'}
- **Source**: [View on GitHub](${pkg.packageYmlUrl || `https://github.com/pkgxdev/pantry/tree/main/projects/${domain}/package.yml`})

## Installation

\`\`\`bash
# Install with launchpad
${generateInstallCommand(pkg)}
\`\`\`

## Programs

This package provides the following executable programs:

`

      if (pkg.programs && pkg.programs.length > 0) {
        pkg.programs.forEach((program: string) => {
          // Resolve template variables with actual version values
          const resolvedProgram = resolveTemplateVars(program)
          content += `- \`${resolvedProgram}\`\n`
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
          // Resolve template variables with actual version values
          const resolvedAlias = resolveTemplateVars(alias)
          content += `- \`${resolvedAlias}\`\n`
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
${pkg.pkgxInstallCommand ? resolveTemplateVars(pkg.pkgxInstallCommand.replace(`+${domain}`, `+${domain}@${pkg.versions[0]}`)) : `sh <(curl https://pkgx.sh) +${domain}@${pkg.versions[0]} -- $SHELL -i`}
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

      await fs.promises.writeFile(filepath, content)
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
async function generateCategoryPages(outputDir: string, packagesDir?: string): Promise<string[]> {
  const pantry = await importPantry(packagesDir)
  const categories = getCategoryMapping()
  const categoriesDir = path.join(outputDir, 'categories')

  // Ensure categories directory exists
  if (!fs.existsSync(categoriesDir)) {
    fs.mkdirSync(categoriesDir, { recursive: true })
  }

  const generatedFiles: string[] = []

  for (const [categoryName, domainVarNames] of Object.entries(categories)) {
    // Convert domain variable names back to actual domains and get valid packages
    const packagesMap = new Map<string, { domainVarName: string, pkg: PkgxPackage }>()

    // First pass: collect all packages and deduplicate by domain
    domainVarNames.forEach((domainVarName) => {
      const pkg = pantry[domainVarName]
      if (pkg && !shouldExcludePackage(pkg)) {
        const domain = pkg.domain || pkg.fullPath || 'unknown'
        // Only keep the first occurrence of each domain (prefer domain-based variable names over aliases)
        if (!packagesMap.has(domain) || domainVarName.length > packagesMap.get(domain)!.domainVarName.length) {
          packagesMap.set(domain, { domainVarName, pkg })
        }
      }
    })

    // Convert to array and sort
    const validPackages = Array.from(packagesMap.values())
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

      // Helper function to resolve template variables with actual version values
      const resolveTemplateVars = (text: string) => {
        if (!pkg.versions || pkg.versions.length === 0) {
          // No version data available, escape template variables to prevent Vue errors
          return text.replace(/\{\{/g, '&lbrace;&lbrace;').replace(/\}\}/g, '&rbrace;&rbrace;')
        }

        const latestVersion = pkg.versions[0]
        const versionParts = latestVersion.split('.')
        const major = versionParts[0] || ''
        const minor = versionParts[1] || ''
        const patch = versionParts[2] || ''

        // Create marketing version (major.minor, e.g., "2.1" from "2.1.0")
        const marketing = minor ? `${major}.${minor}` : major

        return text
          .replace(/\{\{\s*version\.marketing\s*\}\}/g, marketing)
          .replace(/\{\{\s*version\.major\s*\}\}/g, major)
          .replace(/\{\{\s*version\.minor\s*\}\}/g, minor)
          .replace(/\{\{\s*version\.patch\s*\}\}/g, patch)
          .replace(/\{\{\s*version\.raw\s*\}\}/g, latestVersion)
          .replace(/\{\{\s*version\s*\}\}/g, latestVersion)
          // Escape any remaining incomplete template variables to prevent Vue errors
          .replace(/\{\{(?![^}]*\}\})/g, '&lbrace;&lbrace;')
      }

      // Build the display text with package name and aliases
      const displayItems = []
      if (pkg.name && pkg.name !== domain) {
        displayItems.push(pkg.name)
      }
      if (pkg.aliases && pkg.aliases.length > 0) {
        displayItems.push(...pkg.aliases)
      }
      const nameAndAliases = displayItems.length > 0 ? ` (${displayItems.join(', ')})` : ''

      const description = pkg.description || ''

      // Resolve template variables with actual version values
      const resolvedDescription = resolveTemplateVars(description)
        .replace(/\s+/g, ' ') // Replace multiple whitespace/newlines with single space

      // Create safe filename for package link
      let safePackageFilename = domainVarName.toLowerCase()
      if (/^\d/.test(safePackageFilename)) {
        safePackageFilename = `pkg-${safePackageFilename}`
      }
      safePackageFilename = safePackageFilename.replace(/[^\w-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '')

      content += `### [${domain}](../packages/${safePackageFilename}.md)${nameAndAliases}
${resolvedDescription
  ? `
${resolvedDescription}
`
  : ''}
**Programs**: ${pkg.programs && pkg.programs.length > 0 ? pkg.programs.map((p: string) => resolveTemplateVars(p)).join(', ') : 'None specified'}

**Install**: \`${generateInstallCommand(pkg)}\`

---

`
    })

    content += `[← Back to Package Catalog](../package-catalog.md)
`

    await fs.promises.writeFile(filepath, content)
    generatedFiles.push(filepath)
  }

  return generatedFiles
}

/**
 * Main documentation generation function
 */
export async function generateDocs(outputDir: string = DEFAULT_DOCS_DIR, packagesDir?: string): Promise<void> {
  console.log('🚀 Generating comprehensive package documentation...')

  try {
    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    // Generate main catalog
    console.log('📚 Generating package catalog...')
    const catalogPath = await generatePackageCatalog(outputDir, packagesDir)
    console.log(`✅ Generated: ${catalogPath}`)

    // Generate individual package pages
    console.log('📄 Generating individual package pages...')
    const packagePages = await generatePackagePages(outputDir, packagesDir)
    console.log(`✅ Generated ${packagePages.length} package pages`)

    // Generate category pages
    console.log('📂 Generating category pages...')
    const categoryPages = await generateCategoryPages(outputDir, packagesDir)
    console.log(`✅ Generated ${categoryPages.length} category pages`)

    console.log(`\n🎉 Documentation generation complete!`)
    console.log(`📍 Output directory: ${outputDir}`)
    console.log(`📊 Total files generated: ${1 + packagePages.length + categoryPages.length}`)
    console.log(`\nFiles generated:`)
    console.log(`- Package catalog: ${catalogPath}`)
    console.log(`- Package pages: ${packagePages.length} files in docs/packages/`)
    console.log(`- Category pages: ${categoryPages.length} files in docs/categories/`)
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
