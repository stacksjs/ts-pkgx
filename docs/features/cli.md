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
bun run pkgx:fetch-all

# Generate package documentation
bun run pkgx:docs

# Show version information
bun run pkgx:version
```

## Single Package Fetching

Fetch information about a single package:

```bash
# Basic usage
bun run pkgx:fetch node

# With custom options
bun run pkgx:fetch nodejs.org --output ./custom-dir --timeout 60000

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
bun run pkgx:fetch-all

# With custom options
bun run pkgx:fetch-all --output ./data/packages --timeout 180000

# Limit the number of packages (for testing)
bun run pkgx:fetch-all --limit 50
```

## Fetch Modes

ts-pkgx supports multiple methods for fetching package information:

```bash
# Default mode (GitHub API with optimized batch processing)
bun run pkgx:fetch-all

# Web scraping mode
bun run pkgx:fetch-all --mode scrape

# Legacy mode (not recommended)
bun run pkgx:fetch-all --mode basic
```

## Documentation Generation

Generate comprehensive documentation of all packages:

```bash
# Generate package catalog with default settings
bun run pkgx:docs

# Custom output path
bun run pkgx:docs --output ./custom-docs.md
```

This creates a well-organized markdown document with all packages grouped by category.

## Customization Options

The CLI commands support various options:

```bash
# Custom output directory
bun run pkgx:fetch node --output ./data/packages

# Custom timeout
bun run pkgx:fetch-all --timeout 180000

# Debug mode
bun run pkgx:fetch node --debug

# GitHub API cache duration
bun run pkgx:fetch-all --github-cache-duration 120
```

## Shell Script Usage

ts-pkgx can be used as a shell script:

```bash
# Make the script executable
chmod +x ./pkgx-tools

# Use directly
./pkgx-tools fetch node
./pkgx-tools fetch-all --limit 10
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
    "build": "bun build && bun run pkgx:fetch-all",
    "update-packages": "bun run pkgx:update",
    "generate-docs": "bun run pkgx:docs"
  }
}
```

This allows you to automate package fetching and updating as part of your build process.
