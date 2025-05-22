#!/usr/bin/env bun
/**
 * Script to generate the index.ts file for packages directory
 * This will scan the packages directory and automatically create imports and exports
 * for all package files found.
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { convertDomainToVarName, guessOriginalDomain } from './domainUtils'

// The packages directory path
const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')
// The index file path
const INDEX_FILE = path.join(PACKAGES_DIR, 'index.ts')

/**
 * Safely convert a filename to a valid JavaScript identifier
 * @param moduleName The module filename without extension
 * @returns A valid JavaScript identifier
 */
function safeVarName(moduleName: string): string {
  // Replace hyphens with underscores to make valid JS identifiers
  return moduleName.replace(/-/g, '_')
}

/**
 * Generate the exported package name based on the module name
 * @param moduleName The module name (filename without extension)
 * @returns The actual exported package variable name
 */
function getPackageExportName(moduleName: string): string {
  // If the filename has hyphens, they're removed in the actual exported variable name
  // e.g., ast-grepgithubio.ts exports astgrepgithubioPackage
  return `${moduleName.replace(/-/g, '')}Package`
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
 * Generate explicit type definitions for all package files
 */
async function generateExplicitTypeDefinition(packages: ImportInfo[]): Promise<Record<string, string>> {
  const typeDefinitions: Record<string, string> = {}

  for (const pkg of packages) {
    try {
      const filePath = path.join(PACKAGES_DIR, `${pkg.originalModule}.ts`)

      // Skip if file doesn't exist
      if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`)
        continue
      }

      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const packageVarName = getPackageExportName(pkg.originalModule)

      // Extract the package info directly using regex rather than trying to parse JSON
      const packageObj: Record<string, any> = {}

      // Extract name, domain, description and other string properties
      const stringProps = ['name', 'domain', 'description', 'packageYmlUrl', 'homepageUrl', 'githubUrl', 'installCommand']
      for (const prop of stringProps) {
        const regex = new RegExp(`"${prop}"\\s*:\\s*"([^"]+)"`, 's')
        const match = fileContent.match(regex)
        if (match) {
          packageObj[prop] = match[1]
        }
      }

      // Extract array properties (programs, companions, dependencies, versions)
      const arrayProps = ['programs', 'companions', 'dependencies', 'versions']
      for (const prop of arrayProps) {
        const regex = new RegExp(`"${prop}"\\s*:\\s*\\[(\\s*"[^"]*"(?:\\s*,\\s*"[^"]*")*\\s*)\\]`, 's')
        const match = fileContent.match(regex)
        if (match) {
          const itemsStr = match[1].trim()
          if (itemsStr) {
            // Extract individual items within quotes
            const items: string[] = []
            const itemRegex = /"([^"]*)"/g
            let itemMatch
            while ((itemMatch = itemRegex.exec(itemsStr)) !== null) {
              items.push(itemMatch[1])
            }
            packageObj[prop] = items
          } else {
            packageObj[prop] = []
          }
        } else {
          // Fallback to empty array if no match
          packageObj[prop] = []
        }
      }

      // Fallback defaults if extraction failed
      if (!packageObj.name) packageObj.name = guessOriginalDomain(pkg.originalModule)
      if (!packageObj.domain) packageObj.domain = guessOriginalDomain(pkg.originalModule)
      if (!packageObj.description) packageObj.description = `Package information for ${guessOriginalDomain(pkg.originalModule)}`

      // Generate the interface definition
      const typeLines: string[] = []

      for (const key in packageObj) {
        const value = packageObj[key]

        // Skip empty values
        if (!value)
          continue

        // Handle arrays
        if (Array.isArray(value)) {
          if (value.length === 0) {
            // Empty array
            typeLines.push(`${key}: readonly [];`)
          }
          else if (typeof value[0] === 'string') {
            // String array with string literals - properly format with values
            const stringLiterals = value.map(item => JSON.stringify(item)).join(', ')
            typeLines.push(`${key}: readonly [${stringLiterals}];`)
          }
          else {
            // Non-string arrays
            typeLines.push(`${key}: readonly ${JSON.stringify(value)};`)
          }
          continue
        }

        // Handle regular properties
        if (typeof value === 'string') {
          // Use string literals for strings
          typeLines.push(`${key}: ${JSON.stringify(value)};`)
        }
        else {
          // Other types
          typeLines.push(`${key}: ${JSON.stringify(value)};`)
        }
      }

      // Generate the interface name with proper casing
      const typeName = packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1).replace(/Package$/, 'Package')

      // Create the complete interface definition
      typeDefinitions[pkg.originalModule] = `export interface ${typeName} {\n  ${typeLines.join('\n  ')}\n}`
    }
    catch (error) {
      console.error(`Error processing ${pkg.originalModule}.ts:`, error)
    }
  }

  return typeDefinitions
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

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const packageVarName = getPackageExportName(moduleName)

    // Extract the package info directly using regex
    const packageObj: Record<string, any> = {}

    // Extract string properties
    const stringProps = ['name', 'domain', 'description', 'packageYmlUrl', 'homepageUrl', 'githubUrl', 'installCommand']
    for (const prop of stringProps) {
      const regex = new RegExp(`"${prop}"\\s*:\\s*"([^"]+)"`, 's')
      const match = fileContent.match(regex)
      if (match) {
        packageObj[prop] = match[1]
      }
    }

    // Extract array properties
    const arrayProps = ['programs', 'companions', 'dependencies', 'versions']
    for (const prop of arrayProps) {
      const regex = new RegExp(`"${prop}"\\s*:\\s*\\[(\\s*"[^"]*"(?:\\s*,\\s*"[^"]*")*\\s*)\\]`, 's')
      const match = fileContent.match(regex)
      if (match) {
        const itemsStr = match[1].trim()
        if (itemsStr) {
          // Extract individual items within quotes
          const items: string[] = []
          const itemRegex = /"([^"]*)"/g
          let itemMatch
          while ((itemMatch = itemRegex.exec(itemsStr)) !== null) {
            items.push(itemMatch[1])
          }
          packageObj[prop] = items
        } else {
          packageObj[prop] = []
        }
      } else {
        packageObj[prop] = []
      }
    }

    // Fallback defaults if extraction failed
    if (!packageObj.name) packageObj.name = guessOriginalDomain(moduleName)
    if (!packageObj.domain) packageObj.domain = guessOriginalDomain(moduleName)
    if (!packageObj.description) packageObj.description = `Package information for ${guessOriginalDomain(moduleName)}`

    // Generate the interface definition
    const typeLines: string[] = []

    for (const key in packageObj) {
      const value = packageObj[key]

      // Skip empty values
      if (!value)
        continue

      // Handle arrays
      if (Array.isArray(value)) {
        if (value.length === 0) {
          // Empty array
          typeLines.push(`${key}: readonly [];`)
        }
        else if (typeof value[0] === 'string') {
          // String array with string literals - properly format with values
          const stringLiterals = value.map(item => JSON.stringify(item)).join(', ')
          typeLines.push(`${key}: readonly [${stringLiterals}];`)
        }
        else {
          // Non-string arrays
          typeLines.push(`${key}: readonly ${JSON.stringify(value)};`)
        }
        continue
      }

      // Handle regular properties
      if (typeof value === 'string') {
        // Use string literals for strings
        typeLines.push(`${key}: ${JSON.stringify(value)};`)
      }
      else {
        // Other types
        typeLines.push(`${key}: ${JSON.stringify(value)};`)
      }
    }

    // Generate the interface name with proper casing
    const typeName = packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1).replace(/Package$/, 'Package')

    // Create the complete interface definition
    const typeDefinition = `export interface ${typeName} {\n  ${typeLines.join('\n  ')}\n}`

    // Extract the package export part
    const packageExportRegex = new RegExp(`export const ${packageVarName}[^{]+{[\\s\\S]+?\\n\\}`, 'm')
    const packageExportMatch = fileContent.match(packageExportRegex)

    if (packageExportMatch) {
      // Remove any existing type/interface definitions
      let updatedContent = fileContent
      updatedContent = updatedContent.replace(/\n\n\/\/[^\n]*\nexport (type|interface) [A-Za-z0-9]+ \{[\s\S]+?\n\}/, '')
      updatedContent = updatedContent.replace(/\n\nexport (type|interface) [A-Za-z0-9]+ \{[\s\S]+?\n\}/g, '')

      // Add the new type definition after the package export
      const newContent = `${packageExportMatch[0]}\n\n${typeDefinition}`
      updatedContent = updatedContent.replace(packageExportRegex, newContent)

      // Write the updated content back to the file
      fs.writeFileSync(filePath, updatedContent)
      console.error(`Updated ${moduleName}.ts with explicit type definition`)

      // Now generate a minimal index.ts file to ensure things work properly
      await generateMinimalIndex()

      return true
    } else {
      console.error(`Could not find package export in ${moduleName}.ts`)
      return false
    }
  }
  catch (error) {
    console.error(`Error processing ${moduleName}.ts:`, error)
    return false
  }
}

