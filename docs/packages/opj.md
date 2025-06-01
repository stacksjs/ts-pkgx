# opj

> Official repository of the OpenJPEG project

## Package Information

- **Domain**: `opj`
- **Name**: `opj`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openjpeg.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +openjpeg.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `opj_compress`
- `opj_decompress`
- `opj_dump`

## Aliases

This package can also be accessed using these aliases:

- `+openjpeg.org -- $SHELL -i`
- `opj`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `2.5.3`, `2.5.2`, `2.5.1`, `2.5.0`

</details>

**Latest Version**: `2.5.3`

### Install Specific Version

```bash
# Install specific version
pkgx opj@2.5.3
```

## Dependencies

This package depends on:

- `libpng.org^1`
- `simplesystems.org/libtiff^4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.opj

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openjpeg.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
