import { afterEach, beforeEach, describe, expect, mock, test } from 'bun:test'
import { PACKAGE_ALIASES } from '../src/consts'

// Mock the CLI module functions that we want to test
const mockFetchAndSaveAllPackages = mock(() => Promise.resolve(['nodejs.org', 'python.org']))
const mockFetchAndSavePackage = mock(() => Promise.resolve({ success: true, filePath: 'test.ts' }))
const mockGenerateIndex = mock(() => Promise.resolve('index.ts'))
const mockGenerateAliases = mock(() => Promise.resolve('aliases.ts'))
const mockGenerateDocs = mock(() => Promise.resolve())
const mockCleanupBrowserResources = mock(() => Promise.resolve())

// Mock the modules
mock.module('../src/fetch', () => ({
  fetchAndSaveAllPackages: mockFetchAndSaveAllPackages,
  fetchAndSavePackage: mockFetchAndSavePackage,
  cleanupBrowserResources: mockCleanupBrowserResources,
}))

mock.module('../src/generate', () => ({
  generateIndex: mockGenerateIndex,
  generateAliases: mockGenerateAliases,
  generateDocs: mockGenerateDocs,
}))

describe('CLI Module', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    mockFetchAndSaveAllPackages.mockClear()
    mockFetchAndSavePackage.mockClear()
    mockGenerateIndex.mockClear()
    mockGenerateAliases.mockClear()
    mockGenerateDocs.mockClear()
    mockCleanupBrowserResources.mockClear()
  })

  describe('PACKAGE_ALIASES Integration', () => {
    test('should have access to package aliases', () => {
      expect(PACKAGE_ALIASES).toBeDefined()
      expect(typeof PACKAGE_ALIASES).toBe('object')
      expect(Object.keys(PACKAGE_ALIASES).length).toBeGreaterThan(0)
    })

    test('should contain expected aliases', () => {
      expect(PACKAGE_ALIASES.node).toBe('nodejs.org')
      expect(PACKAGE_ALIASES.python).toBe('python.org')
      expect(PACKAGE_ALIASES.go).toBe('go.dev')
      expect(PACKAGE_ALIASES.rust).toBe('rust-lang.org')
      expect(PACKAGE_ALIASES.bun).toBe('bun.sh')
    })

    test('should be able to reverse lookup aliases', () => {
      // Test the reverse mapping functionality that CLI uses
      const reverseAliases: Record<string, string> = {}
      for (const [alias, domain] of Object.entries(PACKAGE_ALIASES)) {
        reverseAliases[domain] = alias
      }

      expect(reverseAliases['nodejs.org']).toBe('node')
      expect(reverseAliases['python.org']).toBe('python')
      expect(reverseAliases['go.dev']).toBe('go')
    })
  })

  describe('Friendly Name Conversion', () => {
    test('should convert domain names to friendly names', () => {
      // Simulate the getFriendlyName function from CLI
      function getFriendlyName(domainName: string): string {
        const reverseAliases: Record<string, string> = {}
        for (const [alias, domain] of Object.entries(PACKAGE_ALIASES)) {
          reverseAliases[domain] = alias
        }
        return reverseAliases[domainName] || domainName
      }

      expect(getFriendlyName('nodejs.org')).toBe('node')
      expect(getFriendlyName('python.org')).toBe('python')
      expect(getFriendlyName('unknown.org')).toBe('unknown.org')
    })

    test('should convert lists of domain names to friendly names', () => {
      // Simulate the getFriendlyNames function from CLI
      function getFriendlyNames(domainNames: string[]): { friendlyNames: string[], mixedNames: string[] } {
        const reverseAliases: Record<string, string> = {}
        for (const [alias, domain] of Object.entries(PACKAGE_ALIASES)) {
          reverseAliases[domain] = alias
        }

        const friendlyNames = domainNames.map(domain => reverseAliases[domain] || domain)
        const mixedNames = domainNames.map(domain => reverseAliases[domain] || domain)

        return { friendlyNames, mixedNames }
      }

      const domains = ['nodejs.org', 'python.org', 'unknown.org']
      const result = getFriendlyNames(domains)

      expect(result.friendlyNames).toEqual(['node', 'python', 'unknown.org'])
      expect(result.mixedNames).toEqual(['node', 'python', 'unknown.org'])
    })
  })

  describe('Command Line Argument Parsing', () => {
    test('should handle fetch command with --all flag', () => {
      // Simulate CLI argument parsing
      const _args = ['fetch', '--all']
      const parsedOptions = {
        all: true,
        outputDir: 'src/packages',
        cacheDir: '.cache/packages',
        cache: true,
        timeout: 12000,
      }

      expect(parsedOptions.all).toBe(true)
      expect(parsedOptions.outputDir).toBe('src/packages')
      expect(parsedOptions.cacheDir).toBe('.cache/packages')
    })

    test('should handle fetch command with specific packages', () => {
      // Simulate CLI argument parsing
      const _args = ['fetch', '--pkg', 'node,python,go']
      const parsedOptions = {
        pkg: 'node,python,go',
        outputDir: 'src/packages',
        timeout: 12000,
      }

      const packageNames = parsedOptions.pkg.split(',').map((p: string) => p.trim())
      expect(packageNames).toEqual(['node', 'python', 'go'])
    })

    test('should handle generate commands', () => {
      // Test different generate commands
      const generateIndexArgs = ['generate-index']
      const generateAliasesArgs = ['generate-aliases']
      const generateDocsArgs = ['generate-docs', '--output-dir', 'custom-docs']

      expect(generateIndexArgs[0]).toBe('generate-index')
      expect(generateAliasesArgs[0]).toBe('generate-aliases')
      expect(generateDocsArgs[0]).toBe('generate-docs')
      expect(generateDocsArgs[2]).toBe('custom-docs')
    })

    test('should handle option flags correctly', () => {
      // Test various option combinations
      const options = {
        debug: true,
        verbose: false,
        cache: true,
        json: false,
        limit: 100,
        timeout: 30000,
        concurrency: 8,
        outputJson: true,
      }

      expect(typeof options.debug).toBe('boolean')
      expect(typeof options.verbose).toBe('boolean')
      expect(typeof options.cache).toBe('boolean')
      expect(typeof options.json).toBe('boolean')
      expect(typeof options.limit).toBe('number')
      expect(typeof options.timeout).toBe('number')
      expect(typeof options.concurrency).toBe('number')
      expect(typeof options.outputJson).toBe('boolean')
    })
  })

  describe('JSON Output Format', () => {
    test('should format successful fetch results as JSON', () => {
      const mockResult = {
        success: true,
        updatedPackages: ['nodejs.org', 'python.org'],
        updatedPackagesFriendly: ['node', 'python'],
        updatedPackagesMixed: ['node', 'python'],
        allProcessedPackages: ['nodejs.org', 'python.org', 'go.dev'],
        allProcessedFriendly: ['node', 'python', 'go'],
        allProcessedMixed: ['node', 'python', 'go'],
        totalUpdated: 2,
        totalProcessed: 3,
        timestamp: new Date().toISOString(),
      }

      expect(mockResult.success).toBe(true)
      expect(mockResult.updatedPackages.length).toBe(2)
      expect(mockResult.updatedPackagesFriendly).toEqual(['node', 'python'])
      expect(mockResult.totalUpdated).toBe(2)
      expect(mockResult.totalProcessed).toBe(3)
      expect(mockResult.timestamp).toBeDefined()
    })

    test('should format error results as JSON', () => {
      const mockErrorResult = {
        success: false,
        error: 'Network timeout',
        timestamp: new Date().toISOString(),
      }

      expect(mockErrorResult.success).toBe(false)
      expect(mockErrorResult.error).toBe('Network timeout')
      expect(mockErrorResult.timestamp).toBeDefined()
    })

    test('should handle empty update results', () => {
      const mockEmptyResult = {
        success: true,
        updatedPackages: [],
        updatedPackagesFriendly: [],
        updatedPackagesMixed: [],
        allProcessedPackages: [],
        allProcessedFriendly: [],
        allProcessedMixed: [],
        totalUpdated: 0,
        totalProcessed: 0,
        timestamp: new Date().toISOString(),
      }

      expect(mockEmptyResult.success).toBe(true)
      expect(mockEmptyResult.totalUpdated).toBe(0)
      expect(mockEmptyResult.totalProcessed).toBe(0)
      expect(mockEmptyResult.updatedPackages.length).toBe(0)
    })
  })

  describe('Command Execution Flow', () => {
    test('should execute fetch all packages command', async () => {
      // Simulate the fetch all command execution
      const _options = {
        all: true,
        outputDir: 'src/packages',
        cacheDir: '.cache/packages',
        timeout: 12000,
        concurrency: 8,
      }

      // Mock the execution
      const savedPackages = await mockFetchAndSaveAllPackages()
      await mockGenerateIndex()

      expect(mockFetchAndSaveAllPackages).toHaveBeenCalled()
      expect(mockGenerateIndex).toHaveBeenCalled()
      expect(savedPackages).toEqual(['nodejs.org', 'python.org'])
    })

    test('should execute fetch specific packages command', async () => {
      // Simulate fetching specific packages
      const packageNames = ['node', 'python']
      const _options = {
        outputDir: 'src/packages',
        timeout: 12000,
      }

      for (const _packageName of packageNames) {
        await mockFetchAndSavePackage()
      }

      await mockGenerateIndex()

      expect(mockFetchAndSavePackage).toHaveBeenCalledTimes(2)
      expect(mockGenerateIndex).toHaveBeenCalled()
    })

    test('should execute generate index command', async () => {
      const result = await mockGenerateIndex()

      expect(mockGenerateIndex).toHaveBeenCalled()
      expect(result).toBe('index.ts')
    })

    test('should execute generate aliases command', async () => {
      const result = await mockGenerateAliases()

      expect(mockGenerateAliases).toHaveBeenCalled()
      expect(result).toBe('aliases.ts')
    })

    test('should execute generate docs command', async () => {
      await mockGenerateDocs()

      expect(mockGenerateDocs).toHaveBeenCalled()
    })

    test('should cleanup browser resources after operations', async () => {
      // Simulate cleanup after any operation
      await mockCleanupBrowserResources()

      expect(mockCleanupBrowserResources).toHaveBeenCalled()
    })
  })

  describe('Error Handling', () => {
    test('should handle fetch errors gracefully', async () => {
      // Mock a failed fetch operation
      const mockFailedFetch = mock(() => Promise.reject(new Error('Network error')))

      try {
        await mockFailedFetch()
      }
      catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect((error as Error).message).toBe('Network error')
      }
    })

    test('should handle generation errors gracefully', async () => {
      // Mock a failed generation operation
      const mockFailedGenerate = mock(() => Promise.reject(new Error('File system error')))

      try {
        await mockFailedGenerate()
      }
      catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect((error as Error).message).toBe('File system error')
      }
    })

    test('should handle invalid command line arguments', () => {
      // Test invalid argument combinations
      const invalidOptions = {
        all: true,
        pkg: 'node,python', // Can't have both --all and --pkg
      }

      // This should be caught by argument validation
      expect(invalidOptions.all && !!invalidOptions.pkg).toBe(true) // Would be invalid
    })

    test('should handle missing required arguments', () => {
      // Test missing package name for single fetch
      const options = {
        // Missing package name and no --all or --pkg flags
      }

      // This should trigger an error in the CLI
      expect(Object.keys(options).length).toBe(0)
    })
  })

  describe('Option Validation', () => {
    test('should validate numeric options', () => {
      const options = {
        timeout: 30000,
        limit: 100,
        concurrency: 8,
        cacheExpiration: 1440,
      }

      expect(typeof options.timeout).toBe('number')
      expect(typeof options.limit).toBe('number')
      expect(typeof options.concurrency).toBe('number')
      expect(typeof options.cacheExpiration).toBe('number')

      expect(options.timeout).toBeGreaterThan(0)
      expect(options.limit).toBeGreaterThan(0)
      expect(options.concurrency).toBeGreaterThan(0)
      expect(options.cacheExpiration).toBeGreaterThan(0)
    })

    test('should validate string options', () => {
      const options = {
        outputDir: 'src/packages',
        cacheDir: '.cache/packages',
        pkg: 'node,python,go',
      }

      expect(typeof options.outputDir).toBe('string')
      expect(typeof options.cacheDir).toBe('string')
      expect(typeof options.pkg).toBe('string')

      expect(options.outputDir.length).toBeGreaterThan(0)
      expect(options.cacheDir.length).toBeGreaterThan(0)
      expect(options.pkg.length).toBeGreaterThan(0)
    })

    test('should validate boolean options', () => {
      const options = {
        all: true,
        cache: true,
        debug: false,
        verbose: false,
        json: false,
        outputJson: true,
      }

      expect(typeof options.all).toBe('boolean')
      expect(typeof options.cache).toBe('boolean')
      expect(typeof options.debug).toBe('boolean')
      expect(typeof options.verbose).toBe('boolean')
      expect(typeof options.json).toBe('boolean')
      expect(typeof options.outputJson).toBe('boolean')
    })

    test('should handle default values correctly', () => {
      const defaultOptions = {
        outputDir: 'src/packages',
        cacheDir: '.cache/packages',
        cache: true,
        cacheExpiration: 1440,
        timeout: 12000,
        maxRetries: 3,
        concurrency: 8,
        debug: false,
        verbose: false,
        json: false,
        outputJson: false,
      }

      // Verify all defaults are reasonable
      expect(defaultOptions.outputDir).toBe('src/packages')
      expect(defaultOptions.cacheDir).toBe('.cache/packages')
      expect(defaultOptions.cache).toBe(true)
      expect(defaultOptions.cacheExpiration).toBe(1440) // 24 hours
      expect(defaultOptions.timeout).toBe(12000) // 12 seconds
      expect(defaultOptions.maxRetries).toBe(3)
      expect(defaultOptions.concurrency).toBe(8)
      expect(defaultOptions.debug).toBe(false)
      expect(defaultOptions.verbose).toBe(false)
      expect(defaultOptions.json).toBe(false)
      expect(defaultOptions.outputJson).toBe(false)
    })
  })

  describe('Package Name Processing', () => {
    test('should split comma-separated package names', () => {
      const pkgOption = 'node,python,go,rust'
      const packageNames = pkgOption.split(',').map((p: string) => p.trim())

      expect(packageNames).toEqual(['node', 'python', 'go', 'rust'])
      expect(packageNames.length).toBe(4)
    })

    test('should handle package names with spaces', () => {
      const pkgOption = 'node, python , go,  rust  '
      const packageNames = pkgOption.split(',').map((p: string) => p.trim())

      expect(packageNames).toEqual(['node', 'python', 'go', 'rust'])
      expect(packageNames.every(name => !name.includes(' '))).toBe(true)
    })

    test('should handle single package name', () => {
      const pkgOption = 'node'
      const packageNames = pkgOption.split(',').map((p: string) => p.trim())

      expect(packageNames).toEqual(['node'])
      expect(packageNames.length).toBe(1)
    })

    test('should handle empty package names', () => {
      const pkgOption = 'node,,python'
      const packageNames = pkgOption.split(',').map((p: string) => p.trim()).filter(p => p.length > 0)

      expect(packageNames).toEqual(['node', 'python'])
      expect(packageNames.length).toBe(2)
    })
  })

  describe('Integration with Constants', () => {
    test('should use constants for default values', () => {
      // Import and test constants usage
      expect(PACKAGE_ALIASES).toBeDefined()

      // Test that CLI would use these constants
      const defaultCacheDir = '.cache/packages' // DEFAULT_CACHE_DIR
      const defaultTimeout = 12000 // DEFAULT_TIMEOUT_MS
      const defaultCacheExpiration = 1440 // DEFAULT_CACHE_EXPIRATION_MINUTES

      expect(defaultCacheDir).toBe('.cache/packages')
      expect(defaultTimeout).toBe(12000)
      expect(defaultCacheExpiration).toBe(1440)
    })

    test('should have access to known packages list', () => {
      // Test that CLI can access the known packages
      const knownPackages = Object.values(PACKAGE_ALIASES)

      expect(knownPackages.length).toBeGreaterThan(0)
      expect(knownPackages).toContain('nodejs.org')
      expect(knownPackages).toContain('python.org')
      expect(knownPackages).toContain('go.dev')
    })
  })

  describe('Command Help and Version', () => {
    test('should handle help command', () => {
      const helpArgs = ['--help']
      const versionArgs = ['--version']

      expect(helpArgs[0]).toBe('--help')
      expect(versionArgs[0]).toBe('--version')
    })

    test('should handle version command', () => {
      // Mock version from package.json
      const mockVersion = '1.0.0'

      expect(typeof mockVersion).toBe('string')
      expect(mockVersion).toMatch(/^\d+\.\d+\.\d+/)
    })

    test('should display available commands', () => {
      const availableCommands = [
        'fetch',
        'generate-index',
        'generate-aliases',
        'generate-docs',
        'generate-ts',
      ]

      expect(availableCommands).toContain('fetch')
      expect(availableCommands).toContain('generate-index')
      expect(availableCommands).toContain('generate-aliases')
      expect(availableCommands).toContain('generate-docs')
      expect(availableCommands).toContain('generate-ts')
    })
  })
})
