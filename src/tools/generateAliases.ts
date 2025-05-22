#!/usr/bin/env bun
/**
 * Script to generate the aliases.ts file for packages directory
 * This will scan all package files and extract aliases to create a lookup map
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { guessOriginalDomain } from './domainUtils'

// The packages directory path
const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')
// The aliases file path
const ALIASES_FILE = path.join(PACKAGES_DIR, 'aliases.ts')

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
      const aliasesMatch = content.match(/aliases:\s*\[([\s\S]*?)\]/m)
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
    } catch (error) {
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
  } catch (error) {
    console.error('Error generating aliases file:', error)
    return ''
  }
}

// Call the function directly when run as a script
if (import.meta.url.endsWith('generateAliases.ts')) {
  generateAliases()
}