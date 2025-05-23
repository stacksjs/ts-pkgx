# CLI Tools

ts-pkgx provides a comprehensive set of command-line tools for working with pkgx.dev packages.

## Command Overview

ts-pkgx offers several CLI commands:

```bash
# Fetch a single package
bun run pkgx:fetch node

# Fetch multiple specific packages
bun run pkgx:fetch --pkg node,bun,python

# Fetch all packages
bun run pkgx:fetch --all

# Generate package index
bun run pkgx:generate-index

# Generate TypeScript from cached JSON
bun run pkgx:generate-ts

# Generate aliases file
bun run pkgx:generate-aliases

# Generate package documentation
bun run pkgx:generate-docs

# Show version information
bun run pkgx:version
```

## Single Package Fetching

Fetch information about a single package:

```bash
# Basic usage
bun run pkgx:fetch node

# With custom options
bun run pkgx:fetch nodejs.org --output-dir ./custom-dir --timeout 60000

# Save as JSON instead of TypeScript
bun run pkgx:fetch bun --json
```

This command will fetch information about the specified package and save it to the output directory.

## Multiple Package Fetching

Fetch multiple packages at once using the `--pkg` option:

```bash
# Fetch multiple packages
bun run pkgx:fetch --pkg node,bun,python

# With custom options
bun run pkgx:fetch --pkg "go.dev,rust-lang.org" --json --timeout 60000
```

This allows you to fetch a specific set of packages in a single command.

## Bulk Fetching

Fetch all available packages:

```bash
# Default settings
bun run pkgx:fetch --all

# With custom options
bun run pkgx:fetch --all --output-dir ./data/packages --timeout 180000

# Limit the number of packages (for testing)
bun run pkgx:fetch --all --limit 50

# Control concurrency
bun run pkgx:fetch --all --concurrency 15
```

## Caching Options

ts-pkgx provides caching capabilities to avoid unnecessary network requests:

```bash
# Use custom cache directory
bun run pkgx:fetch --all --cache-dir ./my-cache

# Disable caching
bun run pkgx:fetch --all --no-cache

# Set custom cache expiration time (in minutes)
bun run pkgx:fetch --all --cache-expiration 60
```

## Index Generation

Generate the TypeScript index file for all packages:

```bash
# Generate index with default settings
bun run pkgx:generate-index

# With custom output directory
bun run pkgx:generate-index --output-dir ./custom/packages
```

## TypeScript Generation

Convert cached JSON files to TypeScript:

```bash
# Convert cached JSON to TypeScript
bun run pkgx:generate-ts

# With custom directories
bun run pkgx:generate-ts --cache-dir ./custom-cache --output-dir ./ts-packages
```

## Aliases Generation

Generate a TypeScript file with package aliases:

```bash
# Generate aliases file
bun run pkgx:generate-aliases
```

## Documentation Generation

Generate comprehensive documentation of all packages:

```bash
# Generate package catalog with default settings
bun run pkgx:generate-docs

# Custom output path
bun run pkgx:generate-docs --output ./custom-docs.md
```

This creates a well-organized markdown document with all packages grouped by category.

## Customization Options

The CLI commands support various options:

```bash
# Custom output directory
bun run pkgx:fetch node --output-dir ./data/packages

# Custom timeout
bun run pkgx:fetch --all --timeout 180000

# Debug mode
bun run pkgx:fetch node --debug

# Enable verbose output
bun run pkgx:fetch --all --verbose
```

## Shell Script Usage

ts-pkgx can be used as a shell script:

```bash
# Make the script executable
chmod +x ./pkgx-tools

# Use directly
./pkgx-tools fetch node
./pkgx-tools fetch --all --limit 10
```

## Compiled Binaries

For faster execution, ts-pkgx can be compiled to binaries for different platforms:

```bash
# Compile for the current platform
bun run compile

# Compile for all supported platforms
bun run compile:all
```

The resulting binaries can be distributed and used without requiring Bun or Node.js to be installed.

## Integration with Build Systems

The CLI commands can be integrated into build systems:

```json
// package.json
{
  "scripts": {
    "build": "bun build && bun run pkgx:fetch --all",
    "update-packages": "bun run pkgx:fetch --all",
    "generate-docs": "bun run pkgx:generate-docs"
  }
}
```

This allows you to automate package fetching and updating as part of your build process.
