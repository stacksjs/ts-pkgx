# elfutils.org

> A package from elfutils.org

## Package Information

- **Domain**: `elfutils.org`
- **Name**: `elfutils.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/elfutils.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +elfutils.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `eu-addr2line`
- `eu-ar`
- `eu-elfclassify`
- `eu-elfcmp`
- `eu-elfcompress`
- `eu-elflint`
- `eu-findtextrel`
- `eu-nm`
- `eu-objdump`
- `eu-ranlib`
- `eu-readelf`
- `eu-size`
- `eu-stack`
- `eu-strings`
- `eu-strip`
- `eu-unstrip`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.193.0`, `0.192.0`, `0.191.0`, `0.190.0`, `0.189.0`

</details>

**Latest Version**: `0.193.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +elfutils.org@0.193.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `sourceware.org/bzip2`
- `tukaani.org/xz`
- `zlib.net`
- `facebook.com/zstd`
- `kernel.org/linux-headers`
- `gnu.org/m4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.elfutilsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/elfutils.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
