# hdfgroup.org/HDF5

> A package from hdfgroup.org/HDF5

## Package Information

- **Domain**: `hdfgroup.org/HDF5`
- **Name**: `hdfgroup.org/HDF5`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/hdfgroup.org/HDF5/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +hdfgroup.org/HDF5 -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `h5c++`
- `h5cc`
- `h5clear`
- `h5copy`
- `h5debug`
- `h5delete`
- `h5diff`
- `h5dump`
- `h5fc`
- `h5format_convert`
- `h5import`
- `h5jam`
- `h5ls`
- `h5mkgrp`
- `h5perf_serial`
- `h5redeploy`
- `h5repack`
- `h5repart`
- `h5stat`
- `h5unjam`
- `h5watch`

## Aliases

This package can also be accessed using these aliases:

- `hdfgroup.org/hdf5`
- `HDF5`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.14.6`, `1.14.5`, `1.14.1`

</details>

**Latest Version**: `1.14.6`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +hdfgroup.org/HDF5@1.14.6 -- $SHELL -i
```

## Dependencies

This package depends on:

- `dkrz.de/libaec@1`
- `linuxzlib.net@1`
- `zlib.net@1`

## Related Packages

These packages work well with hdfgroup.org/HDF5:

- [`gnu.org/gcc`](gnuorggcc.md) - A package from gnu.org/gcc

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.hdfgrouporghdf5

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/hdfgroup.org/HDF5/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
