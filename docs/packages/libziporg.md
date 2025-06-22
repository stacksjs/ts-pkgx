# libzip.org

> Package from pantry: libzip.org

## Package Information

- **Domain**: `libzip.org`
- **Name**: `libzip.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libzip.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `facebook.com/zstd>=1.5.0`
- `darwin:sourceware.org/bzip2>=1.0.8`
- `darwin:tukaani.org/xz>=5.2.7`
- `darwin:zlib.net>=1.2.13`
- `linux:openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libziporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
