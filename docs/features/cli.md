# CLI Tools

ts-pkgx provides a comprehensive set of command-line tools for working with pkgx packages using a pantry-based approach.

## Command Overview

ts-pkgx offers several CLI commands:

```bash
# Fetch a single package
pkgx-tools fetch node

# Fetch multiple specific packages
pkgx-tools fetch --pkg node,bun,python

# Fetch all packages
pkgx-tools fetch --all

# Update local pantry
pkgx-tools update-pantry

# Generate constants file
pkgx-tools generate-consts

# Generate package index
pkgx-tools generate-index

# Generate TypeScript from cached JSON
pkgx-tools generate-ts

# Generate aliases file
pkgx-tools generate-aliases

# Generate package documentation
pkgx-tools generate-docs

# Show version information
pkgx-tools version
```

You can also use the Bun scripts:

```bash
# Bun script alternatives
bun run pkgx:fetch node
bun run pkgx:fetch-all
bun run pkgx:docs
```

## Single Package Fetching

Fetch information about a single package using the pantry-based approach:

```bash
# Basic usage
pkgx-tools fetch node

# With custom options
pkgx-tools fetch nodejs.org --output-dir ./custom-dir --timeout 60000

# Save as JSON instead of TypeScript
pkgx-tools fetch bun --json

# With debugging enabled
pkgx-tools fetch rust-lang.org --debug --verbose

# Nested packages
pkgx-tools fetch agwa.name/git-crypt
```

This command fetches information from the local pantry and generates comprehensive TypeScript files with JSDoc documentation.

## Multiple Package Fetching

Fetch multiple packages at once using the `--pkg` option:

```bash
# Fetch multiple packages
pkgx-tools fetch --pkg node,bun,python

# With custom options
pkgx-tools fetch --pkg "go.dev,rust-lang.org" --json --timeout 60000

# Include nested packages
pkgx-tools fetch --pkg "node,agwa.name/git-crypt,aws.amazon.com/cli"

# CI integration
pkgx-tools fetch --pkg "node,bun,python" --output-json
```

This allows you to fetch a specific set of packages in a single command with intelligent caching.

## Bulk Fetching

Fetch all available packages from the local pantry:

```bash
# Default settings
pkgx-tools fetch --all

# With custom options
pkgx-tools fetch --all --output-dir ./data/packages --timeout 60000

# Limit the number of packages (for testing)
pkgx-tools fetch --all --limit 50

# Control concurrency for performance
pkgx-tools fetch --all --concurrency 12

# Conservative settings for slow networks
pkgx-tools fetch --all --concurrency 4 --timeout 120000
```

## Pantry Management

Manage the local pantry for package information:

```bash
# Download and extract latest pantry
pkgx-tools update-pantry

# Use custom pantry directory
pkgx-tools update-pantry --pantry-dir ./my-pantry

# Generate constants file from pantry
pkgx-tools generate-consts --source pantry

# Generate constants from S3 registry (alternative)
pkgx-tools generate-consts --source registry --validate

# Use custom pantry location
pkgx-tools generate-consts --pantry-dir ./my-pantry
```

## Caching Options

ts-pkgx provides sophisticated caching capabilities:

```bash
# Use custom cache directory
pkgx-tools fetch --all --cache-dir ./my-cache

# Disable caching for fresh data
pkgx-tools fetch --all --no-cache

# Set custom cache expiration time (in minutes)
pkgx-tools fetch --all --cache-expiration 30

# Use longer cache for CI environments
pkgx-tools fetch --all --cache-expiration 1440  # 24 hours
```

## Index Generation

Generate the TypeScript index file for all packages with comprehensive JSDoc:

```bash
# Generate index with default settings
pkgx-tools generate-index

# With custom output directory
pkgx-tools generate-index --output-dir ./custom/packages
```

The generated index includes:
- Comprehensive JSDoc documentation for each package
- Alias properties for easy access
- Type-safe property names
- Links to package documentation

## TypeScript Generation

Convert cached JSON files to TypeScript with enhanced documentation:

```bash
# Convert cached JSON to TypeScript
pkgx-tools generate-ts

# With custom directories
pkgx-tools generate-ts --cache-dir ./custom-cache --output-dir ./ts-packages
```

