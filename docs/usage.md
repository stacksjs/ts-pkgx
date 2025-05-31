# Usage

ts-pkgx provides both a TypeScript library and CLI tools for working with pkgx packages.

## CLI Usage

After installing the package, you can use the CLI tools to fetch and manage packages:

```bash
# Fetch a single package
bun run pkgx:fetch nodejs.org

# Fetch multiple packages at once
bun run pkgx:fetch --pkg nodejs.org,bun.sh,deno.land

# Fetch all available packages
bun run pkgx:fetch --all

# Generate index file
bun run pkgx:generate-index

# Generate TypeScript from cached JSON
bun run pkgx:generate-ts

# Generate aliases file
bun run pkgx:generate-aliases

# Generate documentation
bun run pkgx:generate-docs

# Show version information
bun run pkgx:version
```

You can also use the CLI directly:

```bash
# Fetch a single package
bun bin/cli.ts fetch nodejs.org

# Fetch all packages
bun bin/cli.ts fetch --all

# Fetch multiple specific packages
bun bin/cli.ts fetch --pkg="nodejs.org,bun.sh,deno.land"

# Generate index file
bun bin/cli.ts generate-index

# Generate TypeScript from cached JSON
bun bin/cli.ts generate-ts

# Generate aliases file
bun bin/cli.ts generate-aliases

# Generate documentation
bun bin/cli.ts generate-docs

# Display version information
bun bin/cli.ts version
```

### Options

The fetch command supports several options:

- `--all`: Fetch all available packages
- `--pkg="pkg1,pkg2"`: Fetch multiple specific packages
- `--output-dir=<dir>`: Set custom output directory
- `--cache-dir=<dir>`: Set custom cache directory
- `--no-cache`: Disable caching
- `--cache-expiration=<minutes>`: Set cache expiration time
- `--timeout=<ms>`: Set timeout in milliseconds
- `--max-retries=<n>`: Number of retries for failed fetches
- `--limit=<n>`: Limit the number of packages to fetch
- `--concurrency=<n>`: Number of packages to fetch concurrently
- `--json`: Output as JSON instead of TypeScript
- `--verbose`: Enable verbose logging
- `--debug`: Enable debug mode

## Library Usage

You can also use ts-pkgx as a library in your TypeScript/JavaScript projects:

```typescript
import { fetchAndSaveAllPackages, fetchPkgxPackage } from 'ts-pkgx'

// Fetch a single package
const { packageInfo } = await fetchPkgxPackage('nodejs.org')
console.log(packageInfo)

// Fetch all packages
const savedPackages = await fetchAndSaveAllPackages({
  outputDir: './packages',
  timeout: 60000,
  concurrency: 15,
})
```

### Accessing Package Information

After fetching packages, you can import them from your packages directory:

```typescript
import { getPackage, pantry } from 'ts-pkgx'

// Get a package by domain name
const nodePackage = pantry['nodejs.org']

// Get a package by alias
const nodeByAlias = getPackage('node')

// Access package properties
console.log(nodePackage.name) // 'node'
console.log(nodePackage.versions) // ['20.0.0', '18.0.0', ...]
console.log(nodePackage.domain) // 'nodejs.org'
```

### Understanding Package Variable Names

ts-pkgx uses intelligent alias-based naming for better developer experience:

1. **Packages with aliases use the primary alias for naming:**
   ```typescript
   import {
     bunPackage, // For bun.sh (alias: 'bun') - NOT bunshPackage
     nodePackage, // For nodejs.org (alias: 'node') - NOT nodejsorgPackage
     pythonPackage // For python.org (alias: 'python') - NOT pythonorgPackage
   } from 'ts-pkgx'
   ```

2. **Packages without aliases use domain-based naming:**
   ```typescript
   import {
     astgrepgithubioPackage, // For ast-grep.github.io (no alias)
     examplecomPackage // For example.com (no alias)
   } from 'ts-pkgx'
   ```

3. **Nested paths are concatenated:**
   ```typescript
   import { agwanamegitcryptPackage } from 'ts-pkgx' // For 'agwa.name/git-crypt'
   ```

### Enhanced TypeScript Intellisense

All generated packages include comprehensive JSDoc documentation:

```typescript
import { pantry } from 'ts-pkgx'

// Hovering over pantry.bun shows:
// - Package description
// - Programs provided
// - Installation command
// - Links to documentation

// Hovering over pantry.bun.versions shows:
// - "From newest version to oldest."
// - Link to usage documentation

console.log(pantry.bun.versions) // Excellent intellisense support
```

### Alias Support in Pantry

The pantry object supports both domain names and aliases:

```typescript
import { pantry } from 'ts-pkgx'

// Both approaches work and return the same object
const bunViaAlias = pantry.bun // Using alias
const bunViaDomain = pantry.bunsh // Using domain
console.log(bunViaAlias === bunViaDomain) // true

// Same for Node.js
const nodeViaAlias = pantry.node // Using alias
const nodeViaDomain = pantry.nodejsorg // Using domain
console.log(nodeViaAlias === nodeViaDomain) // true
```

### Using the API with Custom Options

You can customize how packages are fetched using the options object:

```typescript
// Fetch with custom options
const result = await fetchPkgxPackage('nodejs.org', {
  timeout: 60000,
  debug: true,
})

// Fetch all packages with custom options
const packages = await fetchAndSaveAllPackages({
  outputDir: './custom/packages',
  cacheDir: './custom/cache',
  cache: true,
  cacheExpirationMinutes: 60,
  timeout: 60000,
  limit: 50,
  concurrency: 15,
  debug: false,
})
```

## Advanced Usage

For advanced usage scenarios, see:

- [Package Management](./features/management.md)
- [TypeScript Integration](./features/typescript.md)
- [Batch Processing](./features/batch-processing.md)
- [Multiple Package Fetching](./features/multiple-fetching.md)
- [Custom Transformations](./advanced/transformations.md)
- [Custom Output Formats](./advanced/output-formats.md)
- [Error Handling](./advanced/error-handling.md)
- [Optimized Batch Processing](./advanced/batch-processing.md)
- [Rate Limits](./advanced/rate-limits.md)
- [Aliases System](./advanced/aliases.md)
