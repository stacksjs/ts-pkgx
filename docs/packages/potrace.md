# sf.net/potrace

> Convert bitmaps to vector graphics

## Package Information

- **Domain**: `sourceforge.net/potrace`
- **Name**: `sf.net/potrace`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/potrace/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sourceforge.net/potrace
```

## Programs

This package provides the following executable programs:

- `potrace`
- `mkbitmap`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.16.0`

</details>

**Latest Version**: `1.16.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sourceforge.net/potrace@1.16.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.potrace

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
