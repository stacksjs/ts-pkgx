# libmatio

> C library for reading and writing MATLAB MAT files

## Package Information

- **Domain**: `matiosourceforgeio`
- **Name**: `libmatio`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/matio.sourceforge.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) matdump
```

## Programs

This package provides the following executable programs:

- `matdump`

## Aliases

This package can also be accessed using these aliases:

- `matdump`
- `libmatio`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.5.28`, `1.5.27`, `1.5.26`, `1.5.25`, `1.5.24`
- `1.5.23`

</details>

**Latest Version**: `1.5.28`

### Install Specific Version

```bash
# Install specific version
pkgx libmatio@1.5.28
```

## Dependencies

This package depends on:

- `hdfgroup.org/HDF5`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.matiosourceforgeio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/matio.sourceforge.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
