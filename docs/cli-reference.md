# CLI Reference

ts-pkgx provides a powerful command-line interface for working with pkgx.dev packages. This page documents all the available commands and their options.

## Installation

The CLI commands are available when you install ts-pkgx:

```bash
bun install ts-pkgx
```

## Commands Overview

| Command | Description |
|---------|-------------|
| `pkgx-tools fetch [packageName]` | Fetch a single package, multiple packages, or all packages |
| `pkgx-tools generate-index` | Generate TypeScript index file for packages |
| `pkgx-tools generate-ts` | Generate TypeScript files from cached JSON |
| `pkgx-tools generate-aliases` | Generate TypeScript aliases file for packages |
| `pkgx-tools generate-docs` | Generate comprehensive VitePress documentation for all packages |
| `pkgx-tools update-pantry` | Download and extract the latest pantry.tgz file |
| `pkgx-tools generate-consts` | Generate or update the consts.ts file with all known packages |
| `pkgx-tools version` | Display version information |

## fetch Command

The `fetch` command retrieves package information from pkgx.dev for one or more packages using the pantry-based approach.

### Usage

```bash
# Fetch a single package
pkgx-tools fetch [packageName] [options]

# Fetch multiple specific packages
pkgx-tools fetch --pkg <packageNames> [options]

# Fetch all packages
pkgx-tools fetch --all [options]
```

### Arguments

- `packageName`: Optional name of a single package to fetch (e.g., 'node', 'bun.sh', 'agwa.name/git-crypt')

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-a, --all` | Fetch all packages | `false` |
| `-p, --pkg <packageNames>` | Comma-separated list of package names to fetch | - |
| `-o, --output-dir <dir>` | Directory to save package data | `src/packages` |
| `-c, --cache-dir <dir>` | Directory to cache package data | `.cache/packages` |
| `-n, --no-cache` | Disable caching | `false` |
| `-e, --cache-expiration <minutes>` | Cache expiration time in minutes | `1440` (24 hours) |
| `-l, --limit <count>` | Limit the number of packages to fetch (use with --all) | - |
| `-t, --timeout <ms>` | Timeout for network requests in milliseconds | `20000` |
| `-r, --max-retries <count>` | Maximum retry attempts for failed requests | `3` |
| `-j, --json` | Save as JSON instead of TypeScript | `false` |
| `-d, --debug` | Enable debug mode (save screenshots) | `false` |
| `-v, --verbose` | Enable verbose output | `false` |
| `-y, --concurrency <count>` | Number of packages to fetch concurrently | `8` |
| `--output-json` | Output results as JSON (for CI integration) | `false` |

### Examples

```bash
# Fetch a single package
pkgx-tools fetch node

# Fetch a package with specific path
pkgx-tools fetch agwa.name/git-crypt

# Fetch multiple packages
pkgx-tools fetch --pkg node,bun,python

# Fetch packages with custom output directory and timeout
pkgx-tools fetch --pkg "nodejs.org,python.org" --output-dir ./custom-packages --timeout 60000

# Save as JSON instead of TypeScript
pkgx-tools fetch --pkg "go.dev,rust-lang.org" --json

# Fetch all packages with a limit
pkgx-tools fetch --all --limit 50

# Fetch with increased concurrency and verbose output
pkgx-tools fetch --all --concurrency 12 --verbose

# Fetch with custom cache settings
pkgx-tools fetch --all --cache-expiration 120 --no-cache

