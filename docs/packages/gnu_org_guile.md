# guile

> Package from pantry: gnu.org/guile

## Package Information

- **Domain**: `gnu.org/guile`
- **Name**: `guile`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/guile/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/guile
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `hboehm.info/gc^8`
- `gnu.org/gmp^6`
- `gnu.org/libtool^2`
- `gnu.org/libunistring^1`
- `freedesktop.org/pkg-config^0.29 # guile-config is a wrapper around pkg-config.`
- `gnu.org/readline^8`
- `gnu.org/gperf^3`
- `sourceware.org/libffi^3`
- `github.com/besser82/libxcrypt^4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnu_org_guile

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/guile/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