/**
 * Generate a minimal index.ts file without updating all package files
 * This is used when we only want to update a single package interface
 */
async function generateMinimalIndex(): Promise<void> {
  try {
    const imports = await getImports()
    const content = await generateIndexContent()
    fs.writeFileSync(INDEX_FILE, content)
    console.log(`Successfully generated ${INDEX_FILE}`)
  }
  catch (error) {
    console.error('Error generating minimal index file:', error)
  }
}

/**
 * Update individual package files with explicit type definitions
 * @param packageFilter Optional filter to only update specific packages
 */
async function updatePackageFiles(typeDefinitions: Record<string, string>, packageFilter?: string[]): Promise<void> {
  for (const [moduleName, typeDefinition] of Object.entries(typeDefinitions)) {
    // Skip packages not in the filter if a filter is provided
    if (packageFilter && !packageFilter.includes(moduleName)) {
      continue
    }

    try {
      const filePath = path.join(PACKAGES_DIR, `${moduleName}.ts`)
      let fileContent = fs.readFileSync(filePath, 'utf-8')

      // Check if the file already has the right import pattern
      if (!fileContent.includes('import type { PkgxPackage } from \'../types\'')) {
        // Update the import
        fileContent = `import type { PkgxPackage } from '../types'\n\n${
          fileContent.replace(/^import.*from ['"].*['"];?\\n+/, '')}`
      }

      // Extract the package export part
      const packageVarName = getPackageExportName(moduleName)
      const packageExportRegex = new RegExp(`export const ${packageVarName}[^{]+{[\\s\\S]+?\\n\\}`, 'm')
      const packageExportMatch = fileContent.match(packageExportRegex)

      if (packageExportMatch) {
        // Remove any existing type/interface definitions
        fileContent = fileContent.replace(/\n\n\/\/[^\n]*\nexport (type|interface) [A-Za-z0-9]+ \{[\s\S]+?\n\}/, '')
        fileContent = fileContent.replace(/\n\nexport (type|interface) [A-Za-z0-9]+ \{[\s\S]+?\n\}/g, '')

        // Add the new type definition after the package export
        const newContent = `${packageExportMatch[0]}\n\n${typeDefinition}`
        fileContent = fileContent.replace(packageExportRegex, newContent)

        // Write the updated content back to the file
        fs.writeFileSync(filePath, fileContent)
        console.error(`Updated ${moduleName}.ts with explicit type definition`)
      }
    }
    catch (error) {
      console.error(`Error updating ${moduleName}.ts:`, error)
    }
  }
}

