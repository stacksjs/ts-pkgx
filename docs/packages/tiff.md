# libtiff

> TIFF library and utilities

## Package Information

- **Domain**: `simplesystems.org/libtiff`
- **Name**: `libtiff`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/simplesystems.org/libtiff/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +simplesystems.org/libtiff -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `tiffcp`
- `tiffdump`
- `tiffinfo`
- `tiffset`
- `tiffsplit`

## Aliases

This package can also be accessed using these aliases:

- `tiff`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `4.7.0`, `4.6.0`, `4.5.1`, `4.5.0`

</details>

**Latest Version**: `4.7.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +simplesystems.org/libtiff@4.7.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `facebook.com/zstd^1`
- `libjpeg-turbo.org^2`
- `zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tiff

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/simplesystems.org/libtiff/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
