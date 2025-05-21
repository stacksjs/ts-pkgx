# Usage

ts-pkgx provides both a TypeScript library and CLI tools for working with pkgx packages.

## CLI Usage

After installing the package, you can use the CLI tools to fetch and manage packages:

```bash
# Fetch a single package
bun run pkgx:fetch nodejs.org

# Fetch all available packages
bun run pkgx:fetch-all

# Generate documentation
bun run pkgx:docs

# Fix package variable names
bun run pkgx:cleanup
```

You can also use the CLI directly:

```bash
# Fetch a single package
bun bin/cli.ts fetch nodejs.org

# Fetch all packages
bun bin/cli.ts fetch --all

# Fetch multiple specific packages
bun bin/cli.ts fetch --pkg="nodejs.org,bun.sh,deno.land"

# Generate documentation
bun bin/cli.ts generate-docs

# Fix package variable names
bun bin/cli.ts cleanup
```

### Options

The fetch command supports several options:

- `--all`: Fetch all available packages
- `--pkg="pkg1,pkg2"`: Fetch multiple specific packages
- `--timeout=<ms>`: Set timeout in milliseconds
- `--output=<dir>`: Set custom output directory
- `--mode=<mode>`: Set fetch mode (github, scrape, basic)
- `--json`: Output as JSON instead of TypeScript
- `--verbose`: Enable verbose logging
- `--debug`: Enable debug mode
- `--retries=<n>`: Number of retries for failed fetches

## Library Usage

You can also use ts-pkgx as a library in your TypeScript/JavaScript projects:

```typescript
import { fetchPkgxPackage, getAllPkgxPackages } from 'ts-pkgx'

// Access all available packages
import * as pkgx from 'ts-pkgx'

// Fetch a single package
const { packageInfo } = await fetchPkgxPackage('nodejs.org')
console.log(packageInfo)
console.log(pkgx.nodejsorgPackage)
```

### Accessing Package Information

Each package exports a typed interface and a constant:

```typescript
import type { NodejsorgPackage } from 'ts-pkgx'
import { nodejsorgPackage } from 'ts-pkgx'

// Get package info
console.log(nodejsorgPackage.name) // 'node'
console.log(nodejsorgPackage.versions) // ['20.0.0', '18.0.0', ...]
console.log(nodejsorgPackage.domain) // 'nodejs.org'
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
- [Maintenance & Troubleshooting](./advanced/maintenance.md)
