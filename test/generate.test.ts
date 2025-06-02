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
      const fileName = domain.replace(/\./g, '').replace(/\//g, '-')
      const filePath = path.join(tempPackagesDir, `${fileName}.ts`)

      // Create a simple mock TypeScript file
      const content = `
/**
 * ${pkg.description}
 */

export const ${fileName.replace(/-/g, '')}Package = {
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

export type ${fileName.replace(/-/g, '').charAt(0).toUpperCase()}${fileName.replace(/-/g, '').slice(1)}Package = typeof ${fileName.replace(/-/g, '')}Package
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

  describe('generateIndex', () => {
    test('should generate index.ts file', async () => {
      // Mock the current working directory to point to our temp dir
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)

        expect(indexPath).toBeDefined()
        expect(indexPath).toContain('index.ts')

        // Add a small delay in CI environments to ensure file system consistency
        if (process.env.CI) {
          await new Promise(resolve => setTimeout(resolve, 10))
        }

        expect(fs.existsSync(indexPath!)).toBe(true)

        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Should contain imports
        expect(content).toContain('import * as')
        expect(content).toContain('from \'./nodejs')
        expect(content).toContain('from \'./python')

        // Should contain interface definition
        expect(content).toContain('export interface Pantry')

        // Should contain pantry object
        expect(content).toContain('export const pantry: Pantry')

        // Should contain package exports
        expect(content).toContain('export const packages: Packages')

        // Should contain aliases export
        expect(content).toContain('export * from \'./aliases\'')
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should handle empty packages directory', async () => {
      // Create empty packages directory
      const emptyPackagesDir = path.join(tempDir, 'empty-packages')
      fs.mkdirSync(emptyPackagesDir, { recursive: true })

      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        // Mock the packages directory to be empty
        fs.rmSync(tempPackagesDir, { recursive: true, force: true })
        fs.mkdirSync(tempPackagesDir, { recursive: true })

        const indexPath = await generateIndex(tempPackagesDir)

        expect(indexPath).toBeDefined()
        expect(fs.existsSync(indexPath!)).toBe(true)

        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Should still have basic structure
        expect(content).toContain('export interface Pantry')
        expect(content).toContain('export const pantry: Pantry')
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should generate proper TypeScript syntax', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)
        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Should have proper TypeScript syntax
        expect(content).toContain('export interface')
        expect(content).toContain('export const')
        expect(content).toContain('export type')

        // Should use single quotes consistently
        expect(content).toMatch(/'[^']*':/g) // Property names in single quotes

        // Should have proper JSDoc comments
        expect(content).toContain('/**')
        expect(content).toContain('*/')
        expect(content).toContain('@domain')

        // Should not have syntax errors (basic check)
        expect(content).not.toContain('undefined,') // No undefined values in object literals
        expect(content).not.toContain('null,') // No null values in object literals
        expect(content).not.toContain(': undefined') // No undefined property values
        expect(content).not.toContain('undefined}') // No undefined at end of objects

        // The literal string "undefined" should not appear as it's not a valid package domain
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should handle nested package paths', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)
        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Should handle nested paths like agwa.name/git-crypt
        expect(content).toContain('agwanamegitcrypt')
        expect(content).toContain('git-crypt')
      }
      finally {
        process.chdir(originalCwd)
      }
    })
  })

  describe('generateAliases', () => {
    test('should generate aliases.ts file', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const aliasesPath = await generateAliases(tempPackagesDir)

        expect(aliasesPath).toBeDefined()
        expect(aliasesPath).toContain('aliases.ts')

        // Add a small delay in CI environments to ensure file system consistency
        if (process.env.CI) {
          await new Promise(resolve => setTimeout(resolve, 10))
        }

        expect(fs.existsSync(aliasesPath)).toBe(true)

        const content = fs.readFileSync(aliasesPath, 'utf-8')

        // Should contain aliases export
        expect(content).toContain('export const aliases: Record<string, string>')

        // Should contain alias mappings
        expect(content).toContain('node')
        expect(content).toContain('python')
        expect(content).toContain('git-crypt')

        // Should use single quotes
        expect(content).toMatch(/'[^']*': '[^']*'/g)
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should handle packages without aliases', async () => {
      // Create a package without aliases
      // Use 'noaliascom.ts' filename so guessOriginalDomain converts it back to 'noalias.com'
      const noAliasPackage = path.join(tempPackagesDir, 'noaliascom.ts')
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

      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const aliasesPath = await generateAliases(tempPackagesDir)
        const aliasContent = fs.readFileSync(aliasesPath, 'utf-8')

        // Should still generate file
        expect(aliasContent).toContain('export const aliases')

        // Should NOT contain domain self-reference (not a real alias)
        expect(aliasContent).not.toContain('noalias.com')
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should sort aliases alphabetically', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const aliasesPath = await generateAliases(tempPackagesDir)
        const content = fs.readFileSync(aliasesPath, 'utf-8')

        // Extract alias keys
        const aliasMatches = content.match(/'([^']+)':/g)
        if (aliasMatches) {
          const aliases = aliasMatches.map(match => match.slice(1, -2)) // Remove quotes and colon
          const sortedAliases = [...aliases].sort()

          // Should be sorted
          expect(aliases).toEqual(sortedAliases)
        }
      }
      finally {
        process.chdir(originalCwd)
      }
    })
  })

  describe('generateDocs', () => {
    test('should generate documentation files', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
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
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should generate individual package pages', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
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
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should generate category pages', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
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
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should handle custom output directory', async () => {
      const customDocsDir = path.join(tempDir, 'custom-docs')

      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        await generateDocs(customDocsDir, tempPackagesDir)

        expect(fs.existsSync(customDocsDir)).toBe(true)
        expect(fs.existsSync(path.join(customDocsDir, 'package-catalog.md'))).toBe(true)
        expect(fs.existsSync(path.join(customDocsDir, 'packages'))).toBe(true)
        expect(fs.existsSync(path.join(customDocsDir, 'categories'))).toBe(true)
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should generate valid markdown syntax', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
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
      }
      finally {
        process.chdir(originalCwd)
      }
    })
  })

  describe('Error Handling', () => {
    test('should handle missing packages directory gracefully', async () => {
      const originalCwd = process.cwd()
      const emptyTempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ts-pkgx-empty-'))

      try {
        process.chdir(emptyTempDir)

        // Should not throw even if packages directory doesn't exist
        await expect(generateIndex(path.join(emptyTempDir, 'src', 'packages'))).resolves.toBeDefined()
        await expect(generateAliases(path.join(emptyTempDir, 'src', 'packages'))).resolves.toBeDefined()
      }
      finally {
        process.chdir(originalCwd)
        fs.rmSync(emptyTempDir, { recursive: true, force: true })
      }
    })

    test('should handle invalid package files gracefully', async () => {
      // Create an invalid package file
      const invalidFile = path.join(tempPackagesDir, 'invalid.ts')
      fs.writeFileSync(invalidFile, 'invalid typescript content')

      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        // Should not throw even with invalid files
        await expect(generateIndex(tempPackagesDir)).resolves.toBeDefined()
        await expect(generateAliases(tempPackagesDir)).resolves.toBeDefined()
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should handle permission errors gracefully', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        // Try to generate docs to a read-only directory (if possible)
        const readOnlyDir = path.join(tempDir, 'readonly')
        fs.mkdirSync(readOnlyDir)

        // This might not work on all systems, but shouldn't crash
        await expect(generateDocs(readOnlyDir, tempPackagesDir)).resolves.toBeUndefined()
      }
      finally {
        process.chdir(originalCwd)
      }
    })
  })

  describe('Content Validation', () => {
    test('should generate consistent variable names', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)
        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Variable names should be consistent
        const varMatches = content.match(/export const (\w+): Pantry/g)
        const interfaceMatches = content.match(/export interface (\w+)/g)

        expect(varMatches).toBeDefined()
        expect(interfaceMatches).toBeDefined()

        // Should have pantry variable and Pantry interface
        expect(content).toContain('export const pantry: Pantry')
        expect(content).toContain('export interface Pantry')
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should generate proper JSDoc documentation', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)
        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Should have JSDoc comments
        expect(content).toContain('/**')
        expect(content).toContain('*/')
        expect(content).toContain('@domain')
        expect(content).toContain('@programs')
        expect(content).toContain('@version')
        expect(content).toContain('@example')

        // JSDoc should be properly formatted
        expect(content).toMatch(/\s+\*\s+/g) // Proper indentation
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should handle special characters in package data', async () => {
      // Create package with special characters
      const specialFile = path.join(tempPackagesDir, 'specialcom.ts')
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

      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)
        const content = fs.readFileSync(indexPath!, 'utf-8')

        // Should handle special characters without breaking
        expect(content).toContain('specialcom')
        expect(content).not.toContain('undefined')
      }
      finally {
        process.chdir(originalCwd)
      }
    })
  })

  describe('Integration Tests', () => {
    test('should generate all files together successfully', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        // Generate all components
        const indexPath = await generateIndex(tempPackagesDir)
        const aliasesPath = await generateAliases(tempPackagesDir)
        await generateDocs(tempDocsDir, tempPackagesDir)

        // All files should exist
        expect(fs.existsSync(indexPath!)).toBe(true)
        expect(fs.existsSync(aliasesPath)).toBe(true)
        expect(fs.existsSync(path.join(tempDocsDir, 'package-catalog.md'))).toBe(true)

        // Files should reference each other correctly
        const indexContent = fs.readFileSync(indexPath!, 'utf-8')
        expect(indexContent).toContain('export * from \'./aliases\'')

        const aliasesContent = fs.readFileSync(aliasesPath, 'utf-8')
        expect(aliasesContent).toContain('export const aliases')
      }
      finally {
        process.chdir(originalCwd)
      }
    })

    test('should maintain consistency across generated files', async () => {
      const originalCwd = process.cwd()
      process.chdir(tempDir)

      try {
        const indexPath = await generateIndex(tempPackagesDir)
        const aliasesPath = await generateAliases(tempPackagesDir)

        const indexContent = fs.readFileSync(indexPath!, 'utf-8')
        const aliasesContent = fs.readFileSync(aliasesPath, 'utf-8')

        // Both should reference the same packages
        expect(indexContent).toContain('nodejs')
        expect(aliasesContent).toContain('node')

        expect(indexContent).toContain('python')
        expect(aliasesContent).toContain('python')
      }
      finally {
        process.chdir(originalCwd)
      }
    })
  })
})
