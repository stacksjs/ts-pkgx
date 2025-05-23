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

/**
 * Safely convert a filename to a valid JavaScript identifier
 * @param moduleName The module filename without extension
 * @returns A valid JavaScript identifier
 */
function safeVarName(moduleName: string): string {
  // Replace hyphens with underscores and dots with nothing to make valid JS identifiers
  return moduleName.replace(/-/g, '_').replace(/\./g, '')
}

/**
 * Generate the exported package name based on the module name
 * @param moduleName The module name (filename without extension)
 * @returns The actual exported package variable name
 */
function getPackageExportName(moduleName: string): string {
  // Remove dots and hyphens to create a valid JavaScript identifier
  return `${moduleName.replace(/[.-]/g, '')}Package`
}

interface ImportInfo {
  modulePath: string
  varName: string
  originalModule: string
}

/**
 * Get all imports from package directory
 */
async function getImports(): Promise<ImportInfo[]> {
  const allFiles = fs.readdirSync(PACKAGES_DIR)

  const imports: ImportInfo[] = []

  for (const file of allFiles) {
    // Skip index.ts and non-typescript files
    if (file === 'index.ts' || !file.endsWith('.ts'))
      continue

    const moduleName = path.basename(file, '.ts')
    const modulePath = `./${moduleName}`
    const varName = safeVarName(moduleName)

    imports.push({
      modulePath,
      varName,
      originalModule: moduleName,
    })
  }

  // Sort imports alphabetically by module path
  imports.sort((a, b) => a.modulePath.localeCompare(b.modulePath))

  return imports
}

/**
 * Update a single package file with explicit type definition
 * @param moduleName The name of the module (file name without extension)
 * @returns Promise resolving to a boolean indicating success
 */
