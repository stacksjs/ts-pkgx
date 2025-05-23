# Multiple Package Fetching

ts-pkgx provides flexible options for fetching multiple packages at once, giving you precise control over which packages to fetch.

## Using the `--pkg` Option

The `--pkg` option allows you to fetch multiple specific packages in a single command:

```bash
# Fetch multiple packages with one command
bun run pkgx:fetch --pkg node,bun,python

# With custom options
bun run pkgx:fetch --pkg "go.dev,python.org,rust-lang.org" --json --timeout 60000
```

This is particularly useful when you need information about several specific packages without having to fetch the entire pantry.

## Comma-Separated Package List

The `--pkg` option accepts a comma-separated list of package names:

```bash
# Fetch packages by their aliases or domain names
bun run pkgx:fetch --pkg node,python,bun,deno

# Quotes are helpful when using dots or special characters
bun run pkgx:fetch --pkg "nodejs.org,python.org,rust-lang.org"
```

Both aliases (like `node`) and full domain names (like `nodejs.org`) are supported.

## Combined with Other Options

The multiple package fetching feature can be combined with other CLI options:

```bash
# Save as JSON instead of TypeScript
bun run pkgx:fetch --pkg node,bun --json

# Custom output directory
bun run pkgx:fetch --pkg node,bun --output-dir ./custom-packages

# Increased timeout for complex packages
bun run pkgx:fetch --pkg "rust-lang.org,go.dev" --timeout 60000

# Debug mode for troubleshooting
bun run pkgx:fetch --pkg "rust-lang.org,go.dev" --debug

# Custom cache directory
bun run pkgx:fetch --pkg node,bun --cache-dir ./my-cache

# Disable caching
bun run pkgx:fetch --pkg node,bun --no-cache
```

## Benefits Over Individual Fetching

Fetching multiple packages at once offers several advantages:

1. **Reduced Overhead**: Shares setup costs (browser initialization, cache loading)
2. **Faster Processing**: Handles packages in an optimized way
3. **Simplified Commands**: One command instead of multiple individual ones
4. **Consistent Output**: All packages are processed with the same options
5. **Automatic Index Generation**: The index is only regenerated once after all packages are fetched

## API-Based Multiple Fetching

You can also fetch multiple packages programmatically:

```typescript
import { fetchPkgxPackage } from 'ts-pkgx'

async function fetchMultiplePackages(packageNames: string[]) {
  const results = await Promise.all(
    packageNames.map(async (pkg) => {
      try {
        const result = await fetchPkgxPackage(pkg)
        return { name: pkg, success: true, result }
      }
      catch (error) {
        return { name: pkg, success: false, error }
      }
    })
  )

  // Process results
  const successful = results.filter(r => r.success)
  const failed = results.filter(r => !r.success)

  console.log(`Successfully fetched: ${successful.length} packages`)
  console.log(`Failed to fetch: ${failed.length} packages`)

  return results
}

// Usage
fetchMultiplePackages(['node', 'python', 'bun'])
```

## Efficiency Improvements

Multiple package fetching leverages several efficiency improvements:

1. **Shared Browser Instance**: Reuses browser when fetching multiple packages
2. **Optimized Cache Usage**: Only loads GitHub cache once for all packages
3. **Parallel Processing**: Processes packages in parallel where possible
4. **Resource Cleanup**: Properly cleans up resources after all packages are fetched

## Use Cases

Multiple package fetching is ideal for:

- Fetching a subset of related packages (e.g., all JavaScript runtimes)
- Updating specific packages that have changed
- Testing with a small set of packages before fetching all
- Creating a custom collection of packages for your project
