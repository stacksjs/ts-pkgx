#!/usr/bin/env bun
/**
 * This script scans the packages directory and fixes any TypeScript files
 * that have invalid variable names with hyphens.
 */
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { convertDomainToVarName } from './domainUtils'

// The packages directory path
const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')

/**
 * Removes hyphens from package variable/interface names
 */
async function fixPackageVariables(): Promise<void> {
  console.error(`Scanning ${PACKAGES_DIR} for files with hyphenated variable names...`)

  // Read all .ts files in the packages directory
  const files = fs.readdirSync(PACKAGES_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts')

  console.error(`Found ${files.length} package files to check`)

  let fixedCount = 0

  for (const file of files) {
    const filePath = path.join(PACKAGES_DIR, file)
    const content = fs.readFileSync(filePath, 'utf-8')

    // Extract the filename without extension
    const filenameWithoutExt = path.basename(file, '.ts')

    // Determine expected var name (without hyphens)
    // This handles the pattern we want to enforce
    const expectedVarName = convertDomainToVarName(filenameWithoutExt.replace(/-/g, '/'))
    const expectedPackageName = `${expectedVarName}Package`

    // Create a pattern to find any variations of the package name with hyphens
    // This is more robust than the previous approach
    const exportConstPattern = /export\s+const\s+([\w-]+)Package/g
    const interfacePattern = /export\s+interface\s+([\w-]+)Package/g

    // Track if changes were made
    let hasChanges = false

    // Find and replace incorrect variable names in export statements
    let newContent = content.replace(exportConstPattern, (match, varName) => {
      if (varName.includes('-') || varName !== expectedVarName) {
        hasChanges = true
        return `export const ${expectedPackageName}`
      }
      return match
    })

    // Find and replace incorrect interface names
    newContent = newContent.replace(interfacePattern, (match, varName) => {
      if (varName.includes('-') || varName !== expectedVarName) {
        hasChanges = true
        return `export interface ${expectedPackageName}`
      }
      return match
    })

    // Correct variable references within the file (in object and interface declarations)
    if (newContent !== content) {
      // Also fix references to the variable inside the file content
      const incorrectVarRefs = /(\b[\w-]+)Package(\W)/g
      newContent = newContent.replace(incorrectVarRefs, (match, varName, ending) => {
        if (varName.includes('-') || varName !== expectedVarName) {
          return `${expectedVarName}Package${ending}`
        }
        return match
      })

      // Write changes to file
      fs.writeFileSync(filePath, newContent)
      console.error(`Fixed variable names in: ${file} -> ${expectedVarName}Package`)
      fixedCount++
    }
  }

  console.error(`\nFixed hyphenated variable names in ${fixedCount} files`)
}

// Call the function directly when run as a script
if (import.meta.url.endsWith('fixPackageVariables.ts')) {
  fixPackageVariables()
    .then(() => console.error('Package variable name fix completed successfully'))
    .catch((error) => {
      console.error('Error fixing package variable names:', error)
      process.exit(1)
    })
}

export { fixPackageVariables }