export async function updateSinglePackageInterface(moduleName: string): Promise<boolean> {
  try {
    // Ensure the file exists
    const filePath = path.join(PACKAGES_DIR, `${moduleName}.ts`)
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      return false
    }

    // First, try to find a corresponding JSON file with the original domain name
    const originalDomain = guessOriginalDomain(moduleName)
    const jsonFilePath = path.join(PACKAGES_DIR, `${originalDomain}.json`)
    let packageObj: Record<string, any> = {}
    let usingJsonSource = false

    if (fs.existsSync(jsonFilePath)) {
      // If we have a JSON file, use that as the source of truth
      try {
        console.log(`Found JSON file for ${moduleName}: ${jsonFilePath}`)
        const jsonContent = fs.readFileSync(jsonFilePath, 'utf-8')
        packageObj = JSON.parse(jsonContent)
        usingJsonSource = true
        console.log(`Using JSON file as source for ${moduleName}`)
      }
      catch {
        console.warn(`Failed to parse JSON file for ${moduleName}, falling back to TS extraction`)
      }
    }
    else {
      console.log(`No JSON file found for ${moduleName} at ${jsonFilePath}`)
    }

    // If we couldn't get data from JSON, extract from the TS file
    if (!usingJsonSource) {
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const _packageVarName = getPackageExportName(moduleName)

      // Extract the package object directly from the file content
      const packageObjMatch = fileContent.match(/export const \w+ = (\{[\s\S]+?\})\n\n/)
      if (!packageObjMatch || !packageObjMatch[1]) {
        console.error(`Could not extract package object from ${moduleName}.ts`)
        return false
      }

      // Extract string properties directly from the file content
      const stringProps = ['name', 'domain', 'description', 'packageYmlUrl', 'homepageUrl', 'githubUrl', 'installCommand']
      for (const prop of stringProps) {
        const regex = new RegExp(`"${prop}":\\s*"([^"]*)"`, 's')
        const match = fileContent.match(regex)
        if (match) {
          packageObj[prop] = match[1]
        }
      }

      // Extract array properties using a more robust approach
      // For programs array
      const programsMatch = fileContent.match(/programs:\s*\[([\s\S]*?)\]/)
      if (programsMatch && programsMatch[1]) {
        const programs = programsMatch[1].match(/"([^"]*)"/g)
        packageObj.programs = programs ? programs.map(p => p.replace(/"/g, '')) : []
      }
      else {
        packageObj.programs = []
      }

      // For companions array
      const companionsMatch = fileContent.match(/companions:\s*\[([\s\S]*?)\]/)
      if (companionsMatch && companionsMatch[1]) {
        const companions = companionsMatch[1].match(/"([^"]*)"/g)
        packageObj.companions = companions ? companions.map(c => c.replace(/"/g, '')) : []
      }
      else {
        packageObj.companions = []
      }

      // For dependencies array
      const dependenciesMatch = fileContent.match(/dependencies:\s*\[([\s\S]*?)\]/)
      if (dependenciesMatch && dependenciesMatch[1]) {
        const dependencies = dependenciesMatch[1].match(/"([^"]*)"/g)
        packageObj.dependencies = dependencies ? dependencies.map(d => d.replace(/"/g, '')) : []
      }
      else {
        packageObj.dependencies = []
      }

      // For versions array
      const versionsMatch = fileContent.match(/versions:\s*\[([\s\S]*?)\]/)
      if (versionsMatch && versionsMatch[1]) {
        const versions = versionsMatch[1].match(/"([^"]*)"/g)
        packageObj.versions = versions ? versions.map(v => v.replace(/"/g, '')) : []
      }
      else {
        packageObj.versions = []
      }

      // Extract fullPath and aliases
      const fullPathMatch = fileContent.match(/fullPath:\s*"([^"]+)"/)
      if (fullPathMatch) {
        packageObj.fullPath = fullPathMatch[1]
      }

      const aliasesMatch = fileContent.match(/aliases:\s*(\[[^\]]*\]|undefined)/)
      if (aliasesMatch) {
        if (aliasesMatch[1] === 'undefined') {
          packageObj.aliases = undefined
        }
        else {
          const aliases = aliasesMatch[1].match(/"([^"]*)"/g)
          packageObj.aliases = aliases ? aliases.map(a => a.replace(/"/g, '')) : []
        }
      }
    }

    // Fallback defaults if extraction failed
    if (!packageObj.name)
      packageObj.name = guessOriginalDomain(moduleName)
    if (!packageObj.domain)
      packageObj.domain = guessOriginalDomain(moduleName)
    if (!packageObj.description)
      packageObj.description = `Package information for ${guessOriginalDomain(moduleName)}`
    if (!packageObj.packageYmlUrl)
      packageObj.packageYmlUrl = `https://github.com/pkgxdev/pantry/tree/main/projects/${packageObj.domain}/package.yml`
    if (!packageObj.homepageUrl)
      packageObj.homepageUrl = ''
    if (!packageObj.githubUrl)
      packageObj.githubUrl = 'https://github.com/pkgxdev/pantry/'
    if (!packageObj.installCommand)
      packageObj.installCommand = `sh <(curl https://pkgx.sh) +${packageObj.domain} -- $SHELL -i`

    const packageVarName = getPackageExportName(moduleName)

    // Format the object with 'as const' assertions
    const formattedObj = formatObjectWithAsConst(packageObj)

    // Generate the type name with proper casing
    const typeName = packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1).replace(/Package$/, 'Package')

    // Create a completely new file with the correct format
    const newFileContent = `/**
 * ${packageVarName} information from pkgx.dev
 * Generated from pkgx.dev data
 */
export const ${packageVarName} = ${formattedObj}

export type ${typeName} = typeof ${packageVarName}
`

    // Write the new content to the file
    fs.writeFileSync(filePath, newFileContent)
    console.log(`Updated ${moduleName}.ts with explicit type definition`)

    return true
  }
  catch (error) {
    console.error(`Error updating interface for ${moduleName}.ts:`, error)
    return false
  }
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

async function generateIndexContent(): Promise<string> {
  const imports = await getImports()

  let content = ''

  // Add import for PkgxPackage type from types.ts - needed only in the index file
  content += 'import type { PkgxPackage } from \'../types\'\n\n'

  // Generate imports
  for (const imp of imports) {
    // Use safeVarName for import identifier to avoid dots and other invalid characters
    const safeImportName = safeVarName(imp.originalModule)
    content += `import * as ${safeImportName} from '${imp.modulePath}'\n`
  }

  content += '\n'

  // Export all imports
  for (const imp of imports) {
    content += `export * from '${imp.modulePath}'\n`
  }

  content += '\n'

  // Generate Pantry interface
  content += '// Define Pantry type\n'
  content += 'export interface Pantry {\n'

  // Add properties to the interface with specific type names
  for (const imp of imports) {
    const domain = guessOriginalDomain(imp.originalModule)
    const propName = convertDomainToVarName(domain)
    const safeImportName = safeVarName(imp.originalModule)
    const packageTypeName = getPackageExportName(imp.originalModule)
      .charAt(0)
      .toUpperCase() + getPackageExportName(imp.originalModule).slice(1)

    // Use specific type like: acornio: acornio.AcornioPackage
    content += `  ${propName}: ${safeImportName}.${packageTypeName}\n`
  }

  content += '}\n\n'

  // Generate pantry object with type annotation
  content += '// Export pantry object with package mappings\n'
  content += 'export const pantry: Pantry = {\n'

  // Sort the pantry entries alphabetically by domain
  for (const imp of imports) {
    const domain = guessOriginalDomain(imp.originalModule)
    const propName = convertDomainToVarName(domain)
    const packageVarName = getPackageExportName(imp.originalModule)
    const safeImportName = safeVarName(imp.originalModule)

    // Use the format propName: moduleName.packageVarName
    content += `  ${propName}: ${safeImportName}.${packageVarName},\n`
  }

  content += '}\n'

  return content
}

export async function generateIndex(_packageFilter?: string[]): Promise<string> {
  try {
    // Generate the index.ts file without modifying package files
    const content = await generateIndexContent()
    fs.writeFileSync(INDEX_FILE, content)

    console.log(`Successfully generated ${INDEX_FILE}`)
    return INDEX_FILE
  }
  catch (error) {
    console.error('Error generating index file:', error)
    return '' // Return empty string on error but don't exit process
  }
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
        const aliases = aliasesMatch[1].match(/"([^"]*)"/g)
        if (aliases) {
          // Add each alias to the map
          for (const alias of aliases) {
            const cleanAlias = alias.replace(/"/g, '')
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
      content += `  "${alias}": "${domain}",\n`
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
