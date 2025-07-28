<p align="center"><img src=".github/art/cover.jpg" alt="Social Card of this repo"></p>

[![npm version][npm-version-src]][npm-version-href]
[![GitHub Actions][github-actions-src]][github-actions-href]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<!-- [![npm downloads][npm-downloads-src]][npm-downloads-href] -->
<!-- [![Codecov][codecov-src]][codecov-href] -->

# ts-pkgx

This library includes tools to fetch and save package information from pkgx.dev.

## Installation

```bash
npm install ts-pkgx
bun install ts-pkgx
```

## Usage

### CLI Tool

The library includes a comprehensive CLI tool to manage packages from pkgx.dev:

```bash
# Fetch a single package
bun run pkgx:fetch node

# Fetch multiple packages
bun run pkgx:fetch --pkg "node,python,go"

# With custom output directory
bun run pkgx:fetch node --output-dir ./data/packages

# Fetch all packages
bun run pkgx:fetch-all

# Set options for fetching
bun run pkgx:fetch-all --timeout 180000 --output-dir ./data/packages --limit 100

# Generate documentation
bun run pkgx:docs

# Update local pantry cache
bun ./bin/cli.ts update-pantry

# Generate TypeScript files from cache
bun ./bin/cli.ts generate-ts

# Generate package index
bun ./bin/cli.ts generate-index

# Generate package aliases
bun ./bin/cli.ts generate-aliases

# Generate constants file
bun ./bin/cli.ts generate-consts

# Resolve dependency files and transitive dependencies
bun ./bin/cli.ts resolve-deps deps.yaml
```

### Dependency Resolution

ts-pkgx includes a powerful dependency resolver that can analyze dependency files and resolve all transitive dependencies:

```bash
# Resolve a single dependency file
bun ./bin/cli.ts resolve-deps deps.yaml --verbose --install-command

# Find and resolve all dependency files in a project
bun ./bin/cli.ts resolve-deps --find-files ./my-project

# Output as JSON for automation
bun ./bin/cli.ts resolve-deps deps.yaml --json

# Filter for specific OS
bun ./bin/cli.ts resolve-deps deps.yaml --target-os darwin --include-os-deps
```

ts-pkgx also provides comprehensive **Integration APIs** designed for package managers and deployment tools that need advanced dependency resolution:

```typescript
import { resolveDependencies } from 'ts-pkgx'

// Resolve dependencies from a YAML file
const result = await resolveDependencies('./deps.yaml', {
  targetOs: 'darwin',
  includeOsSpecific: true
})

console.log(`Installing ${result.totalCount} packages...`)

// Install each resolved package
for (const pkg of result.packages) {
  await launchpad.install(pkg.name, pkg.version)
}
```

**Key Features:**
- 🔍 **Deep transitive dependency resolution** - Automatically resolves all nested dependencies
- ⚡ **Version conflict resolution** - Intelligently handles conflicting version constraints
- 🎯 **OS-specific dependencies** - Platform-aware dependency resolution
- 📄 **Multiple input formats** - YAML files, strings, and individual packages
- 🔧 **Semantic versioning** - Full semver constraint support (^, ~, >=, etc.)

For detailed integration examples and API documentation, see the [Launchpad Integration Guide](./docs/launchpad-integration.md).

### Programmatic Usage

You can also use the library programmatically in your code:

```typescript
import {
  fetchAndSaveAllPackages,
  fetchPantryPackage,
  fetchPantryPackageWithMetadata,
  findDependencyFiles,
  resolveDependencies,
  resolveDependenciesFromYaml,
  resolveDependencyFile,
  resolvePackageDependencies,
  savePackageAsTypeScript,
  saveToCacheAndOutput
} from 'ts-pkgx'

// Fetch a single package using pkgx.dev
const nodePackage = await fetchPantryPackage('node')
console.log(nodePackage)

// Fetch package with metadata from pantry
const packageWithMeta = await fetchPantryPackageWithMetadata('node', {
  timeout: 30000,
  debug: false
})

// Fetch and save all packages
const savedPackages = await fetchAndSaveAllPackages({
  timeout: 120000,
  outputDir: 'src/packages',
  concurrency: 8
})
console.log(`Saved ${savedPackages.length} packages`)

// Save package as TypeScript file
if (packageWithMeta) {
  const filePath = savePackageAsTypeScript('src/packages', 'node', packageWithMeta.packageInfo)
  console.log(`Saved to ${filePath}`)
}

// Resolve dependency files and transitive dependencies
const depFiles = findDependencyFiles('./my-project')
for (const file of depFiles) {
  const result = await resolveDependencyFile(file, {
    pantryDir: 'src/pantry',
    packagesDir: 'src/packages',
    maxDepth: 10,
    verbose: true,
  })

  console.log(`${file}: Found ${result.uniquePackages.length} unique packages`)
  if (result.conflicts.length > 0) {
    console.log(`Resolved ${result.conflicts.length} version conflicts`)
  }
}

// Launchpad Integration API - Resolve dependencies for package managers
const launchpadResult = await resolveDependencies('./deps.yaml', {
  targetOs: 'darwin',
  includeOsSpecific: true,
  maxDepth: 10,
  verbose: false
})

console.log(`Launchpad: Installing ${launchpadResult.totalCount} packages`)
console.log(`Direct dependencies: ${launchpadResult.directCount}`)
console.log(`Version conflicts resolved: ${launchpadResult.conflicts.length}`)

// Install command ready for use
console.log(launchpadResult.launchpadCommand)

// Resolve from YAML string
const yamlContent = `
global: true
dependencies:
  bun.sh: ^1.2.16
  gnu.org/grep: ^3.12.0
