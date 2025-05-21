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
 * Generate explicit type definition for a package
 */
async function generateExplicitTypeDefinition(packages: ImportInfo[]): Promise<Record<string, string>> {
  const typeDefinitions: Record<string, string> = {}

  for (const pkg of packages) {
    try {
      const filePath = path.join(PACKAGES_DIR, `${pkg.originalModule}.ts`)
      const fileContent = fs.readFileSync(filePath, 'utf-8')

      // Extract the package definition
      const packageVarName = getPackageExportName(pkg.originalModule)
      const packageMatch = fileContent.match(new RegExp(`export const ${packageVarName}[^{]+{([\\s\\S]+?)\\n\\}`, 'm'))

      if (packageMatch && packageMatch[1]) {
        const packageContent = packageMatch[1].trim()
        const lines = packageContent.split('\n')

        // Process the package content to generate TypeScript interface
        const typeLines: string[] = []
        let isInArray = false
        let currentArrayProp = ''
        let arrayItems: string[] = []

        for (let i = 0; i < lines.length; i++) {
          let line = lines[i].trim()

          // Skip empty lines
          if (!line)
            continue

          // Remove trailing commas and 'as const' annotations
          line = line.replace(/ as const,?$/, '').replace(/,$/, '')

          // Special case for empty arrays: "property": []
          const emptyArrayMatch = line.match(/^"?(\w+)"?: \[\]$/)
          if (emptyArrayMatch) {
            const propName = emptyArrayMatch[1]
            typeLines.push(`${propName}: readonly [];`)
            continue
          }

          // Check if this is the start of an array property
          const arrayStartMatch = line.match(/^"?(\w+)"?: \[$/)
          if (arrayStartMatch) {
            isInArray = true
            // Convert to TypeScript property syntax with readonly
            currentArrayProp = line.replace(/^"?(\w+)"?: \[$/, '$1: readonly [')
            arrayItems = []
            continue
          }

          // Handle array items
          if (isInArray) {
            // Check if this is the end of the array
            if (line === ']') {
              isInArray = false

              // Handle empty arrays - always add readonly
              if (arrayItems.length === 0) {
                typeLines.push(`${currentArrayProp}];`)
              }
              else {
                // Add the array opening with property name
                typeLines.push(`${currentArrayProp}`)

                // Add each array item with proper formatting
                arrayItems.forEach((item, index) => {
                  const itemLine = `  ${item}${index < arrayItems.length - 1 ? ',' : ''}`
                  typeLines.push(itemLine)
                })

                // Close the array with semicolon
                typeLines.push('];')
              }
            }
            else {
              // This is an array item, store it for later formatting
              arrayItems.push(line)
            }
            continue
          }

          // Handle regular properties
          // Convert from "property": value to property: value;
          const propLine = `${line.replace(/^"(\w+)":\s*/, '$1: ').replace(/^(\w+):\s*/, '$1: ')};`
          typeLines.push(propLine)
        }

        // Generate the interface name with proper casing
        const typeName = packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1).replace(/Package$/, 'Package')

        // Create the complete interface definition
        typeDefinitions[pkg.originalModule] = `export interface ${typeName} {\n  ${typeLines.join('\n  ')}\n}`
      }
    }
    catch (error) {
      console.error(`Error processing ${pkg.originalModule}.ts:`, error)
    }
  }

  return typeDefinitions
}

/**
 * Update individual package files with explicit type definitions
 */
async function updatePackageFiles(typeDefinitions: Record<string, string>): Promise<void> {
  for (const [moduleName, typeDefinition] of Object.entries(typeDefinitions)) {
    try {
      const filePath = path.join(PACKAGES_DIR, `${moduleName}.ts`)
      let fileContent = fs.readFileSync(filePath, 'utf-8')

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
async function main() {
  try {
    const imports = await getImports()
    const typeDefinitions = await generateExplicitTypeDefinition(imports)

    // Update individual package files with type definitions
    await updatePackageFiles(typeDefinitions)

    // Generate the index.ts file
    const content = await generateIndexContent()
    fs.writeFileSync(INDEX_FILE, content)

    console.error(`Successfully generated ${INDEX_FILE}`)
  }
  catch (error) {
    console.error('Error generating index file:', error)
    process.exit(1)
  }
}

main()
