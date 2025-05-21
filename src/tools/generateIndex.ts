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
 * Generate the index.ts file for the packages directory
 */
export async function generateIndex(): Promise<void> {
  console.error('Generating src/packages/index.ts...')

  // Get all .ts files in the packages directory
  const files = fs.readdirSync(PACKAGES_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts' && file !== 'fetch.ts')

  console.error(`Found ${files.length} package files`)

  // Generate imports and exports
  const imports: string[] = []
  const exports: string[] = []
  const mappings: string[] = []
  const directDomains: Record<string, string> = {}
  const fullPathMappings: Record<string, string> = {}

  // Add base imports and type import
  imports.push('import type { PkgxPackage } from \'../types\'')

  // Add fetch.ts export
  exports.push('// Export everything from fetch.ts')
  exports.push('export * from \'./fetch\'')
  exports.push('')

  exports.push('// Export specific packages')

  // Add pantry object
  const pantryDefinition = 'export const pantry: Record<string, PkgxPackage> = {}'

  // Add import and export for each package file
  for (const file of files) {
    // Get the module name (file name without extension)
    const moduleName = file.replace(/\.ts$/, '')

    // Generate variable name for package (assuming standard naming convention)
    const packageVarName = `${moduleName}Package`

    // Add import
    imports.push(`import { ${packageVarName} } from './${moduleName}'`)

    // Add export
    exports.push(`export * from './${moduleName}'`)

    try {
      // Try to determine the domain name by looking at the file content
      const fileContent = fs.readFileSync(path.join(PACKAGES_DIR, file), 'utf8')

      // Look for domain property in the package definition
      const domainMatch = fileContent.match(/domain:\s+['"](.*?)['"]/)

      if (domainMatch && domainMatch[1]) {
        const domain = domainMatch[1]
        // Store for mapping
        directDomains[domain] = packageVarName

        // Also check if this is a nested path and extract the full path
        const fullPathMatch = fileContent.match(/fullPath:\s+['"](.*?)['"]/)
        if (fullPathMatch && fullPathMatch[1]) {
          const fullPath = fullPathMatch[1]
          fullPathMappings[fullPath] = packageVarName
        }
      }
      else {
        // If we can't find the domain, use our domain utils to guess the original domain
        console.warn(`Could not determine domain for ${file}, using filename as fallback`)

        // Use the utility to guess the original domain
        const domainGuess = guessOriginalDomain(moduleName)
        // Store for mapping
        directDomains[domainGuess] = packageVarName
      }
    }
    catch (error) {
      console.error(`Error processing file ${file}:`, error)
      // Skip this file for mappings
    }
  }

  // Add mappings in a consistent way
  mappings.push('// Add direct domain mappings')
  Object.entries(directDomains).forEach(([domain, packageVarName]) => {
    mappings.push(`pantry['${domain}'] = ${packageVarName}`)
  })

  if (Object.keys(fullPathMappings).length > 0) {
    mappings.push('')
    mappings.push('// Add full path mappings for nested packages')
    Object.entries(fullPathMappings).forEach(([fullPath, packageVarName]) => {
      // Only add if not already mapped as a direct domain
      if (!directDomains[fullPath]) {
        mappings.push(`pantry['${fullPath}'] = ${packageVarName} // Nested path mapping`)
      }
    })
  }

  // Generate the getPackage function
  const getPackageFunction = `
/**
 * Get a package by name, supporting both full domain and aliases
 */
export function getPackage(name: string): PkgxPackage | undefined {
  // Direct lookup
  if (pantry[name]) {
    return pantry[name]
  }

  // Check aliases - loop through all packages
  for (const pkg of Object.values(pantry)) {
    // Check if this package has the name as an alias
    if (pkg.aliases && pkg.aliases.includes(name)) {
      return pkg
    }
  }

  return undefined
}
`.trim()

  // Combine all parts
  const content = [
    ...imports,
    '',
    pantryDefinition,
    '',
    ...exports,
    '',
    '// Add package mappings to pantry',
    ...mappings,
    '',
    getPackageFunction,
  ].join('\n')

  // Write the file
  fs.writeFileSync(INDEX_FILE, content)

  console.error(`Successfully generated ${INDEX_FILE} with ${files.length} packages`)
}

// Run the generator if this file is executed directly
if (process.argv[1] === import.meta.url.substring(7)) {
  generateIndex().catch((error) => {
    console.error('Error generating index:', error)
    process.exit(1)
  })
}
