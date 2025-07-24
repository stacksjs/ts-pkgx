# cairographics.org

> Package from pantry: cairographics.org

## Package Information

- **Domain**: `cairographics.org`
- **Name**: `cairographics.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cairographics.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `libpng.org@1`
- `pixman.org^0.40.0`
- `freetype.org@2`
- `gnome.org/glib@2`
- `freedesktop.org/fontconfig@2`
- `sourceware.org/bzip2@1`
- `x.org/x11`
- `x.org/xcb`
- `x.org/exts`
- `x.org/xrender`
- `oberhumer.com/lzo`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['cairographics.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cairographics.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
