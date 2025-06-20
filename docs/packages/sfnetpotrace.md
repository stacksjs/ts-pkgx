# sf.net/potrace

> Convert bitmaps to vector graphics

## Package Information

- **Domain**: `sf.net/potrace`
- **Name**: `sf.net/potrace`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/potrace/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +sourceforge.net/potrace -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `potrace`
- `mkbitmap`

## Aliases

This package can also be accessed using these aliases:

- `potrace`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.16.0`

</details>

**Latest Version**: `1.16.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sf.net/potrace@1.16.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sfnetpotrace

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/potrace/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