# Output JSON for CI integration
pkgx-tools fetch --pkg "node,bun,python" --output-json
```

## generate-index Command

Generate a TypeScript index file for packages with comprehensive JSDoc documentation and alias support.

### Usage

```bash
pkgx-tools generate-index [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-o, --output-dir <dir>` | Directory containing package files | `src/packages` |

### Examples

```bash
# Generate index with default settings
pkgx-tools generate-index

# With custom output directory
pkgx-tools generate-index --output-dir ./custom/packages
```

## generate-ts Command

Generate TypeScript files from cached JSON files.

### Usage

```bash
pkgx-tools generate-ts [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `--cache-dir <dir>` | Directory with cached JSON files | `.cache/packages` |
| `--output-dir <dir>` | Output directory for TypeScript files | `packages` |

### Examples

```bash
# Generate TypeScript from cached JSON
pkgx-tools generate-ts

# With custom directories
pkgx-tools generate-ts --cache-dir ./custom-cache --output-dir ./custom-output
```

## generate-aliases Command

Generate a TypeScript aliases file for packages.

### Usage

```bash
pkgx-tools generate-aliases
```

### Examples

```bash
# Generate aliases file
pkgx-tools generate-aliases
```

## generate-docs Command

Generate comprehensive VitePress documentation for all packages.

### Usage

```bash
pkgx-tools generate-docs [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-o, --output-dir <dir>` | Output directory for documentation | `docs` |

### Examples

```bash
# Generate documentation with default settings
pkgx-tools generate-docs

# Generate documentation with custom output directory
pkgx-tools generate-docs --output-dir ./custom-docs
```

## update-pantry Command

Download and extract the latest pantry.tgz file from the pkgx distribution.

### Usage

```bash
pkgx-tools update-pantry [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-d, --pantry-dir <dir>` | Directory to extract pantry files | `src/pantry` |

### Examples

```bash
# Update pantry with default settings
pkgx-tools update-pantry

# Update pantry to custom directory
pkgx-tools update-pantry --pantry-dir ./my-pantry
```

## generate-consts Command

Generate or update the consts.ts file with all known packages from either the local pantry or S3 registry.

### Usage

```bash
pkgx-tools generate-consts [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-s, --source <source>` | Source for packages: "pantry" or "registry" | `pantry` |
| `--pantry-dir <dir>` | Directory containing pantry files | `src/pantry` |
| `--validate` | Validate a sample of packages (slower but more accurate) | `false` |

### Examples

```bash
# Generate consts from local pantry
pkgx-tools generate-consts

# Generate consts from S3 registry
pkgx-tools generate-consts --source registry

# Generate with validation
pkgx-tools generate-consts --source registry --validate

# Use custom pantry directory
pkgx-tools generate-consts --pantry-dir ./my-pantry
```

## Using with Bun Scripts

You can also use the pre-configured Bun scripts:

```bash
# Fetch commands
bun run pkgx:fetch node
bun run pkgx:fetch-all

# Generate documentation
bun run pkgx:docs
```

## Using Compiled Binaries

For faster execution, you can use the compiled binaries that are distributed with the package:

```bash
# Run directly from bin directory
./bin/pkgx-tools fetch node

# Create a symlink in your path
ln -s $(pwd)/bin/pkgx-tools /usr/local/bin/pkgx-tools
pkgx-tools fetch node
```

## Type Safety Features

The CLI commands work seamlessly with ts-pkgx's comprehensive type safety features:

```bash
# Type-safe package names are validated at runtime
pkgx-tools fetch node          # ✅ Valid alias
pkgx-tools fetch nodejs.org    # ✅ Valid domain
pkgx-tools fetch invalid-pkg   # ❌ Will show error for invalid package

# Nested package paths are supported
pkgx-tools fetch agwa.name/git-crypt  # ✅ Valid nested package
```

## CI Integration

Use the `--output-json` flag for CI integration:

```bash
# Output structured JSON for CI systems
pkgx-tools fetch --pkg "node,bun,python" --output-json
```

This outputs structured JSON with information about processed packages, friendly names, and success status.

## Environment Variables

ts-pkgx respects the following environment variables:

- `DEBUG`: Set to `true` to enable debug mode
- `NODE_ENV`: Affects logging behavior

## Advanced Usage

### Cache Management

Control caching behavior for better performance:

```bash
# Use fresh data (disable cache)
pkgx-tools fetch --all --no-cache

# Custom cache expiration (in minutes)
pkgx-tools fetch --all --cache-expiration 60

# Custom cache directory
pkgx-tools fetch --all --cache-dir ./my-cache
```

### Performance Tuning

Optimize performance for large operations:

```bash
# Increase concurrency for faster fetching
pkgx-tools fetch --all --concurrency 20

# Set longer timeout for slow networks
pkgx-tools fetch --all --timeout 60000

# Limit packages for testing
pkgx-tools fetch --all --limit 10
```

### Development and Debugging

Enable debugging and verbose output:

```bash
# Enable debug mode (saves screenshots)
pkgx-tools fetch node --debug

# Verbose output for detailed logging
pkgx-tools fetch --pkg "node,bun" --verbose

# Both debug and verbose
pkgx-tools fetch --all --debug --verbose --limit 5
```
