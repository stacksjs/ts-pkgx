# gdk-pixbuf

> Package from pantry: gnome.org/gdk-pixbuf

## Package Information

- **Domain**: `gnome.org/gdk-pixbuf`
- **Name**: `gdk-pixbuf`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gdk-pixbuf/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/gdk-pixbuf
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `ijg.org^9.6 # needs fixed major; sadly this includes the character > v9f`
- `gnome.org/glib@2`
- `libpng.org@1`
- `freedesktop.org/shared-mime-info^2 #FIXME only on Linux`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['gdk-pixbuf']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gdk-pixbuf/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