/**
 * Generate the index.ts file content
 */
async function generateIndexContent(): Promise<string> {
  const imports = await getImports()

  let content = ''

  // Add import for PkgxPackage type from types.ts
  content += 'import type { PkgxPackage } from \'../types\'\n\n'

  // Generate imports
  for (const imp of imports) {
    content += `import * as ${imp.varName} from '${imp.modulePath}'\n`
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

  // Add properties to the interface
  for (const imp of imports) {
    const domain = guessOriginalDomain(imp.originalModule)
    const propName = convertDomainToVarName(domain)
    content += `  ${propName}: PkgxPackage\n`
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

    // Use the format propName: moduleName.packageVarName
    content += `  ${propName}: ${imp.varName}.${packageVarName},\n`
  }

  content += '}\n'

  return content
}

// Main function
export async function generateIndex(packageFilter?: string[]): Promise<void> {
  try {
    const imports = await getImports()

    // Only get type definitions for filtered packages or all if no filter provided
    const typeDefinitions = await generateExplicitTypeDefinition(
      packageFilter ? imports.filter(imp => packageFilter.includes(imp.originalModule)) : imports
    )

    // Update package files with type definitions, using the filter if provided
    await updatePackageFiles(typeDefinitions, packageFilter)

    // Generate the index.ts file
    const content = await generateIndexContent()
    fs.writeFileSync(INDEX_FILE, content)

    console.log(`Successfully generated ${INDEX_FILE}`)
  }
  catch (error) {
    console.error('Error generating index file:', error)
    process.exit(1)
  }
}

// Call the function directly when run as a script
if (import.meta.url.endsWith('generateIndex.ts')) {
  generateIndex()
}
