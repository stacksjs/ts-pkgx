# gtk3

> Package from pantry: gtk.org/gtk3

## Package Information

- **Domain**: `gtk.org/gtk3`
- **Name**: `gtk3`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk3/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gtk.org/gtk3
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/atk`
- `gnome.org/gdk-pixbuf`
- `gnome.org/glib`
- `gnome.org/gsettings-desktop-schemas`
- `freedesktop.org/icon-theme`
- `github.com/anholt/libepoxy`
- `gnome.org/pango`
- `gnome.org/libxslt`
- `x.org/x11`
- `x.org/exts`
- `x.org/xrender`
- `x.org/xrandr`
- `x.org/xi`
- `ebassi.github.io/graphene`
- `xkbcommon.org`
- `debian.org/iso-codes`
- `freedesktop.org/at-spi2-atk`
- `linux:cairographics.org`
- `linux:wayland.freedesktop.org/protocols`
- `linux:x.org/protocol`
- `linux:openprinting.github.io/cups`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gtk_org_gtk3

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk3/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
