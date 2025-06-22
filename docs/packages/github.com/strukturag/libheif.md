# heif

> libheif is an HEIF and AVIF file format decoder and encoder.

## Package Information

- **Domain**: `github.com/strukturag/libheif`
- **Name**: `heif`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/strukturag/libheif/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install heif
```

## Programs

This package provides the following executable programs:

- `heif-enc`
- `heif-info`
- `heif-thumbnailer`

## Available Versions

<details>
<summary>Show all 20 versions</summary>

- `1.19.8`, `1.19.7`, `1.19.6`, `1.19.5`, `1.19.4`
- `1.19.3`, `1.19.2`, `1.19.1`, `1.19.0`, `1.18.2`
- `1.18.1`, `1.18.0`, `1.17.6`, `1.17.5`, `1.17.4`
- `1.17.3`, `1.17.2`, `1.17.1`, `1.17.0`, `1.16.2`

</details>

**Latest Version**: `1.19.8`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/strukturag/libheif@1.19.8 -- $SHELL -i
```

## Dependencies

This package depends on:

- `aomedia.googlesource.com/aom`
- `libjpeg-turbo.org`
- `github.com/strukturag/libde265`
- `libpng.org`
- `freedesktop.org/shared-mime-info`
- `videolan.org/x265@3.2`
- `linux:gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.heif

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/strukturag/libheif/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
