/* eslint-disable no-console */
/**
 * TypeScript Type Safety Demo for ts-pkgx
 *
 * This example demonstrates the comprehensive type safety features
 * available in ts-pkgx for package management operations.
 */

import type {
  // CLI result types
  CLIResult,
  InstallationPlan,
  PackageAlias,
  PackageDomain,

  // Package information types
  PackageInfo,
  // Package name types
  PackageName,
  PackageResolution,

  PackageSpec,
  PlatformInfo,
  SupportedArchitecture,
  SupportedFormat,

  // Platform and architecture types
  SupportedPlatform,

  // Version types
  VersionSpec,
} from '../src/index'

import {
  aliases,
  createInstallationContext,
  createInstallPlan,
  // Platform detection
  detectPlatform,
  getAllPackageAliases,
  getAllPackageDomains,

  getAvailableVersions,
  // Version resolution functions
  getLatestVersion,
  getPackageInfo,
  getPackagesByCategory,
  getVersionInfo,

  isPackageAlias,
  isPackageDomain,
  isPackageInCategory,
  isValidPackageName,
  isVersionAvailable,

  // Package categories
  PACKAGE_CATEGORIES,
  // Traditional exports
  pantry,

  // Package resolution functions
  resolvePackageName,
  resolveVersion,
  searchPackagesCommand,

  // CLI utilities
  showPackageInfo,
  validatePackage,
} from '../src/index'

// =============================================================================
// 1. Package Name Type Safety
// =============================================================================

// Type-safe package names - TypeScript will validate these at compile time
const _validAliases: PackageAlias[] = ['node', 'python', 'go', 'rust', 'bun']
const _validDomains: PackageDomain[] = ['nodejs_org', 'python_org', 'go_dev', 'rust_lang_org']
const _packageSpecs: PackageSpec[] = ['node@20.1.0', 'python@latest', 'go@^1.21']

// =============================================================================
// 2. Type Guards and Runtime Validation
// =============================================================================

console.log('\n=== Type Guards and Runtime Validation ===')

function processPackageInput(input: string): void {
  if (isPackageAlias(input)) {
    console.log(`✅ "${input}" is a valid package alias`)
  }
  else if (isPackageDomain(input)) {
    console.log(`✅ "${input}" is a valid package domain`)
  }
  else if (isValidPackageName(input)) {
    console.log(`✅ "${input}" is a valid package name`)
  }
  else {
    console.log(`❌ "${input}" is not a valid package name`)
  }
}

// Test with various inputs
const testInputs = ['node', 'nodejs.org', 'python', 'invalid-package', 'go.dev']
testInputs.forEach(processPackageInput)

// =============================================================================
// 3. Package Resolution
// =============================================================================

console.log('\n=== Package Resolution ===')

// Type-safe package resolution
const nodeResolution: PackageResolution = resolvePackageName('node')
console.log('Node resolution:', nodeResolution)

const pythonResolution: PackageResolution = resolvePackageName('python')
console.log('Python resolution:', pythonResolution)

// Get all available aliases and domains
const allAliases: PackageAlias[] = getAllPackageAliases()
const allDomains: PackageDomain[] = getAllPackageDomains()
console.log(`Total aliases: ${allAliases.length}`)
console.log(`Total domains: ${allDomains.length}`)
console.log('First 5 aliases:', allAliases.slice(0, 5))

// =============================================================================
// 4. Version Resolution
// =============================================================================

console.log('\n=== Version Resolution ===')

// Type-safe version operations
function demonstrateVersionResolution(packageName: PackageName): void {
  const latest = getLatestVersion(packageName)
  const versions = getAvailableVersions(packageName)
  const resolved = resolveVersion(packageName, '^20')
  const hasSpecificVersion = isVersionAvailable(packageName, '20.1.0')

  console.log(`Package: ${packageName}`)
  console.log(`  Latest version: ${latest}`)
  console.log(`  Total versions: ${versions?.length || 0}`)
  console.log(`  Resolved ^20: ${resolved}`)
  console.log(`  Has 20.1.0: ${hasSpecificVersion}`)
}

demonstrateVersionResolution('node')
demonstrateVersionResolution('python')

// =============================================================================
// 5. Package Information
// =============================================================================

console.log('\n=== Package Information ===')

function showPackageDetails(packageName: PackageName): void {
  const info: PackageInfo | null = getPackageInfo(packageName)

  if (info) {
    console.log(`📦 ${info.name}`)
    console.log(`   Domain: ${info.domain}`)
    console.log(`   Description: ${info.description.slice(0, 60)}...`)
    console.log(`   Latest: ${info.latestVersion}`)
    console.log(`   Programs: ${info.programs.join(', ')}`)
    console.log(`   Dependencies: ${info.dependencies.length}`)
    console.log(`   Companions: ${info.companions.length}`)
  }
  else {
    console.log(`❌ No information found for ${packageName}`)
  }
}

showPackageDetails('node')
showPackageDetails('python')

// =============================================================================
// 6. CLI Operations with Error Handling
// =============================================================================

console.log('\n=== CLI Operations with Error Handling ===')

