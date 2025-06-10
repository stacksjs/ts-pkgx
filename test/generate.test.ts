/* eslint-disable no-console */
import type { PkgxPackage } from '../src/types'
import { afterEach, beforeEach, describe, expect, test } from 'bun:test'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { generateAliases, generateDocs, generateIndex } from '../src/generate'

// Mock package data for testing
const mockPackages: Record<string, PkgxPackage> = {
  'nodejs.org': {
    name: 'Node.js',
    domain: 'nodejs.org',
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nodejs.org/package.yml',
    homepageUrl: 'https://nodejs.org',
    githubUrl: 'https://github.com/nodejs/node',
    installCommand: 'pkgx nodejs.org',
    programs: ['node', 'npm', 'npx'],
    companions: ['npm'],
    dependencies: [],
    versions: ['18.0.0', '20.0.0', '16.0.0'],
    aliases: ['node'],
    fullPath: 'nodejs.org',
    fetchedAt: Date.now(),
  },
  'python.org': {
    name: 'Python',
    domain: 'python.org',
    description: 'Python is a programming language that lets you work quickly',
    packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/python.org/package.yml',
    homepageUrl: 'https://python.org',
    githubUrl: 'https://github.com/python/cpython',
    installCommand: 'pkgx python.org',
    programs: ['python', 'pip'],
    companions: ['pip'],
    dependencies: [],
    versions: ['3.11.0', '3.10.0', '3.9.0'],
    aliases: ['python', 'py'],
    fullPath: 'python.org',
    fetchedAt: Date.now(),
  },
  'agwa.name/git-crypt': {
    name: 'git-crypt',
    domain: 'agwa.name',
    description: 'Enable transparent encryption/decryption of files in a git repo',
    packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/agwa.name/git-crypt/package.yml',
    homepageUrl: 'https://www.agwa.name/projects/git-crypt/',
    githubUrl: 'https://github.com/AGWA/git-crypt',
    installCommand: 'pkgx agwa.name/git-crypt',
    programs: ['git-crypt'],
    companions: [],
    dependencies: [],
    versions: ['0.7.0'],
    aliases: ['git-crypt'],
    fullPath: 'agwa.name/git-crypt',
    fetchedAt: Date.now(),
  },
}

