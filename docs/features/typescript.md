# TypeScript Integration

ts-pkgx provides seamless TypeScript integration, making it easy to work with package data in a type-safe manner. The library now includes extensive type safety features that provide compile-time validation, IntelliSense support, and type-safe package management operations.

## Fully Typed Interfaces

All package data is available through fully typed TypeScript interfaces, providing excellent IDE support and type safety:

```typescript
interface PkgxPackage {
  name: string
  domain: string
  description: string
  packageYmlUrl?: string
  homepageUrl?: string
  githubUrl?: string
  installCommand: string
  programs: string[]
  companions: string[]
  dependencies: string[]
  versions: string[]
  aliases?: string[]
  fullPath?: string
}
```

These interfaces ensure that you always know what properties are available and what their types are, helping to prevent runtime errors.

## TypeScript Code Generation

ts-pkgx automatically generates TypeScript files for each package, making it easy to import and use package data in your projects:

```typescript
// Generated file: bunsh.ts
import type { PkgxPackage } from '../types'

export const bunshPackage: PkgxPackage = {
  name: 'Bun',
  domain: 'bun.sh',
  description: 'JavaScript runtime, bundler, test runner, and package manager',
  // ...other properties
}

// Explicit type definition is also included
export interface BunshPackage {
  name: 'Bun'
  domain: 'bun.sh'
  description: 'JavaScript runtime, bundler, test runner, and package manager'
  // ...other properties with explicit types
}
```

These generated files provide both the data and the types, allowing for a great developer experience.

## Type-Safe Access

When using ts-pkgx in your TypeScript projects, you get full type safety and IntelliSense support:

```typescript
import { bunshPackage, pantry } from 'ts-pkgx'

// Full IntelliSense support
console.log(bunshPackage.description)

// Autocomplete for all properties
const programs = bunshPackage.programs

// Type checking prevents errors
bunshPackage.versions.forEach((version) => {
  console.log(`Version: ${version}`)
})
```

## Types for API Functions

All API functions in ts-pkgx come with proper TypeScript type definitions:

```typescript
/**
 * Fetches package information from pkgx.dev
 */
async function fetchPkgxPackage(
  packageName: string,
  options?: PackageFetchOptions,
): Promise<{
  packageInfo: PkgxPackage
  originalName: string
  fullDomainName: string
}>

interface PackageFetchOptions {
  timeout?: number
  outputDir?: string
  debug?: boolean
}
```

This makes it easy to understand what parameters are expected and what will be returned from each function call.

## Type-Safe Domain Utilities

ts-pkgx provides type-safe utility functions for working with domains:

```typescript
import { convertDomainToFileName, convertDomainToVarName } from 'ts-pkgx/tools/domainUtils'

// Type-safe conversion functions
const varName: string = convertDomainToVarName('bun.sh') // "bunsh"
const fileName: string = convertDomainToFileName('agwa.name/git-crypt') // "agwaname-gitcrypt"
```

## Automatic Index Generation

ts-pkgx can automatically generate a fully typed index file that exports all packages and provides utility functions:

```typescript
// Generated index.ts
import type { PkgxPackage } from '../types'

// Imports from all package files
import * as bunsh from './bunsh'
import * as nodejsorg from './nodejsorg'
// ... more imports

// Export all packages
export * from './bunsh'
export * from './nodejsorg'
// ... more exports

// Type-safe pantry interface
export interface Pantry {
  bunsh: PkgxPackage
  nodejsorg: PkgxPackage
  // ... more properties
}

// Export the pantry object with proper typing
export const pantry: Pantry = {
  bunsh: bunsh.bunshPackage,
  nodejsorg: nodejsorg.nodejsorgPackage,
  // ... more mappings
}
```

This provides a convenient, type-safe way to access all packages in your project.

## New Type Safety Features

ts-pkgx now includes comprehensive type safety features:

### Package Name Types

```typescript
import type {
  PackageAlias, // All available package aliases (e.g., 'node', 'python')
  PackageDomain, // All available package domains (e.g., 'nodejs.org')
  PackageName, // Union of all valid package identifiers
  PackageSpec // Package specifications with versions (e.g., 'node@20.1.0')
} from 'ts-pkgx'

// Type-safe package operations
function installPackage(packageName: PackageName, version?: string) {
  // TypeScript ensures only valid package names are accepted
}
```

### Version Resolution

```typescript
import {
  getAvailableVersions,
  getLatestVersion,
  getPackageInfo,
  resolveVersion
} from 'ts-pkgx'

// Type-safe version operations
const latest = getLatestVersion('node') // string | null
const versions = getAvailableVersions('node') // string[]
const resolved = resolveVersion('node', '^20') // string | null
const info = getPackageInfo('node') // PackageInfo | null
```

### CLI Utilities

```typescript
import {
  createInstallPlan,
  searchPackagesCommand,
  showPackageInfo
} from 'ts-pkgx'

// Type-safe CLI operations with error handling
const result = showPackageInfo('node')
if (result.success && result.data) {
  console.log(result.data.description)
}
```

### Platform Detection

```typescript
import { createInstallationContext, detectPlatform } from 'ts-pkgx'

// Type-safe platform operations
const platform = detectPlatform() // PlatformInfo
const context = createInstallationContext('node') // InstallationContext
```

## Related Documentation

For comprehensive information about working with TypeScript types in ts-pkgx, including advanced usage patterns and examples, see the [TypeScript Types](../typescript-types.md) documentation.
