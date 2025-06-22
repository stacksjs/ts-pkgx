# libarchive.org

> Package from pantry: libarchive.org

## Package Information

- **Domain**: `libarchive.org`
- **Name**: `libarchive.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libarchive.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libarchive.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

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
