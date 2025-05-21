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