`
const yamlResult = await resolveDependenciesFromYaml(yamlContent)

// Resolve single package dependencies
const grepDeps = await resolvePackageDependencies('gnu.org/grep')
console.log(`grep has ${grepDeps.length} total dependencies`)
```

### TypeScript Types

ts-pkgx provides comprehensive TypeScript types for all packages in the pkgx.dev ecosystem, enabling you to work in a fully typed environment with extensive type safety features:

```typescript
import type {
  LaunchpadInstallResult, // Launchpad API result type
  LaunchpadPackage, // Individual package in Launchpad result
  LaunchpadResolverOptions, // Launchpad resolution options
  PackageFetchOptions, // Options for fetching packages
  Packages, // Type alias for Pantry
  Pantry, // Complete pantry type with all packages
  PkgxPackage // Package information interface
} from 'ts-pkgx'
import {
  aliases, // Package aliases mapping
  pantry // Access to all packages with full type safety
} from 'ts-pkgx'

// Access packages with full type safety using domain-based properties
const nodePackage = pantry.nodejs_org
const pythonPackage = pantry.python_org
const goPackage = pantry.go_dev
const bunPackage = pantry.bun_sh

// Alternative access using underscored domain names
const curlPackage = pantry.curl_se
const gitPackage = pantry.git_scm_org

// All package properties are fully typed
console.log(nodePackage.name) // string: 'nodejs.org'
console.log(nodePackage.domain) // string: 'nodejs.org'
console.log(nodePackage.description) // string: package description
console.log(nodePackage.programs) // readonly string[]: ['node', 'npm', 'npx']
console.log(nodePackage.versions) // readonly string[]: available versions
console.log(nodePackage.installCommand) // string: 'launchpad install nodejs.org'
console.log(nodePackage.companions) // readonly string[]: companion packages
console.log(nodePackage.dependencies) // readonly string[]: dependencies

// Type-safe access with aliases
const alias = aliases.node // 'nodejs.org'
const packageByAlias = pantry[aliases.node as keyof Pantry]

// Package fetching with typed options
const fetchOptions: PackageFetchOptions = {
  timeout: 30000,
  outputDir: 'src/packages',
  cacheDir: '.cache',
  debug: false,
  concurrency: 8
}
```

The type system includes:
- **Comprehensive type safety**: All package properties and operations are type-checked
- **Pantry types**: Full type definitions for all packages in the pkgx ecosystem
- **Package interfaces**: Detailed typed interfaces for package metadata
- **Fetch options**: Type-safe configuration for package fetching operations
- **Domain mapping**: Both domain names and underscored variants for flexible access
- **Alias support**: Type-safe alias resolution for common package names
- **Auto-completion**: Full IntelliSense support in your IDE for all 1600+ packages

### Running Tests

```bash
bun test
```

## Development

### Running Tests

```bash
bun test
```

### Building the Package

```bash
bun run build
```

### Updating Packages

```bash
# Update the local pantry cache
bun ./bin/cli.ts update-pantry

# Regenerate all package TypeScript files
bun ./bin/cli.ts fetch --all

# Generate documentation
bun ./bin/cli.ts generate-docs
```

## Changelog

Please see our [releases](https://github.com/stackjs/launchpad/releases) page for information on changes.

## Contributing

Please see [CONTRIBUTING](https://github.com/stacksjs/contributing) for details.

## Community

For help or discussion:

- [Discussions on GitHub](https://github.com/stacksjs/launchpad/discussions)
- [Join the Stacks Discord Server](https://discord.gg/stacksjs)

## Postcardware

"Software that is free, but hopes for a postcard." We love receiving postcards from around the world showing where Stacks is being used! We showcase them on our website too.

Our address: Stacks.js, 12665 Village Ln #2306, Playa Vista, CA 90094, United States 🌎

## Credits

- [Max Howell](https://github.com/mxcl) - for creating [pkgx](https://github.com/pkgxdev/pkgx) and [Homebrew](https://github.com/Homebrew/brew)
- [pkgm](https://github.com/pkgxdev/pkgm) & [dev](https://github.com/pkgxdev/dev) - thanks for the inspiration
- [Chris Breuer](https://github.com/chrisbbreuer)
- [All Contributors](https://github.com/stacksjs/launchpad/graphs/contributors)

## Sponsors

We would like to extend our thanks to the following sponsors for funding Stacks development. If you are interested in becoming a sponsor, please reach out to us.

- [JetBrains](https://www.jetbrains.com/)
- [The Solana Foundation](https://solana.com/)

## License

The MIT License (MIT). Please see [LICENSE](https://github.com/stacksjs/ts-pkgx/blob/main/LICENSE.md) for more information.

Made with 💙

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/ts-pkgx?style=flat-square
[npm-version-href]: https://npmjs.com/package/ts-pkgx
[github-actions-src]: https://img.shields.io/github/actions/workflow/status/stacksjs/ts-pkgx/ci.yml?style=flat-square&branch=main
[github-actions-href]: https://github.com/stacksjs/ts-pkgx/actions?query=workflow%3Aci

<!-- [codecov-src]: https://img.shields.io/codecov/c/gh/stacksjsts-pkgx/main?style=flat-square
[codecov-href]: https://codecov.io/gh/stacksjs/ts-pkgx -->
