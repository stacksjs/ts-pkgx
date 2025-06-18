# libarchive.org

> Multi-format archive and compression library

## Package Information

- **Domain**: `libarchive.org`
- **Name**: `libarchive.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libarchive.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +libarchive.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bsdcat`
- `bsdcpio`
- `bsdtar`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `3.8.1`, `3.8.0`, `3.7.9`, `3.7.8`, `3.7.7`
- `3.7.6`, `3.7.5`, `3.7.4`, `3.7.3`, `3.7.2`
- `3.7.1`, `3.7.0`, `3.6.2`

</details>

**Latest Version**: `3.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libarchive.org@3.8.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/coreutils`
- `lz4.org@1`
- `tukaani.org/xz@5`
- `facebook.com/zstd@1`
- `sourceware.org/bzip2@1`
- `libexpat.github.io@2`
- `zlib.net@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libarchiveorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libarchive.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
