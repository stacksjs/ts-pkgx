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
| `pkgx-tools fetch` | Fetch a single package or multiple packages |
| `pkgx-tools fetch --all` | Fetch all packages from pkgx.dev |
| `pkgx-tools generate-index` | Generate TypeScript index file for packages |
| `pkgx-tools generate-ts` | Generate TypeScript files from cached JSON |
| `pkgx-tools generate-aliases` | Generate TypeScript aliases file for packages |
| `pkgx-tools generate-docs` | Generate package documentation for API reference |
| `pkgx-tools version` | Display version information |

## fetch Command

The `fetch` command retrieves package information from pkgx.dev for one or more packages.

### Usage

```bash
bun run pkgx:fetch [packageName] [options]
# OR
bun run pkgx:fetch --pkg <packageNames> [options]
# OR
bun run pkgx:fetch --all [options]
```

### Arguments

- `packageName`: Optional name of a single package to fetch

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
| `-t, --timeout <ms>` | Timeout for network requests in milliseconds | `30000` |
| `-r, --max-retries <count>` | Maximum retry attempts for failed requests | `3` |
| `-j, --json` | Save as JSON instead of TypeScript | `false` |
| `-d, --debug` | Enable debug mode (save screenshots) | `false` |
| `-v, --verbose` | Enable verbose output | `false` |
| `-y, --concurrency <count>` | Number of packages to fetch concurrently | `10` |

### Examples

```bash
# Fetch a single package
bun run pkgx:fetch node

# Fetch a package with specific path
bun run pkgx:fetch agwa.name/git-crypt

# Fetch multiple packages
bun run pkgx:fetch --pkg node,bun,python

# Fetch packages with custom output directory and timeout
bun run pkgx:fetch --pkg "nodejs.org,python.org" --output-dir ./custom-packages --timeout 60000

# Save as JSON instead of TypeScript
bun run pkgx:fetch --pkg "go.dev,rust-lang.org" --json

# Fetch all packages with a limit
bun run pkgx:fetch --all --limit 50

# Fetch with increased concurrency
bun run pkgx:fetch --all --concurrency 20
```

## generate-index Command

Generate a TypeScript index file for packages.

### Usage

```bash
bun run pkgx:generate-index [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-o, --output-dir <dir>` | Directory containing package files | `src/packages` |

### Examples

```bash
# Generate index with default settings
bun run pkgx:generate-index

# With custom output directory
bun run pkgx:generate-index --output-dir ./custom/packages
```

## generate-ts Command

Generate TypeScript files from cached JSON files.

### Usage

```bash
bun run pkgx:generate-ts [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `--cache-dir <dir>` | Directory with cached JSON files | `.cache/packages` |
| `--output-dir <dir>` | Output directory for TypeScript files | `packages` |

### Examples

```bash
# Generate TypeScript from cached JSON
bun run pkgx:generate-ts

# With custom directories
bun run pkgx:generate-ts --cache-dir ./custom-cache --output-dir ./custom-output
```

## generate-aliases Command

Generate a TypeScript aliases file for packages.

### Usage

```bash
bun run pkgx:generate-aliases
```

### Examples

```bash
# Generate aliases file
bun run pkgx:generate-aliases
```

## generate-docs Command

Generate comprehensive documentation for all packages.

### Usage

```bash
bun run pkgx:generate-docs [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-o, --output <path>` | Output path for the documentation | `docs/package-catalog.md` |

### Examples

```bash
# Generate documentation with default settings
bun run pkgx:generate-docs

# Generate documentation with custom output path
bun run pkgx:generate-docs --output ./docs/custom-package-list.md
```

## version Command

Displays the current version of pkgx-tools.

### Usage

```bash
bun run pkgx:version
```

## Using as Shell Scripts

You can also make scripts executable and use them directly:

```bash
# Make the script executable
chmod +x ./pkgx-tools

# Run commands directly
./pkgx-tools fetch node
./pkgx-tools fetch --all --limit 10
./pkgx-tools generate-index
./pkgx-tools generate-aliases
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

## Environment Variables

ts-pkgx respects the following environment variables:

- `DEBUG`: Set to `true` to enable debug mode
- `GITHUB_TOKEN`: GitHub token for API requests (increases rate limits)
