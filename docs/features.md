# Features

ts-pkgx provides a comprehensive set of features for working with pkgx.dev packages. Here's a detailed look at the main features:

## Package Discovery

### Package Fetching

ts-pkgx can fetch detailed information about packages from pkgx.dev, including:

- Basic metadata (name, domain, description)
- Available versions
- Programs provided by the package
- Dependencies and companion packages
- Installation commands
- Links to documentation, source code, and related resources

### Bulk Fetching

You can fetch information about all available packages at once using the `fetchAndSaveAllPackages` function or the CLI command:

```bash
bun run pkgx:fetch-all
```

This will retrieve information about all packages listed on pkgx.dev and save them to your specified output directory.

## TypeScript Integration

### Fully Typed Interfaces

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

### TypeScript Code Generation

ts-pkgx can automatically generate TypeScript files for each package, making it easy to import and use package data in your projects:

```typescript
// Generated file: bunsh.ts
import type { PkgxPackage } from '../types'

export const bunshPackage: PkgxPackage = {
  name: 'Bun',
  domain: 'bun.sh',
  description: 'JavaScript runtime, bundler, test runner, and package manager',
  // ...other properties
}
```

## Package Management

### Package Index Generation

ts-pkgx can automatically generate an index file that exports all packages and provides utility functions for working with them:

```typescript
import { getPackage, pantry } from 'ts-pkgx/packages'

// Access a package by domain
const bunPackage = pantry['bun.sh']

// Or by alias
const alsoBundle = getPackage('bun')
```

### Alias Support

ts-pkgx supports package aliases, making it easy to find packages by their common names rather than their full domain names:

```typescript
// These both return the same package
const nodeByDomain = getPackage('nodejs.org')
const nodeByAlias = getPackage('node')
```

## Domain Handling

### Nested Path Support

ts-pkgx properly handles packages with nested paths, such as `agwa.name/git-crypt`:

```typescript
// Fetch a nested package
const gitCrypt = await fetchPkgxPackage('agwa.name/git-crypt')

// Access a nested package
const gitCryptPackage = getPackage('agwa.name/git-crypt')

// Or by subpath alias
const alsoGitCrypt = getPackage('git-crypt')
```

### Domain Utilities

ts-pkgx provides utility functions for converting between domain names, variable names, and file names:

```typescript
import { convertDomainToFileName, convertDomainToVarName } from 'ts-pkgx/tools/domainUtils'

// bun.sh -> bunsh
const varName = convertDomainToVarName('bun.sh')

// agwa.name/git-crypt -> agwaname-gitcrypt
const fileName = convertDomainToFileName('agwa.name/git-crypt')
```

## CLI Tools

### Single Package Fetching

Fetch information about a single package using the CLI:

```bash
bun run pkgx:fetch node
```

### Bulk Fetching

Fetch information about all packages at once:

```bash
bun run pkgx:fetch-all
```

### Customization Options

Customize the behavior of the CLI with various options:

```bash
# Custom output directory
bun run pkgx:fetch node --output ./data/packages

# Custom timeout
bun run pkgx:fetch-all --timeout 180000

# Debug mode
bun run pkgx:fetch node --debug
```

## Performance Optimizations

### Caching

ts-pkgx implements caching for GitHub API requests to avoid hitting rate limits and improve performance:

```bash
# Custom cache duration (in milliseconds)
bun run pkgx:fetch-all --github-cache-duration 7200000
```

### Parallel Processing

When fetching multiple packages, ts-pkgx processes them in parallel to speed up the operation.

## Integration Options

### JSON Output

You can choose to output package information as JSON instead of TypeScript files:

```bash
# CLI option
bun run pkgx:fetch node --json

# API option
const result = await fetchAndSavePackage('node', outputDir, timeout, true) // true = save as JSON
```

### Custom Output Directory

Specify where you want to save package information:

```bash
# CLI option
bun run pkgx:fetch node --output ./my-packages

# API option
const result = await fetchAndSavePackage('node', './my-packages', timeout)
```
