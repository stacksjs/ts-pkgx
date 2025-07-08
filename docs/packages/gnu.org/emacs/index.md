# emacs

> Package from pantry: gnu.org/emacs

## Package Information

- **Domain**: `gnu.org/emacs`
- **Name**: `emacs`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/emacs/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/emacs
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/libxml2^2.10.3`
- `invisible-island.net/ncurses^6.3.0`
- `libjpeg-turbo.org^2.1.5.1`
- `gnu.org/sed^4.9.0`
- `gnu.org/texinfo^7.0.1`
- `gnu.org/libidn2^2.3`
- `gnutls.org^3.6`
- `zlib.net^1.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.emacs

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/emacs/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