This generates TypeScript files with:
- Rich JSDoc documentation
- Alias-based variable naming
- Comprehensive type information
- Links to documentation

## Aliases Generation

Generate a TypeScript file with package aliases:

```bash
# Generate aliases file
pkgx-tools generate-aliases
```

## Documentation Generation

Generate comprehensive VitePress documentation of all packages:

```bash
# Generate package documentation with default settings
pkgx-tools generate-docs

# Custom output directory
pkgx-tools generate-docs --output-dir ./custom-docs
```

This creates well-organized documentation with:
- Package categorization
- Complete package information
- Installation instructions
- Links to source code and homepages

## Advanced CLI Options

The CLI commands support various advanced options:

```bash
# Performance tuning
pkgx-tools fetch --all --concurrency 15 --timeout 30000

# Debug mode with verbose output
pkgx-tools fetch node --debug --verbose

# CI integration with structured JSON output
pkgx-tools fetch --pkg "node,bun,python" --output-json

# Conservative settings for unreliable networks
pkgx-tools fetch --all --timeout 180000 --max-retries 5
```

## Compiled Binaries

For faster execution, ts-pkgx can be compiled to binaries for different platforms:

```bash
# Compile for the current platform
bun run compile

# Compile for all supported platforms
bun run compile:all

# Available platforms:
# - Linux x64/ARM64
# - Windows x64
# - macOS x64/ARM64
```

The resulting binaries can be distributed and used without requiring Bun or Node.js to be installed.

## Environment Configuration

Configure CLI behavior through environment variables:

```bash
# Enable debug mode
DEBUG=true pkgx-tools fetch node

# Set NODE_ENV for different behaviors
NODE_ENV=production pkgx-tools fetch --all
```

## CI/CD Integration

The CLI commands are designed for CI/CD environments:

```bash
# Get structured JSON output for parsing
result=$(pkgx-tools fetch --pkg "node,bun,python" --output-json)

# Parse results in CI scripts
echo "$result" | jq '.success'
echo "$result" | jq -r '.updatedPackages[]'

# Fail CI if packages couldn't be fetched
pkgx-tools fetch --pkg "required-packages" --output-json | jq -e '.success'
```

## Integration with Build Systems

The CLI commands can be integrated into build systems:

```json
// package.json
{
  "scripts": {
    "update:pantry": "pkgx-tools update-pantry",
    "update:packages": "pkgx-tools fetch --all",
    "update:specific": "pkgx-tools fetch --pkg node,bun,python",
    "generate:docs": "pkgx-tools generate-docs",
    "generate:consts": "pkgx-tools generate-consts",
    "build": "npm run update:packages && npm run generate:docs"
  }
}
```

## Performance Optimization

Optimize CLI performance for different scenarios:

```bash
# High-performance setup (good network, powerful machine)
pkgx-tools fetch --all --concurrency 15 --timeout 30000 --cache-expiration 60

# Conservative setup (slower network or machine)
pkgx-tools fetch --all --concurrency 4 --timeout 120000 --cache-expiration 1440

# Testing setup (quick validation)
pkgx-tools fetch --all --limit 20 --concurrency 8 --verbose

# Development setup (frequent updates)
pkgx-tools fetch --all --cache-expiration 10 --debug
```

## Error Handling and Debugging

Troubleshoot issues with enhanced debugging:

```bash
# Enable verbose output for troubleshooting
pkgx-tools fetch problematic-package --verbose

# Full debug mode with screenshots
pkgx-tools fetch problematic-package --debug --verbose

# Increase timeout for slow packages
pkgx-tools fetch slow-package --timeout 180000

# Disable cache to get fresh data
pkgx-tools fetch problematic-package --no-cache
```

## Resource Management

The CLI automatically manages browser resources and includes safety mechanisms:
- **Automatic cleanup**: Browser resources are cleaned up after operations
- **Force exit timeout**: Prevents hung processes (25-minute maximum runtime)
- **Signal handling**: Graceful shutdown on SIGINT/SIGTERM
- **Memory management**: Optimized for handling large numbers of packages
