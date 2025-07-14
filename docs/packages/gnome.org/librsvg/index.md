# librsvg

> Package from pantry: gnome.org/librsvg

## Package Information

- **Domain**: `gnome.org/librsvg`
- **Name**: `librsvg`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/librsvg/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/librsvg
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `cairographics.org^1.18`
- `gnome.org/pango@1`
- `gnome.org/gdk-pixbuf@2`
- `gnome.org/glib@2`
- `gnu.org/gettext^0.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.librsvg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/librsvg/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
