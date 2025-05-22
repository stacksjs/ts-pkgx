import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

const PACKAGES_DIR = path.join(process.cwd(), 'src', 'packages')

async function fixInterfaces() {
  // Get list of all package files
  const files = fs.readdirSync(PACKAGES_DIR)
    .filter(file => file.endsWith('.ts') && file !== 'index.ts')

  console.error(`Found ${files.length} package files to process`)

  let fixedCount = 0

  // Process each file
  for (const file of files) {
    try {
      console.error(`Processing ${file}...`)
      const filePath = path.join(PACKAGES_DIR, file)
      const originalContent = fs.readFileSync(filePath, 'utf-8')

      // Find the export const declaration
      const packageVarMatch = originalContent.match(/export const (\w+)Package\s*:\s*PkgxPackage\s*=\s*(\{[\s\S]+?\n\})/)
      if (!packageVarMatch) {
        console.error(`  Skipping: Could not find package object in ${file}`)
        continue
      }

      const packageVarName = packageVarMatch[1]
      const packageObjText = packageVarMatch[2]

      // Find interface declaration
      const interfaceMatch = originalContent.match(/export interface (\w+)Package\s*\{[\s\S]+?\n\}/)
      if (!interfaceMatch) {
        console.error(`  Skipping: Could not find interface in ${file}`)
        continue
      }

      // Extract field values directly from the package object text
      // Extract string properties
      const extractStringProp = (propName: string): string => {
        const regex = new RegExp(`"${propName}"\\s*:\\s*"([^"]*)"`, 'm')
        const match = packageObjText.match(regex)
        return match ? match[1] : ''
      }

      const name = extractStringProp('name')
      const domain = extractStringProp('domain')
      const description = extractStringProp('description')
      const packageYmlUrl = extractStringProp('packageYmlUrl')
      const homepageUrl = extractStringProp('homepageUrl')
      const githubUrl = extractStringProp('githubUrl')
      const installCommand = extractStringProp('installCommand')

      // Extract array values
      const extractArrayValues = (propName: string): string[] => {
        // First try to find the array in the package object
        const startRegex = new RegExp(`"${propName}"\\s*:\\s*\\[`, 'm')
        const startMatch = packageObjText.match(startRegex)
        if (!startMatch)
          return []

        // Find the starting position of the array
        const startPos = startMatch.index! + startMatch[0].length

        // Find the matching closing bracket
        let bracketCount = 1
        let endPos = startPos
        let inString = false

        for (let i = startPos; i < packageObjText.length; i++) {
          const char = packageObjText[i]

          // Handle strings (skip brackets inside strings)
          if (char === '"' && packageObjText[i - 1] !== '\\') {
            inString = !inString
            continue
          }

          if (!inString) {
            if (char === '[') {
              bracketCount++
            }
            else if (char === ']') {
              bracketCount--
              if (bracketCount === 0) {
                endPos = i
                break
              }
            }
          }
        }

        // Extract the array content
        const arrayContent = packageObjText.substring(startPos, endPos).trim()
        if (!arrayContent)
          return []

        // Parse the array items
        const values: string[] = []
        const itemRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g
        let itemMatch: RegExpExecArray | null
        // eslint-disable-next-line no-cond-assign
        while ((itemMatch = itemRegex.exec(arrayContent)) !== null) {
          values.push(itemMatch[1])
        }

        return values
      }

      const programs = extractArrayValues('programs')
      const companions = extractArrayValues('companions')
      const dependencies = extractArrayValues('dependencies')
      const versions = extractArrayValues('versions')

      // Sort versions using semantic versioning logic
      if (versions.length > 0) {
        try {
          // Sort versions semantically (latest first)
          versions.sort((a, b) => {
            // Simple semantic version comparison
            const aParts = a.split('.').map(Number)
            const bParts = b.split('.').map(Number)

            for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
              const aVal = aParts[i] || 0
              const bVal = bParts[i] || 0
              if (aVal !== bVal) {
                return bVal - aVal // Latest version first
              }
            }
            return 0
          })
        }
        catch (err) {
          console.error(`  Error sorting versions for ${file}:`, err)
        }
      }

      // Format array with proper indentation and line breaks if more than 0 items
      const formatArrayItems = (items: string[]): string => {
        if (items.length === 0)
          return '[]'

        return `[
    ${items.map(item => JSON.stringify(item)).join(',\n    ')}
  ]`
      }

      // Build the new interface
      const newInterface = `export interface ${packageVarName.charAt(0).toUpperCase() + packageVarName.slice(1)}Package {
  name: ${JSON.stringify(name)};
  domain: ${JSON.stringify(domain)};
  description: ${JSON.stringify(description)};
  ${packageYmlUrl ? `packageYmlUrl: ${JSON.stringify(packageYmlUrl)};` : ''}
  ${homepageUrl ? `homepageUrl: ${JSON.stringify(homepageUrl)};` : ''}
  ${githubUrl ? `githubUrl: ${JSON.stringify(githubUrl)};` : ''}
  ${installCommand ? `installCommand: ${JSON.stringify(installCommand)};` : ''}
  programs: readonly ${programs.length > 0
    ? formatArrayItems(programs)
    : '[]'};
  companions: readonly ${companions.length > 0
    ? formatArrayItems(companions)
    : '[]'};
  dependencies: readonly ${dependencies.length > 0
    ? formatArrayItems(dependencies)
    : '[]'};
  versions: readonly ${versions.length > 0
    ? formatArrayItems(versions)
    : '[]'};
}`

      // Replace the interface in the file
      const newContent = originalContent.replace(interfaceMatch[0], newInterface)

      // Only write if there are actual changes
      if (newContent !== originalContent) {
        fs.writeFileSync(filePath, newContent)
        console.error(`  ✅ Fixed interface in ${file}`)
        fixedCount++
      }
      else {
        console.log(`  No changes needed for ${file}`)
      }
    }
    catch (error) {
      console.error(`  Error processing ${file}:`, error)
    }
  }

  console.error(`\nFixed interfaces in ${fixedCount} out of ${files.length} files`)
}

// Run the script
fixInterfaces().catch(console.error)