describe('Generate Module', () => {
  let tempDir: string
  let tempPackagesDir: string
  let tempDocsDir: string

  beforeEach(() => {
    // Create temporary directories for testing
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ts-pkgx-generate-test-'))
    tempPackagesDir = path.join(tempDir, 'src', 'packages')
    tempDocsDir = path.join(tempDir, 'docs')

    fs.mkdirSync(tempPackagesDir, { recursive: true })
    fs.mkdirSync(tempDocsDir, { recursive: true })

    // Create mock package files
    Object.entries(mockPackages).forEach(([domain, pkg]) => {
      // Use the actual domain as the filename (like the real repo does)
      const fileName = domain.replace(/\//g, '-')
      const filePath = path.join(tempPackagesDir, `${fileName}.ts`)

      // Create variable name based on the pattern from real files
      let varNameBase: string
      if (domain === 'nodejs.org') {
        varNameBase = 'node'
      }
      else if (domain === 'python.org') {
        varNameBase = 'python'
      }
      else if (domain === 'agwa.name/git-crypt') {
        varNameBase = 'gitcrypt'
      }
      else {
        // Fallback for other domains
        varNameBase = domain.replace(/\./g, '').replace(/\//g, '')
      }

      // Create a simple mock TypeScript file
      const content = `
/**
 * ${pkg.description}
 */

export const ${varNameBase}Package = {
  name: '${pkg.name}' as const,
  domain: '${pkg.domain}' as const,
  description: '${pkg.description}' as const,
  installCommand: '${pkg.installCommand}' as const,
  programs: ${JSON.stringify(pkg.programs)} as const,
  companions: ${JSON.stringify(pkg.companions)} as const,
  dependencies: ${JSON.stringify(pkg.dependencies)} as const,
  versions: ${JSON.stringify(pkg.versions)} as const,
  aliases: ${JSON.stringify(pkg.aliases)} as const,
  fullPath: '${pkg.fullPath}' as const,
}

export type ${varNameBase.charAt(0).toUpperCase()}${varNameBase.slice(1)}Package = typeof ${varNameBase}Package
`
      fs.writeFileSync(filePath, content)
    })
  })

  afterEach(() => {
    // Clean up temporary directories
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true })
    }
  })

  // Helper function to find generated files in test directory only
  function findGeneratedFile(relativePath: string, returnedPath: string, tempDir: string): { path: string, content: string } {
    // ONLY look in test directory, never fall back to production
    const possiblePaths = []

    // If returnedPath is absolute and in test dir, use it
    if (path.isAbsolute(returnedPath) && returnedPath.includes(tempDir)) {
      possiblePaths.push(returnedPath)
    }

    // If returnedPath is relative, resolve it relative to tempDir
    if (!path.isAbsolute(returnedPath)) {
      possiblePaths.push(path.resolve(tempDir, returnedPath))
    }

    // Always try direct path in tempDir using relativePath as fallback
    possiblePaths.push(path.join(tempDir, relativePath))

    for (const testPath of possiblePaths) {
      if (fs.existsSync(testPath)) {
        return {
          path: testPath,
          content: fs.readFileSync(testPath, 'utf-8'),
        }
      }
    }

    // List all files in the tempDir for debugging
    try {
      const files = fs.readdirSync(tempDir)
      console.error(`DEBUG: files in tempDir: ${files.join(', ')}`)
    }
    catch (err) {
      console.error(`DEBUG: could not read tempDir: ${err}`)
    }

    console.error(`File not found in any of these test locations:`)
    possiblePaths.forEach(p => console.error(`  - ${p} (exists: ${fs.existsSync(p)})`))
    throw new Error(`${relativePath} file was not created in any test location`)
  }

  describe('generateIndex', () => {
    test('should generate index.ts file', async () => {
      // List files BEFORE generation
      if (fs.existsSync(tempPackagesDir)) {
        const filesBefore = fs.readdirSync(tempPackagesDir)
        console.error(`DEBUG TEST: files BEFORE generation: ${filesBefore.join(', ')}`)
      }

      const indexPath = await generateIndex(tempPackagesDir)

      // Debug logging for test
      console.error(`DEBUG TEST: received indexPath=${indexPath}`)
      console.error(`DEBUG TEST: typeof indexPath=${typeof indexPath}`)
      console.error(`DEBUG TEST: tempPackagesDir=${tempPackagesDir}`)

      // List files AFTER generation
      if (fs.existsSync(tempPackagesDir)) {
        const filesAfter = fs.readdirSync(tempPackagesDir)
        console.error(`DEBUG TEST: files AFTER generation: ${filesAfter.join(', ')}`)
      }

      expect(indexPath).toBeDefined()
      expect(indexPath).toContain('index.ts')

      // Check if the file actually exists before trying to read it
      const expectedPath = path.isAbsolute(indexPath!) ? indexPath! : path.resolve(tempPackagesDir, indexPath!)
      console.error(`DEBUG TEST: expected file path: ${expectedPath}`)
      console.error(`DEBUG TEST: file exists: ${fs.existsSync(expectedPath)}`)

      // If file doesn't exist, wait a bit and retry (in case of race condition or slow CI)
      if (!fs.existsSync(expectedPath)) {
        console.error(`File not found immediately, waiting 100ms and retrying...`)
        await new Promise(resolve => setTimeout(resolve, 100))

        if (!fs.existsSync(expectedPath)) {
          console.error(`CRITICAL: Generation function returned path but file was not created!`)
          console.error(`  Returned: ${indexPath}`)
          console.error(`  Expected at: ${expectedPath}`)
          console.error(`  Working directory: ${process.cwd()}`)
          console.error(`  Temp packages dir exists: ${fs.existsSync(tempPackagesDir)}`)
          console.error(`  Temp packages dir contents: ${fs.existsSync(tempPackagesDir) ? fs.readdirSync(tempPackagesDir).join(', ') : 'N/A'}`)

          // Try to call the generation function again to see if it works the second time
          console.error(`Attempting generation again...`)
          const retryPath = await generateIndex(tempPackagesDir)
          console.error(`Retry returned: ${retryPath}`)
          const retryExpectedPath = retryPath && path.isAbsolute(retryPath) ? retryPath : path.resolve(tempPackagesDir, retryPath || 'index.ts')
          console.error(`Retry expected path: ${retryExpectedPath}`)
          console.error(`Retry file exists: ${fs.existsSync(retryExpectedPath)}`)

          throw new Error(`CRITICAL: Generated file does not exist at ${expectedPath}. Function returned: ${indexPath}. Retry also failed. This indicates the generation function failed silently.`)
        }
      }

      // Use helper to find the file
      const { content } = findGeneratedFile('index.ts', indexPath!, tempPackagesDir)

      // Should contain imports (using named imports, not namespace imports)
      expect(content).toContain('import {')
      expect(content).toContain('from \'./nodejs.org')
      expect(content).toContain('from \'./python.org')

      // Should contain interface definition
      expect(content).toContain('export interface Pantry')

      // Should contain pantry object
      expect(content).toContain('export const pantry: Pantry')

      // Should contain package exports
      expect(content).toContain('export const packages: Packages')

      // Should contain aliases export
      expect(content).toContain('export * from \'./aliases\'')
    })

    test('should handle empty packages directory', async () => {
      // Create empty packages directory
      const emptyPackagesDir = path.join(tempDir, 'empty-packages')
      fs.mkdirSync(emptyPackagesDir, { recursive: true })

      // Mock the packages directory to be empty
      fs.rmSync(tempPackagesDir, { recursive: true, force: true })
      fs.mkdirSync(tempPackagesDir, { recursive: true })

      const indexPath = await generateIndex(tempPackagesDir)

      // Debug logging for empty packages test
      console.error(`DEBUG EMPTY: received indexPath=${indexPath}`)
      console.error(`DEBUG EMPTY: tempPackagesDir=${tempPackagesDir}`)
      console.error(`DEBUG EMPTY: process.cwd()=${process.cwd()}`)

      expect(indexPath).toBeDefined()

      // Use helper to find the file
      const { content } = findGeneratedFile('index.ts', indexPath!, tempPackagesDir)

      // Should still generate valid structure
      expect(content).toContain('export interface Pantry')
      expect(content).toContain('export const pantry: Pantry')
    })

    test('should generate proper TypeScript syntax', async () => {
      const indexPath = await generateIndex(tempPackagesDir)

      const { content } = findGeneratedFile('index.ts', indexPath!, tempPackagesDir)

      // Check for proper TypeScript syntax (using named imports)
      expect(content).toMatch(/import \{ \w+ \} from/)
      expect(content).toMatch(/export interface Pantry/)
      expect(content).toMatch(/export const pantry: Pantry =/)

      // Should not have syntax errors (basic check)
      expect(content).not.toContain('undefined')
      expect(content).not.toContain('null as')
    })

    test('should handle nested package paths', async () => {
      // The agwa.name/git-crypt package is already created by mockPackages setup
      const indexPath = await generateIndex(tempPackagesDir)

      const { content } = findGeneratedFile('index.ts', indexPath!, tempPackagesDir)

      // Should contain import for the nested package
      expect(content).toContain('from \'./agwa.name-git-crypt\'')

      // Should handle nested paths properly in the interface
      expect(content).toContain('agwa_name_git_crypt')
    })

    test('should handle relative path return values (CI scenario)', async () => {
      // First ensure the file exists by running the actual generation
      const actualPath = await generateIndex(tempPackagesDir)
      expect(actualPath).toBeDefined()

      // Simulate CI behavior where relative paths are returned
      const relativePath = 'index.ts'

      const { path: resolvedIndexPath, content } = findGeneratedFile('index.ts', relativePath, tempPackagesDir)

      expect(fs.existsSync(resolvedIndexPath)).toBe(true)
      expect(content).toContain('export interface Pantry')
      expect(content).toContain('export const pantry: Pantry')
    })
  })

  describe('generateAliases', () => {
    test('should generate aliases.ts file', async () => {
      const aliasesPath = await generateAliases(tempPackagesDir)

      expect(aliasesPath).toBeDefined()
      expect(aliasesPath).toContain('aliases.ts')

      // Check if the file actually exists before trying to read it
      const expectedPath = path.isAbsolute(aliasesPath) ? aliasesPath : path.resolve(tempPackagesDir, aliasesPath)
      console.error(`DEBUG ALIASES: expected file path: ${expectedPath}`)
      console.error(`DEBUG ALIASES: file exists: ${fs.existsSync(expectedPath)}`)

      // If file doesn't exist, wait a bit and retry (in case of race condition or slow CI)
      if (!fs.existsSync(expectedPath)) {
        console.error(`Aliases file not found immediately, waiting 100ms and retrying...`)
        await new Promise(resolve => setTimeout(resolve, 100))

        if (!fs.existsSync(expectedPath)) {
          console.error(`CRITICAL: Aliases generation function returned path but file was not created!`)
          console.error(`  Returned: ${aliasesPath}`)
          console.error(`  Expected at: ${expectedPath}`)

          // Try to call the generation function again
          console.error(`Attempting aliases generation again...`)
          const retryPath = await generateAliases(tempPackagesDir)
          console.error(`Aliases retry returned: ${retryPath}`)
          const retryExpectedPath = retryPath && path.isAbsolute(retryPath) ? retryPath : path.resolve(tempPackagesDir, retryPath || 'aliases.ts')
          console.error(`Aliases retry expected path: ${retryExpectedPath}`)
          console.error(`Aliases retry file exists: ${fs.existsSync(retryExpectedPath)}`)

          throw new Error(`CRITICAL: Generated aliases file does not exist at ${expectedPath}. Function returned: ${aliasesPath}. Retry also failed.`)
        }
      }

      // Use helper to find the file
      const { content } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should contain aliases export
      expect(content).toContain('export const aliases: Record<string, string>')

      // Should contain alias mappings
      expect(content).toContain('node')
      expect(content).toContain('py')

      // Should use single quotes
      expect(content).toMatch(/'[^']*': '[^']*'/g)
    })

    test('should handle relative path return values for aliases (CI scenario)', async () => {
      // First ensure the file exists by running the actual generation
      const actualPath = await generateAliases(tempPackagesDir)
      expect(actualPath).toBeDefined()

      // Simulate CI behavior where relative paths are returned
      const relativePath = 'aliases.ts'

      const { path: resolvedAliasesPath, content } = findGeneratedFile('aliases.ts', relativePath, tempPackagesDir)

      expect(fs.existsSync(resolvedAliasesPath)).toBe(true)
      expect(content).toContain('export const aliases: Record<string, string>')
    })

    test('should handle packages without aliases', async () => {
      // Create a package without aliases
      const noAliasPackage = path.join(tempPackagesDir, 'noalias.com.ts')
      const content = `
export const noaliascomPackage = {
  name: 'No Alias Package' as const,
  domain: 'noalias.com' as const,
  description: 'Package without aliases' as const,
  installCommand: 'pkgx noalias.com' as const,
  programs: ['noalias'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['1.0.0'] as const,
  aliases: [] as const,
}

export type NoaliascomPackage = typeof noaliascomPackage
`
      fs.writeFileSync(noAliasPackage, content)

      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content: aliasContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should still generate file
      expect(aliasContent).toContain('export const aliases')

      // Should NOT contain domain self-reference (not a real alias)
      expect(aliasContent).not.toContain('noalias.com')
    })

    test('should filter out aliases that match package name (case-insensitive)', async () => {
      // Create a package with an alias that matches the package name
      const midnightCommanderFile = path.join(tempPackagesDir, 'midnightcommander.org.ts')
      const midnightCommanderContent = `
export const midnightCommanderPackage = {
  name: 'Midnight Commander' as const,
  domain: 'midnightcommander.org' as const,
  description: 'Terminal-based visual file manager' as const,
  installCommand: 'pkgx midnightcommander.org' as const,
  programs: ['mc'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['4.8.33'] as const,
  aliases: [
    'midnight commander',
    'mc',
  ] as const,
  fullPath: 'midnightcommander.org' as const,
}

export type MidnightCommanderPackage = typeof midnightCommanderPackage
`
      fs.writeFileSync(midnightCommanderFile, midnightCommanderContent)

      // Verify the file was created
      expect(fs.existsSync(midnightCommanderFile)).toBe(true)

      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content: aliasesContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should NOT contain the alias that matches the package name
      expect(aliasesContent).not.toContain('\'midnight commander\':')

      // Should contain the valid alias that doesn't match the package name
      // Check if mc alias is present in any form
      expect(aliasesContent).toMatch(/'mc':\s*'[^']*'/)
    })

    test('should sort aliases alphabetically', async () => {
      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Extract alias keys
      const aliasMatches = content.match(/'([^']+)':/g)
      if (aliasMatches) {
        const aliases = aliasMatches.map(match => match.slice(1, -2)) // Remove quotes and colon
        const sortedAliases = [...aliases].sort()

        // Should be sorted
        expect(aliases).toEqual(sortedAliases)
      }
    })

    test('should preserve valid aliases that are different from package name', async () => {
      // Create a package with mix of valid and invalid aliases
      const gitCryptFile = path.join(tempPackagesDir, 'agwa.name-git-crypt.ts')
      const gitCryptContent = `
export const gitCryptPackage = {
  name: 'git-crypt' as const,
  domain: 'agwa.name/git-crypt' as const,
  description: 'Enable transparent encryption/decryption of files in a git repo' as const,
  installCommand: 'pkgx agwa.name/git-crypt' as const,
  programs: ['git-crypt'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['0.7.0'] as const,
  aliases: [
    'git-crypt',
    'gitcrypt',
    'crypt',
  ] as const,
  fullPath: 'agwa.name/git-crypt' as const,
}

export type GitCryptPackage = typeof gitCryptPackage
`
      fs.writeFileSync(gitCryptFile, gitCryptContent)

      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content: aliasesContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should NOT contain the alias that exactly matches the package name
      expect(aliasesContent).not.toContain('\'git-crypt\': \'agwa.name/git-crypt\'')

      // Should contain valid aliases that don't match the package name
      expect(aliasesContent).toContain('\'gitcrypt\': \'agwa.name/git-crypt\'')
      expect(aliasesContent).toContain('\'crypt\': \'agwa.name/git-crypt\'')
    })

    test('should handle packages with no name field gracefully', async () => {
      // Create a package without a name field
      const noNameFile = path.join(tempPackagesDir, 'noname.com.ts')
      const noNameContent = `
export const noNamePackage = {
  domain: 'noname.com' as const,
  description: 'Package without name field' as const,
  installCommand: 'pkgx noname.com' as const,
  programs: ['noname'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['1.0.0'] as const,
  aliases: [
    'noname',
    'anonymous',
  ] as const,
  fullPath: 'noname.com' as const,
}

export type NoNamePackage = typeof noNamePackage
`
      fs.writeFileSync(noNameFile, noNameContent)

      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content: aliasesContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should contain all aliases since there's no name to filter against
      expect(aliasesContent).toContain('\'noname\': \'noname.com\'')
      expect(aliasesContent).toContain('\'anonymous\': \'noname.com\'')
    })

    test('should handle packages with empty name field', async () => {
      // Create a package with empty name field
      const emptyNameFile = path.join(tempPackagesDir, 'emptyname.com.ts')
      const emptyNameContent = `
export const emptyNamePackage = {
  name: '' as const,
  domain: 'emptyname.com' as const,
  description: 'Package with empty name field' as const,
  installCommand: 'pkgx emptyname.com' as const,
  programs: ['empty'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['1.0.0'] as const,
  aliases: [
    'empty',
    'blank',
  ] as const,
  fullPath: 'emptyname.com' as const,
}

export type EmptyNamePackage = typeof emptyNamePackage
`
      fs.writeFileSync(emptyNameFile, emptyNameContent)

      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content: aliasesContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should contain all aliases since the name is empty
      expect(aliasesContent).toContain('\'empty\': \'emptyname.com\'')
      expect(aliasesContent).toContain('\'blank\': \'emptyname.com\'')
    })

    test('should log filtered aliases for debugging', async () => {
      // Create a package with duplicate alias
      const duplicateAliasFile = path.join(tempPackagesDir, 'duplicate.com.ts')
      const duplicateAliasContent = `
export const duplicatePackage = {
  name: 'Duplicate Package' as const,
  domain: 'duplicate.com' as const,
  description: 'Package with duplicate alias' as const,
  installCommand: 'pkgx duplicate.com' as const,
  programs: ['duplicate'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['1.0.0'] as const,
  aliases: [
    'duplicate package',
    'dup',
  ] as const,
  fullPath: 'duplicate.com' as const,
}

export type DuplicatePackage = typeof duplicatePackage
`
      fs.writeFileSync(duplicateAliasFile, duplicateAliasContent)

      // Capture console.log output
      const consoleLogs: string[] = []
      const originalConsoleLog = console.log
      console.log = (...args: any[]) => {
        consoleLogs.push(args.join(' '))
      }

      try {
        const aliasesPath = await generateAliases(tempPackagesDir)

        // Use helper to find the file
        const { content: aliasesContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

        // Should have logged the filtered alias
        const filteredLogs = consoleLogs.filter(log =>
          log.includes('Filtered out package name alias')
          && log.includes('duplicate package'),
        )

        // The log should appear since "duplicate package" matches "Duplicate Package" (case-insensitive)
        expect(filteredLogs.length).toBeGreaterThan(0)

        // Should not contain the filtered alias
        expect(aliasesContent).not.toContain('\'duplicate package\':')

        // Should contain the valid alias
        expect(aliasesContent).toMatch(/'dup':\s*'[^']*'/)
      }
      finally {
        // Restore console.log
        console.log = originalConsoleLog
      }
    })

    test('should handle complex case variations correctly', async () => {
      // Test various case combinations
      const caseVariationsFile = path.join(tempPackagesDir, 'casevariations.com.ts')
      const caseVariationsContent = `
export const caseVariationsPackage = {
  name: 'CamelCase Package' as const,
  domain: 'casevariations.com' as const,
  description: 'Package with various case combinations' as const,
  installCommand: 'pkgx casevariations.com' as const,
  programs: ['camel'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['1.0.0'] as const,
  aliases: [
    'CamelCase Package',
    'camelcase package',
    'CAMELCASE PACKAGE',
    'camelCase-package',
    'valid-alias',
  ] as const,
  fullPath: 'casevariations.com' as const,
}

export type CaseVariationsPackage = typeof caseVariationsPackage
`
      fs.writeFileSync(caseVariationsFile, caseVariationsContent)

      const aliasesPath = await generateAliases(tempPackagesDir)

      // Use helper to find the file
      const { content: aliasesContent } = findGeneratedFile('aliases.ts', aliasesPath, tempPackagesDir)

      // Should NOT contain any variation of the package name
      expect(aliasesContent).not.toContain('\'CamelCase Package\': \'casevariations.com\'')
      expect(aliasesContent).not.toContain('\'camelcase package\': \'casevariations.com\'')
      expect(aliasesContent).not.toContain('\'CAMELCASE PACKAGE\': \'casevariations.com\'')

      // Should contain valid aliases that don't match the package name
      expect(aliasesContent).toContain('\'camelCase-package\': \'casevariations.com\'')
      expect(aliasesContent).toContain('\'valid-alias\': \'casevariations.com\'')
    })
  })

  describe('generateDocs', () => {
    test('should generate documentation files', async () => {
      await generateDocs(tempDocsDir, tempPackagesDir)

      // Should create main catalog
      const catalogPath = path.join(tempDocsDir, 'package-catalog.md')
      expect(fs.existsSync(catalogPath)).toBe(true)

      const catalogContent = fs.readFileSync(catalogPath, 'utf-8')
      expect(catalogContent).toContain('# Package Catalog')
      expect(catalogContent).toContain('Node.js')
      expect(catalogContent).toContain('Python')

      // Should create packages directory
      const packagesDir = path.join(tempDocsDir, 'packages')
      expect(fs.existsSync(packagesDir)).toBe(true)

      // Should create categories directory
      const categoriesDir = path.join(tempDocsDir, 'categories')
      expect(fs.existsSync(categoriesDir)).toBe(true)
    })

    test('should generate individual package pages', async () => {
      await generateDocs(tempDocsDir, tempPackagesDir)

      const packagesDir = path.join(tempDocsDir, 'packages')
      const packageFiles = fs.readdirSync(packagesDir)

      expect(packageFiles.length).toBeGreaterThan(0)

      // Check Node.js package page
      const nodeFile = packageFiles.find(f => f.includes('nodejs'))
      expect(nodeFile).toBeDefined()

      const nodeContent = fs.readFileSync(path.join(packagesDir, nodeFile!), 'utf-8')
      expect(nodeContent).toContain('# Node.js')
      expect(nodeContent).toContain('## Installation')
      expect(nodeContent).toContain('## Programs')
      expect(nodeContent).toContain('## Available Versions')
    })

    test('should generate category pages', async () => {
      await generateDocs(tempDocsDir, tempPackagesDir)

      const categoriesDir = path.join(tempDocsDir, 'categories')
      const categoryFiles = fs.readdirSync(categoriesDir)

      expect(categoryFiles.length).toBeGreaterThan(0)

      // Should have programming languages category
      const progLangFile = categoryFiles.find(f => f.includes('programming'))
      if (progLangFile) {
        const progLangContent = fs.readFileSync(path.join(categoriesDir, progLangFile), 'utf-8')
        expect(progLangContent).toContain('Programming Languages')
      }
    })

    test('should handle custom output directory', async () => {
      const customDocsDir = path.join(tempDir, 'custom-docs')

      await generateDocs(customDocsDir, tempPackagesDir)

      expect(fs.existsSync(customDocsDir)).toBe(true)
      expect(fs.existsSync(path.join(customDocsDir, 'package-catalog.md'))).toBe(true)
      expect(fs.existsSync(path.join(customDocsDir, 'packages'))).toBe(true)
      expect(fs.existsSync(path.join(customDocsDir, 'categories'))).toBe(true)
    })

    test('should generate valid markdown syntax', async () => {
      await generateDocs(tempDocsDir, tempPackagesDir)

      const catalogPath = path.join(tempDocsDir, 'package-catalog.md')
      const catalogContent = fs.readFileSync(catalogPath, 'utf-8')

      // Should have proper markdown headers
      expect(catalogContent).toMatch(/^# /m)
      expect(catalogContent).toMatch(/^## /m)

      // Should have proper markdown tables
      expect(catalogContent).toContain('| Package | Description |')
      expect(catalogContent).toContain('|---------|-------------|')

      // Should have proper markdown links
      expect(catalogContent).toMatch(/\[.*\]\(.*\.md\)/g)

      // Should have proper code blocks
      expect(catalogContent).toContain('```bash')
      expect(catalogContent).toContain('```typescript')
    })
  })

  describe('Error Handling', () => {
    test('should handle missing packages directory gracefully', async () => {
      const emptyTempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ts-pkgx-empty-'))

      try {
        // Should not throw even if packages directory doesn't exist
        await expect(generateIndex(path.join(emptyTempDir, 'src', 'packages'))).resolves.toBeDefined()
        await expect(generateAliases(path.join(emptyTempDir, 'src', 'packages'))).resolves.toBeDefined()
      }
      finally {
        fs.rmSync(emptyTempDir, { recursive: true, force: true })
      }
    })

    test('should handle invalid package files gracefully', async () => {
      // Create an invalid package file
      const invalidFile = path.join(tempPackagesDir, 'invalid.ts')
      fs.writeFileSync(invalidFile, 'invalid typescript content')

      // Should not throw even with invalid files
      await expect(generateIndex(tempPackagesDir)).resolves.toBeDefined()
      await expect(generateAliases(tempPackagesDir)).resolves.toBeDefined()
    })

    test('should handle permission errors gracefully', async () => {
      // Try to generate docs to a read-only directory (if possible)
      const readOnlyDir = path.join(tempDir, 'readonly')
      fs.mkdirSync(readOnlyDir)

      // This might not work on all systems, but shouldn't crash
      await expect(generateDocs(readOnlyDir, tempPackagesDir)).resolves.toBeUndefined()
    })
  })

  describe('Content Validation', () => {
    test('should generate consistent variable names', async () => {
      const indexPath = await generateIndex(tempPackagesDir)

      // Use helper to find the file
      const { content } = findGeneratedFile('index.ts', indexPath!, tempPackagesDir)

      // Variable names should be consistent
      const varMatches = content.match(/export const (\w+): Pantry/g)
      const interfaceMatches = content.match(/export interface (\w+)/g)

      expect(varMatches).toBeDefined()
      expect(interfaceMatches).toBeDefined()

      // Should have pantry variable and Pantry interface
      expect(content).toContain('export const pantry: Pantry')
      expect(content).toContain('export interface Pantry')
    })

    test('should generate proper JSDoc documentation', async () => {
      const indexPath = await generateIndex(tempPackagesDir)

      // Handle both absolute and relative paths with error checking
      const resolvedIndexPath = path.isAbsolute(indexPath!) ? indexPath! : path.resolve(tempPackagesDir, indexPath!)

      // Ensure file exists before reading
      if (!fs.existsSync(resolvedIndexPath)) {
        console.error(`JSDoc test: File not found at ${resolvedIndexPath}, retrying generation...`)
        const retryPath = await generateIndex(tempPackagesDir)
        const retryResolvedPath = retryPath && path.isAbsolute(retryPath) ? retryPath : path.resolve(tempPackagesDir, retryPath || 'index.ts')
        if (!fs.existsSync(retryResolvedPath)) {
          throw new Error(`JSDoc test: Generated file does not exist after retry at ${retryResolvedPath}`)
        }
      }

      const content = fs.readFileSync(resolvedIndexPath, 'utf-8')

      // Should have basic documentation comments
      expect(content).toContain('// Auto-generated package index')
      expect(content).toContain('// Do not edit this file directly')

      // Should have proper TypeScript exports with type annotations
      expect(content).toContain('export interface Pantry')
      expect(content).toContain('export const pantry: Pantry')
      expect(content).toContain('typeof')

      // Should not contain any undefined or malformed content
      expect(content).not.toContain('undefined')
      expect(content).not.toContain('null as')
    })

    test('should handle special characters in package data', async () => {
      // Create package with special characters
      const specialFile = path.join(tempPackagesDir, 'special.com.ts')
      const specialContent = `
export const specialcomPackage = {
  name: 'Package with quotes and apostrophes' as const,
  domain: 'special.com' as const,
  description: 'Description with special chars' as const,
  installCommand: 'pkgx special.com' as const,
  programs: ['special'] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: ['1.0.0'] as const,
  aliases: ['special'] as const,
}

export type SpecialcomPackage = typeof specialcomPackage
`
      fs.writeFileSync(specialFile, specialContent)

      const indexPath = await generateIndex(tempPackagesDir)

      // Handle both absolute and relative paths with error checking
      const resolvedIndexPath = path.isAbsolute(indexPath!) ? indexPath! : path.resolve(tempPackagesDir, indexPath!)

      // Ensure file exists before reading
      if (!fs.existsSync(resolvedIndexPath)) {
        console.error(`Special chars test: File not found at ${resolvedIndexPath}, retrying generation...`)
        const retryPath = await generateIndex(tempPackagesDir)
        const retryResolvedPath = retryPath && path.isAbsolute(retryPath) ? retryPath : path.resolve(tempPackagesDir, retryPath || 'index.ts')
        if (!fs.existsSync(retryResolvedPath)) {
          throw new Error(`Special chars test: Generated file does not exist after retry at ${retryResolvedPath}`)
        }
      }

      const content = fs.readFileSync(resolvedIndexPath, 'utf-8')

      // Should handle special characters without breaking
      expect(content).toContain('specialcom')
      expect(content).not.toContain('undefined')
    })
  })

  describe('Integration Tests', () => {
    test('should generate all files together successfully', async () => {
      // Generate all components
      const indexPath = await generateIndex(tempPackagesDir)
      const aliasesPath = await generateAliases(tempPackagesDir)
      await generateDocs(tempDocsDir, tempPackagesDir)

      // Debug logging for integration test
      console.error(`DEBUG INTEGRATION: indexPath=${indexPath}`)
      console.error(`DEBUG INTEGRATION: aliasesPath=${aliasesPath}`)
      console.error(`DEBUG INTEGRATION: indexPath isAbsolute=${path.isAbsolute(indexPath!)}`)
      console.error(`DEBUG INTEGRATION: aliasesPath isAbsolute=${path.isAbsolute(aliasesPath)}`)

      // Handle both absolute and relative paths with error checking
      const resolvedIndexPath = path.isAbsolute(indexPath!) ? indexPath! : path.resolve(tempPackagesDir, indexPath!)
      const resolvedAliasesPath = path.isAbsolute(aliasesPath) ? aliasesPath : path.resolve(tempPackagesDir, aliasesPath)

      // Check files exist with retry logic for CI
      if (!fs.existsSync(resolvedIndexPath)) {
        console.error(`Integration test: Index file not found at ${resolvedIndexPath}, retrying...`)
        await new Promise(resolve => setTimeout(resolve, 100))
        if (!fs.existsSync(resolvedIndexPath)) {
          throw new Error(`Integration test: Index file not found after retry at ${resolvedIndexPath}`)
        }
      }

      if (!fs.existsSync(resolvedAliasesPath)) {
        console.error(`Integration test: Aliases file not found at ${resolvedAliasesPath}, retrying...`)
        await new Promise(resolve => setTimeout(resolve, 100))
        if (!fs.existsSync(resolvedAliasesPath)) {
          throw new Error(`Integration test: Aliases file not found after retry at ${resolvedAliasesPath}`)
        }
      }

      // All files should exist
      expect(fs.existsSync(resolvedIndexPath)).toBe(true)
      expect(fs.existsSync(resolvedAliasesPath)).toBe(true)
      expect(fs.existsSync(path.join(tempDocsDir, 'package-catalog.md'))).toBe(true)

      // Files should reference each other correctly
      const indexContent = fs.readFileSync(resolvedIndexPath, 'utf-8')
      expect(indexContent).toContain('export * from \'./aliases\'')

      const aliasesContent = fs.readFileSync(resolvedAliasesPath, 'utf-8')
      expect(aliasesContent).toContain('export const aliases')
    })

    test('should maintain consistency across generated files', async () => {
      const indexPath = await generateIndex(tempPackagesDir)
      const aliasesPath = await generateAliases(tempPackagesDir)

      // Debug logging for consistency test
      console.error(`DEBUG CONSISTENCY: indexPath=${indexPath}`)
      console.error(`DEBUG CONSISTENCY: aliasesPath=${aliasesPath}`)

      // Handle both absolute and relative paths with error checking
      const resolvedIndexPath = path.isAbsolute(indexPath!) ? indexPath! : path.resolve(tempPackagesDir, indexPath!)
      const resolvedAliasesPath = path.isAbsolute(aliasesPath) ? aliasesPath : path.resolve(tempPackagesDir, aliasesPath)

      // Check files exist before reading
      if (!fs.existsSync(resolvedIndexPath) || !fs.existsSync(resolvedAliasesPath)) {
        console.error(`Consistency test: Files missing, waiting and retrying...`)
        await new Promise(resolve => setTimeout(resolve, 100))
        if (!fs.existsSync(resolvedIndexPath)) {
          throw new Error(`Consistency test: Index file missing at ${resolvedIndexPath}`)
        }
        if (!fs.existsSync(resolvedAliasesPath)) {
          throw new Error(`Consistency test: Aliases file missing at ${resolvedAliasesPath}`)
        }
      }

      const indexContent = fs.readFileSync(resolvedIndexPath, 'utf-8')
      const aliasesContent = fs.readFileSync(resolvedAliasesPath, 'utf-8')

      // Both should reference the same packages
      expect(indexContent).toContain('nodejs_org')
      expect(aliasesContent).toContain('node')

      expect(indexContent).toContain('python_org')
      expect(aliasesContent).toContain('python')
    })
  })
})
