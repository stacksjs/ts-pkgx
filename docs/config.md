# Configuration

ts-pkgx provides various configuration options for both the CLI and the library API.

## CLI Configuration

When using the CLI tool, you can specify the following options:

```bash
# Fetch a single package
bun run pkgx:fetch node

# Fetch multiple packages with a comma-separated list
bun run pkgx:fetch --pkg node,bun,python

# With custom output directory
bun run pkgx:fetch node --output ./data/packages

# Fetch all packages
bun run pkgx:fetch-all

# Fetch with a limit on the number of packages
bun run pkgx:fetch-all --limit 50

# Set a custom timeout (milliseconds)
bun run pkgx:fetch-all --timeout 180000 --output ./data/pkgx-packages

# Enable debug mode (saves screenshots and additional logs)
bun run pkgx:fetch node --debug

# Save as JSON instead of TypeScript
bun run pkgx:fetch --pkg nodejs.org,bun.sh --json

# Use a specific fetch mode
bun run pkgx:fetch-all --mode scrape
```

## Fetch Modes

ts-pkgx supports multiple methods for fetching package information:

- **complete** (default): Uses the GitHub API for package discovery with optimized batch processing
- **scrape**: Uses web scraping to discover packages on pkgx.dev
- **basic**: Uses the legacy implementation (not recommended for general use)

```bash
# Use web scraping mode
bun run pkgx:fetch-all --mode scrape
```

## Batch Processing Configuration

For batch processing of large numbers of packages, you can configure:

```bash
# Limit the number of packages to process (useful for testing)
bun run pkgx:fetch-all --limit 20

# Adjust retry attempts for failed fetches
bun run pkgx:fetch-all --retries 5

# Set verbose output to see more details
bun run pkgx:fetch-all --verbose
```

## Package Fetch Options

The `fetchPkgxPackage` and `fetchAndSaveAllPackages` functions accept an options object with the following properties:

```typescript
interface PackageFetchOptions {
  /**
   * Timeout in milliseconds for fetching operations
   * @default 30000
   */
  timeout?: number

  /**
   * Directory to save package data
   * @default 'packages'
   */
  outputDir?: string

  /**
   * Enable debug mode to save screenshots and additional info
   * @default false
   */
  debug?: boolean
}
```

## GitHub API Cache

For better performance and to avoid hitting GitHub API rate limits, ts-pkgx implements a caching mechanism for GitHub API requests. The cache is stored in the `github-cache.json` file in the project root.

You can configure the cache duration when using the API:

```typescript
// In milliseconds, default is 1 hour
const cacheDuration = 3600000

// When using the CLI
// bun run pkgx:fetch-all --github-cache-duration 7200000 // 2 hours
```

## Package Aliases

ts-pkgx maintains a map of common package aliases in the `PACKAGE_ALIASES` object. This is used to resolve package names to their full domain names.

```typescript
// Example aliases
const PACKAGE_ALIASES: Record<string, string> = {
  node: 'nodejs.org',
  python: 'python.org',
  go: 'go.dev',
  rust: 'rust-lang.org',
  // ...
}
```

You can extend this map with your own aliases or use it to resolve package names in your code.

## Output Format

By default, ts-pkgx generates TypeScript files for each package. You can also configure it to output JSON files instead:

```bash
# CLI option
bun run pkgx:fetch node --json

# API option
const result = await fetchAndSavePackage('node', outputDir, timeout, true); // true = save as JSON
```

## Advanced Configuration

For more advanced configuration options and examples, see the [Advanced](./advanced.md) section.
