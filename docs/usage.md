# Usage

ts-pkgx provides both a TypeScript library and CLI tools for working with pkgx packages.

## CLI Usage

After installing the package, you can use the CLI tools to fetch and manage packages:

```bash
# Fetch a single package
pkgx-tools fetch nodejs.org

# Fetch multiple packages at once
pkgx-tools fetch --pkg nodejs.org,bun.sh,deno.land

# Fetch all available packages
pkgx-tools fetch --all

# Generate index file
pkgx-tools generate-index

# Generate TypeScript from cached JSON
pkgx-tools generate-ts

# Generate aliases file
pkgx-tools generate-aliases

# Generate documentation
pkgx-tools generate-docs

# Update local pantry
pkgx-tools update-pantry

# Generate constants file
pkgx-tools generate-consts

# Show version information
pkgx-tools version
```

You can also use the Bun scripts:

```bash
# Fetch a single package
bun run pkgx:fetch nodejs.org

# Fetch all packages
bun run pkgx:fetch-all

# Fetch multiple specific packages
bun bin/cli.ts fetch --pkg="nodejs.org,bun.sh,deno.land"

# Generate index file
bun bin/cli.ts generate-index

# Generate TypeScript from cached JSON
bun bin/cli.ts generate-ts

# Generate aliases file
bun bin/cli.ts generate-aliases

# Generate documentation
bun run pkgx:docs

# Update pantry
bun bin/cli.ts update-pantry

# Generate constants
bun bin/cli.ts generate-consts

# Display version information
bun bin/cli.ts version
```

### Fetch Command Options

The fetch command supports several options:

- `--all`: Fetch all available packages
- `--pkg="pkg1,pkg2"`: Fetch multiple specific packages
- `--output-dir=<dir>`: Set custom output directory (default: `src/packages`)
- `--cache-dir=<dir>`: Set custom cache directory (default: `.cache/packages`)
- `--no-cache`: Disable caching
- `--cache-expiration=<minutes>`: Set cache expiration time (default: `1440` minutes)
- `--timeout=<ms>`: Set timeout in milliseconds (default: `20000`)
- `--max-retries=<n>`: Number of retries for failed fetches (default: `3`)
- `--limit=<n>`: Limit the number of packages to fetch
- `--concurrency=<n>`: Number of packages to fetch concurrently (default: `8`)
- `--json`: Output as JSON instead of TypeScript
- `--verbose`: Enable verbose logging
- `--debug`: Enable debug mode (saves screenshots)
- `--output-json`: Output results as JSON for CI integration

### Examples

```bash
# Fetch with custom settings
pkgx-tools fetch --all --concurrency 12 --timeout 60000 --cache-expiration 60

# Fetch specific packages with verbose output
pkgx-tools fetch --pkg "node,bun,python,go" --verbose

# Disable caching and save as JSON
pkgx-tools fetch --pkg "rust-lang.org,deno.land" --no-cache --json

# Fetch for CI integration
pkgx-tools fetch --pkg "nodejs.org,bun.sh" --output-json

# Debug mode for troubleshooting
pkgx-tools fetch agwa.name/git-crypt --debug --verbose
```

## Library Usage

You can also use ts-pkgx as a library in your TypeScript/JavaScript projects:

```typescript
import { fetchAndSaveAllPackages, fetchPantryPackageWithMetadata } from 'ts-pkgx'

// Fetch a single package using the pantry-based approach
const result = await fetchPantryPackageWithMetadata('nodejs.org', {
  timeout: 60000,
  debug: false,
  outputJson: false,
  cacheDir: '.cache/packages',
  cache: true,
  cacheExpirationMinutes: 1440,
})

if (result) {
  console.log(result.packageInfo)
}

// Fetch all packages
const savedPackages = await fetchAndSaveAllPackages({
  outputDir: './packages',
  cacheDir: '.cache/packages',
  cache: true,
  cacheExpirationMinutes: 1440,
  timeout: 20000,
  concurrency: 8,
  debug: false,
  outputJson: false,
})

console.log(`Saved ${savedPackages.length} packages`)
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
// Fetch with custom options using the pantry-based approach
const result = await fetchPantryPackageWithMetadata('nodejs.org', {
  timeout: 60000,
  debug: true,
  outputJson: false,
  cacheDir: '.cache/packages',
  cache: true,
  cacheExpirationMinutes: 60,
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
  outputJson: false,
})
```

## Advanced CLI Usage

### Pantry Management

ts-pkgx now includes powerful pantry management features:

```bash
# Update local pantry from pkgx distribution
pkgx-tools update-pantry

# Generate constants file from local pantry
pkgx-tools generate-consts --source pantry

# Generate constants file from S3 registry
pkgx-tools generate-consts --source registry --validate

# Use custom pantry directory
pkgx-tools update-pantry --pantry-dir ./my-pantry
pkgx-tools generate-consts --pantry-dir ./my-pantry
```

### Cache Management

Control caching behavior for optimal performance:

```bash
# Use fresh data (disable cache)
pkgx-tools fetch --all --no-cache

# Custom cache expiration (30 minutes)
pkgx-tools fetch --all --cache-expiration 30

# Custom cache directory
pkgx-tools fetch --all --cache-dir ./my-cache

# Generate TypeScript from cached JSON files
pkgx-tools generate-ts --cache-dir ./my-cache --output-dir ./output
```

### Performance Optimization

Optimize for different scenarios:

```bash
# High-performance bulk fetching
pkgx-tools fetch --all --concurrency 12 --timeout 60000

# Conservative fetching for slow networks
pkgx-tools fetch --all --concurrency 4 --timeout 120000

# Quick testing with limited packages
pkgx-tools fetch --all --limit 10 --verbose
```

### CI/CD Integration

Use output-json for automation:

```bash
# Get structured JSON output for CI systems
result=$(pkgx-tools fetch --pkg "node,bun,python" --output-json)
echo "$result" | jq '.updatedPackages[]'

# Batch process specific packages
pkgx-tools fetch --pkg "$(cat package-list.txt | tr '\n' ',')" --output-json
```

## Advanced Usage

For more advanced usage scenarios, see:

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