function handleCLIOperation<T>(result: CLIResult<T>, operationName: string): T | null {
  console.log(`\n${operationName}:`)

  if (result.success && result.data) {
    if (result.warnings && result.warnings.length > 0) {
      console.warn('⚠️  Warnings:', result.warnings.join(', '))
    }
    console.log('✅ Operation successful')
    return result.data
  }
  else {
    console.error('❌ Operation failed:', result.error)
    return null
  }
}

// Demonstrate CLI operations
const packageInfoResult = showPackageInfo('node')
const _packageInfo = handleCLIOperation(packageInfoResult, 'Show Package Info')

const installPlanResult = createInstallPlan('node@20.1.0')
const _installPlan = handleCLIOperation(installPlanResult, 'Create Install Plan')

const searchResult = searchPackagesCommand('javascript')
const _searchResults = handleCLIOperation(searchResult, 'Search Packages')

const versionInfoResult = getVersionInfo('node')
const _versionInfo = handleCLIOperation(versionInfoResult, 'Get Version Info')

// =============================================================================
// 7. Platform Detection
// =============================================================================

console.log('\n=== Platform Detection ===')

const platformInfo: PlatformInfo = detectPlatform()
console.log('Platform info:', platformInfo)

// Type-safe platform-specific operations
function createDownloadUrl(
  packageName: PackageName,
  version: string,
  platform: SupportedPlatform = platformInfo.platform,
  arch: SupportedArchitecture = platformInfo.architecture,
): string {
  return `https://pkgx.dev/${packageName}/${version}/${platform}/${arch}`
}

const nodeDownloadUrl = createDownloadUrl('node', '20.1.0')
console.log('Node download URL:', nodeDownloadUrl)

// =============================================================================
// 8. Package Categories
// =============================================================================

console.log('\n=== Package Categories ===')

// Type-safe category operations
const runtimePackages = getPackagesByCategory('RUNTIME')
const buildTools = getPackagesByCategory('BUILD_TOOLS')
const databases = getPackagesByCategory('DATABASES')

console.log('Runtime packages:', runtimePackages.slice(0, 5))
console.log('Build tools:', buildTools.slice(0, 3))
console.log('Databases:', databases.slice(0, 3))

// Check category membership
const isNodeRuntime = isPackageInCategory('node', 'RUNTIME')
const isPythonDatabase = isPackageInCategory('python', 'DATABASES')

console.log('Is Node a runtime?', isNodeRuntime)
console.log('Is Python a database?', isPythonDatabase)

// =============================================================================
// 9. Advanced Generic Patterns
// =============================================================================

console.log('\n=== Advanced Generic Patterns ===')

// Type-safe package manager class
class TypeSafePackageManager {
  private installed = new Set<PackageName>()
  private platform = detectPlatform()

  install<T extends PackageName>(packageName: T, version?: string): InstallationPlan | null {
    console.log(`Installing ${packageName}${version ? `@${version}` : ''}...`)

    const planResult = createInstallPlan(
      version ? `${packageName}@${version}` : packageName,
    )

    if (planResult.success && planResult.data) {
      this.installed.add(packageName)
      console.log(`✅ ${packageName} installation planned`)
      return planResult.data
    }

    console.log(`❌ Failed to plan installation for ${packageName}`)
    return null
  }

  isInstalled(packageName: PackageName): boolean {
    return this.installed.has(packageName)
  }

  getInstalledPackages(): Array<{ name: PackageName, info: PackageInfo | null }> {
    return Array.from(this.installed).map(name => ({
      name,
      info: getPackageInfo(name),
    }))
  }

  getPlatformInfo(): PlatformInfo {
    return this.platform
  }
}

// Demonstrate the type-safe package manager
const packageManager = new TypeSafePackageManager()

packageManager.install('node', '20.1.0')
packageManager.install('python', 'latest')
packageManager.install('go')

console.log('Installed packages:', packageManager.getInstalledPackages().map(p => p.name))
console.log('Is Node installed?', packageManager.isInstalled('node'))
console.log('Platform info:', packageManager.getPlatformInfo())

// =============================================================================
// 10. Traditional API Access (Still Available)
// =============================================================================

console.log('\n=== Traditional API Access ===')

// Traditional pantry access still works
const nodePackage = pantry.nodejs_org
const pythonPackage = pantry.python_org

console.log('Node package (traditional):', nodePackage.name)
console.log('Python package (traditional):', pythonPackage.name)

// Traditional aliases still work
const nodeDomain = aliases.node
const pythonDomain = aliases.python

console.log('Node domain from alias:', nodeDomain)
console.log('Python domain from alias:', pythonDomain)

// =============================================================================
// Summary
// =============================================================================

console.log('\n=== Summary ===')
console.log('✅ All type safety features demonstrated successfully!')
console.log('🎯 TypeScript provides compile-time validation for all operations')
console.log('🛡️  Runtime type guards ensure safe operations')
console.log('🔧 CLI utilities provide comprehensive error handling')
console.log('🌐 Platform detection enables cross-platform compatibility')
console.log('📦 Package categories organize packages logically')
console.log('🚀 Advanced patterns enable building robust applications')

export { TypeSafePackageManager }
