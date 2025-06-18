# unidata.ucar.edu/netcdf

> Official GitHub repository for netCDF-C libraries and utilities.

## Package Information

- **Domain**: `unidata.ucar.edu/netcdf`
- **Name**: `unidata.ucar.edu/netcdf`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/unidata.ucar.edu/netcdf/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +unidata.ucar.edu/netcdf -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `nc-config`
- `nccopy`
- `ncdump`
- `ncgen`
- `ncgen3`

## Aliases

This package can also be accessed using these aliases:

- `netcdf`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `4.9.3`, `4.9.2`

</details>

**Latest Version**: `4.9.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +unidata.ucar.edu/netcdf@4.9.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `hdfgroup.org/HDF5`
- `sourceware.org/bzip2`
- `curl.se`
- `gnome.org/libxml2`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.unidataucaredunetcdf

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/unidata.ucar.edu/netcdf/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
