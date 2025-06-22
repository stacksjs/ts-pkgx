# libraw.org

> Library for reading RAW files from digital photo cameras

## Package Information

- **Domain**: `libraw.org`
- **Name**: `libraw.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libraw.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libraw.org
```

## Programs

This package provides the following executable programs:

- `4channels`
- `dcraw_emu`
- `dcraw_half`
- `half_mt`
- `mem_image`
- `multirender_test`
- `postprocessing_benchmark`
- `raw-identify`
- `rawtextdump`
- `simple_dcraw`
- `unprocessed_raw`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.21.4`, `0.21.3`, `0.21.2`, `0.21.1`

</details>

**Latest Version**: `0.21.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libraw.org@0.21.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/jasper-software/jasper`
- `libjpeg-turbo.org`
- `littlecms.com`
- `zlib.net`
- `darwin:openmp.llvm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libraworg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libraw.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
