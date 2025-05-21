# ts-pkgx Documentation

This directory contains the documentation for the ts-pkgx project. The documentation is built using [VitePress](https://vitepress.dev/).

## Structure

The documentation is organized into the following sections:

### Get Started
- [Introduction](/intro.md): Overview of ts-pkgx and its purpose
- [Installation](/install.md): How to install ts-pkgx
- [Usage](/usage.md): Basic usage of ts-pkgx
- [Configuration](/config.md): Configuration options for ts-pkgx

### Features
- [Package Discovery](/features/discovery.md): How to discover and fetch packages
- [TypeScript Integration](/features/typescript.md): Integration with TypeScript
- [Package Management](/features/management.md): Managing packages and package files
- [Domain Handling](/features/domains.md): Working with domain paths and aliases
- [CLI Tools](/features/cli.md): Command-line tools provided by ts-pkgx
- [Batch Processing](/features/batch-processing.md): Efficient batch processing of packages
- [Multiple Package Fetching](/features/multiple-fetching.md): Fetching multiple packages at once

### Advanced
- [Custom Transformations](/advanced/transformations.md): Advanced package data transformation
- [Custom Output Formats](/advanced/output-formats.md): Generating custom output formats
- [Extending Aliases](/advanced/aliases.md): Customizing the alias system
- [Error Handling](/advanced/error-handling.md): Advanced error handling techniques
- [GitHub API Rate Limits](/advanced/rate-limits.md): Managing GitHub API rate limits
- [Optimized Batch Processing](/advanced/batch-processing.md): Advanced batch processing techniques

### Reference
- [CLI Reference](/cli-reference.md): Comprehensive CLI command reference
- [API Reference](/api-reference.md): API function and type reference
- [Package Catalog](/package-catalog.md): Auto-generated catalog of all packages

## Building the Documentation

To build the documentation locally:

```bash
# Navigate to the project root
cd ts-pkgx

# Install dependencies
bun install

# Start the development server
bun docs:dev

# Build the static site
bun docs:build
```

## Contributing

When adding new documentation:

1. Create the appropriate Markdown file in the relevant directory
2. Update the sidebar in `.vitepress/config.ts` to include the new page
3. Ensure the page is properly linked from other related pages

## Generating the Package Catalog

The Package Catalog is automatically generated from the current package data. To update it:

```bash
bun run pkgx:docs
```

This will scan all package files in the `src/packages` directory and generate a comprehensive catalog.
