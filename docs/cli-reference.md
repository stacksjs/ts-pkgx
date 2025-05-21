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
| `pkgx-tools fetch-all` | Fetch all packages from pkgx.dev |
| `pkgx-tools generate-docs` | Generate package documentation for API reference |
| `pkgx-tools cleanup` | Fix package variable naming issues and regenerate index |
| `pkgx-tools version` | Display version information |

## fetch Command

The `fetch` command retrieves package information from pkgx.dev for one or more packages.

### Usage

```bash
bun run pkgx:fetch [packageName] [options]
# OR
bun run pkgx:fetch --pkg <packageNames> [options]
```

### Arguments

- `packageName`: Optional name of a single package to fetch

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-p, --pkg <packageNames>` | Comma-separated list of package names to fetch | - |
| `-o, --output <directory>` | Directory to save package data | `src/packages` |
| `-t, --timeout <milliseconds>` | Timeout in milliseconds | `30000` (30 seconds) |
| `-r, --retries <number>` | Number of retry attempts for failed fetches | `3` |
| `-v, --verbose` | Show more detailed output | `false` |
| `-d, --debug` | Enable debug mode to save error information | `false` |
| `-j, --json` | Save files as JSON instead of TypeScript | `false` |

### Examples

```bash
# Fetch a single package
bun run pkgx:fetch node

# Fetch a package with specific path
bun run pkgx:fetch agwa.name/git-crypt

# Fetch multiple packages
bun run pkgx:fetch --pkg node,bun,python

# Fetch packages with custom output directory and timeout
bun run pkgx:fetch --pkg "nodejs.org,python.org" --output ./custom-packages --timeout 60000

# Save as JSON instead of TypeScript
bun run pkgx:fetch --pkg "go.dev,rust-lang.org" --json
```

## fetch-all Command

The `fetch-all` command retrieves information for all packages available on pkgx.dev.

### Usage

```bash
bun run pkgx:fetch-all [options]
```

### Options

| Option | Description | Default |
|--------|-------------|---------|
| `-o, --output <directory>` | Directory to save package data | `src/packages` |
| `-t, --timeout <milliseconds>` | Timeout in milliseconds | `30000` (30 seconds) |
| `-l, --limit <number>` | Limit the number of packages to fetch | `undefined` (all packages) |
| `-r, --retries <number>` | Number of retry attempts for failed fetches | `3` |
| `-m, --mode <mode>` | Fetch mode: "basic", "complete", or "scrape" | `complete` |
| `-v, --verbose` | Show more detailed output | `false` |
| `-c, --cache-duration <minutes>` | GitHub API cache duration in minutes | `60` |
| `-w, --web-scraping` | Use web scraping to fetch package list instead of GitHub API | `false` |
| `-d, --debug` | Enable debug mode to save error information | `false` |
| `-j, --json` | Save files as JSON instead of TypeScript | `false` |

### Fetch Modes

- **complete** (default): Uses GitHub API with improved batch processing
- **scrape**: Uses web scraping for package discovery
- **basic**: Uses the legacy implementation (not recommended)

### Examples

```bash
# Fetch all packages with default settings
bun run pkgx:fetch-all

# Fetch all packages with increased timeout
bun run pkgx:fetch-all --timeout 60000

# Fetch limited number of packages
bun run pkgx:fetch-all --limit 50

# Use web scraping mode
bun run pkgx:fetch-all --mode scrape

# Change GitHub API cache duration to 2 hours
bun run pkgx:fetch-all --cache-duration 120
```

## generate-docs Command

The `generate-docs` command creates comprehensive documentation for all packages in the pantry, organized by category.

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

## cleanup Command

The `cleanup` command fixes package variable naming issues and regenerates the index file. This is useful when you have added new packages or encountered issues with variable names containing hyphens or other invalid characters.

### Usage

```bash
bun run pkgx:cleanup
```

### What it does

1. Scans all package files for variable names with hyphens or other invalid JavaScript identifiers
2. Fixes the variable and interface names to be valid JavaScript identifiers
3. Regenerates the index.ts file to reflect the changes

### Examples

```bash
# Run the cleanup process
bun run pkgx:cleanup

# Using the CLI directly
bun bin/cli.ts cleanup
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
./pkgx-tools fetch-all --limit 10
./pkgx-tools cleanup
```

## Environment Variables

ts-pkgx respects the following environment variables:

- `DEBUG`: Set to `true` to enable debug mode
- `GITHUB_TOKEN`: GitHub token for API requests (optional)
