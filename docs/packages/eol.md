# endoflife.date

> CLI to show end-of-life dates for a number of products.

## Package Information

- **Domain**: `endoflife.date`
- **Name**: `endoflife.date`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/endoflife.date/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install eol
```

## Programs

This package provides the following executable programs:

- `eol`

## Aliases

This package can also be accessed using these aliases:

- `eol`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `0.22.0`, `0.21.0`, `0.20.0`, `0.19.0`, `0.18.0`
- `0.17.0`, `0.16.0`, `0.15.0`, `0.14.0`

</details>

**Latest Version**: `0.22.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +endoflife.date@0.22.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org^3.12`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.eol

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/endoflife.date/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
