/* eslint-disable no-console */

/**
 * Script to generate the index.ts file for packages directory
 * This will scan the packages directory and automatically create imports and exports
 * for all package files found.
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { convertDomainToVarName, guessOriginalDomain } from './utils'

// The packages directory path
const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')
// The index file path
const INDEX_FILE = path.join(PACKAGES_DIR, 'index.ts')
// The aliases file path
const ALIASES_FILE = path.join(PACKAGES_DIR, 'aliases.ts')

// Files to exclude from the index
const EXCLUDED_FILES = ['index.ts', 'aliases.ts']

// Special module names that need custom handling
const SPECIAL_MODULES: Record<string, string> = {
  undefined: 'undefinedpkg', // Rename to avoid conflict with JavaScript undefined
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
 * Convert a filename to the expected type name in the file
 * @param moduleName The module filename without extension
 * @returns The expected type name
 */
function toTypeName(moduleName: string): string {
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
 * Convert a filename to the expected package variable name in the file
 * @param moduleName The module filename without extension
 * @returns The expected package variable name
 */
function toPackageVarName(moduleName: string): string {
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
 * Generate the index.ts file for the packages directory
 * @returns The path to the generated index file
 */
export async function generateIndex(): Promise<string | null> {
  try {
    // Get all TS files in the packages directory
    const files = await fs.promises.readdir(PACKAGES_DIR)
    const packageFiles = files.filter(file =>
      file.endsWith('.ts')
      && !EXCLUDED_FILES.includes(file),
    )

    // Custom sort function that handles paths with hyphens correctly
    // Ensures base paths like './viaduct.ai' come before extended paths like './viaduct.ai-ksops'
    packageFiles.sort((a, b) => {
      const aName = path.basename(a, '.ts')
      const bName = path.basename(b, '.ts')

      // Handle special cases where we need to override normal alphabetical sorting
      const specialCases: Record<string, string[]> = {
        'libssh.org': ['libssh2.org'], // libssh2.org should come before libssh.org
      }

      // Check special case overrides
      for (const [before, afters] of Object.entries(specialCases)) {
        if (aName === before && afters.includes(bName))
          return 1
        if (bName === before && afters.includes(aName))
          return -1
      }

      // Check if one is a sub-path of the other (has a hyphen extension)
      if (bName.startsWith(`${aName}-`))
        return -1
      if (aName.startsWith(`${bName}-`))
        return 1

      // Normal alphabetical sorting
      return aName.localeCompare(bName)
    })

    // Create the imports section
    let imports = ''

    // Create the interface declaration
    let interfaceDecl = 'export interface Pantry {\n'

    // Create the pantry object
    let pantry = 'export const pantry: Pantry = {\n'

    // Process each package file
    for (const file of packageFiles) {
      const moduleName = path.basename(file, '.ts')
      const moduleVarName = toSafeVarName(moduleName)
      const packageVarName = toPackageVarName(moduleName)
      const typeName = toTypeName(moduleName)

      // Domain is used as the key in the types and pantry objects
      const domain = guessOriginalDomain(moduleName)
      const domainVarName = convertDomainToVarName(domain)

      // Add the import
      imports += `import * as ${moduleVarName} from './${moduleName}'\n`

      // Add the interface property
      interfaceDecl += `  ${domainVarName}: ${moduleVarName}.${typeName}\n`

      // Add to pantry
      pantry += `  ${domainVarName}: ${moduleVarName}.${packageVarName},\n`
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
    await fs.promises.writeFile(INDEX_FILE, content)
    console.log(`Successfully generated ${INDEX_FILE}`)

    return INDEX_FILE
  }
  catch (error) {
    console.error('Error generating index file:', error)
    return null
  }
}

// If script is run directly, generate the index
if (require.main === module) {
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
 * @returns A map of alias to domain name
 */
async function extractAllAliases(): Promise<Record<string, string>> {
  const allAliases: Record<string, string> = {}

  // Get all TypeScript files in the packages directory
  const files = fs.readdirSync(PACKAGES_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'aliases.ts')

  console.log(`Found ${files.length} package files`)

  // Process each file to extract aliases
  for (const file of files) {
    try {
      const filePath = path.join(PACKAGES_DIR, file)
      const content = fs.readFileSync(filePath, 'utf-8')

      const moduleName = path.basename(file, '.ts')
      const domain = guessOriginalDomain(moduleName)

      // Extract aliases array from the file content
      const aliasesMatch = content.match(/aliases:\s*\[([\s\S]*?)\]/)
      if (aliasesMatch && aliasesMatch[1]) {
        const aliases = aliasesMatch[1].match(/["']([^"']*)["']/g)
        if (aliases) {
          // Add each alias to the map
          for (const alias of aliases) {
            const cleanAlias = alias.replace(/["']/g, '')
            if (cleanAlias) {
              allAliases[cleanAlias] = domain
              console.log(`Found alias ${cleanAlias} -> ${domain}`)
            }
          }
        }
      }

      // Also add the domain itself as an alias
      allAliases[domain] = domain
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
    fs.writeFileSync(ALIASES_FILE, content)
    console.log(`Successfully generated ${ALIASES_FILE} with ${sortedAliases.length} aliases`)

    return ALIASES_FILE
  }
  catch (error) {
    console.error('Error generating aliases file:', error)
    return ''
  }
}
