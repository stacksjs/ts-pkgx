# qemu.org

> Package from pantry: qemu.org

## Package Information

- **Domain**: `qemu.org`
- **Name**: `qemu.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/qemu.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install qemu.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/glib@2`
- `capstone-engine.org^4`
- `pixman.org^0`
- `gnutls.org^3`
- `freedesktop.org/slirp^4`
- `virtualsquare.org/vde^2`
- `facebook.com/zstd^1`
- `invisible-island.net/ncurses^6`
- `libssh.org^0`
- `libpng.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['qemu.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/qemu.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
