# docbook.org

> A package from docbook.org

## Package Information

- **Domain**: `docbook.org`
- **Name**: `docbook.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +docbook.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `5.1.0`

</details>

**Latest Version**: `5.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +docbook.org@5.1.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `curl.se`
- `info-zip.org/unzip`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.docbookorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
