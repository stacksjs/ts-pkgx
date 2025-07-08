# gtk4

> Package from pantry: gtk.org/gtk4

## Package Information

- **Domain**: `gtk.org/gtk4`
- **Name**: `gtk4`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk4/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gtk.org/gtk4
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/gdk-pixbuf^2.42`
- `gnome.org/glib^2.78`
- `gnome.org/librsvg^2.60 # since 4.19.2`
- `ebassi.github.io/graphene^1.10`
- `freedesktop.org/icon-theme^0.17`
- `libjpeg-turbo.org^2`
- `github.com/anholt/libepoxy^1.5.10`
- `libpng.org^1.6`
- `simplesystems.org/libtiff^4.6`
- `gnome.org/pango^1.50`
- `openprinting.github.io/cups^2.4`
- `github.com/KhronosGroup/Vulkan-Loader^1`
- `github.com/google/shaderc^2023`
- `linux:x.org/xi^1.8`
- `linux:x.org/xinerama^1.1`
- `linux:x.org/xcursor^1.2`
- `linux:xkbcommon.org^1.6`
- `linux:cairographics.org^1.18`
- `linux:wayland.freedesktop.org/protocols^1.43 # since 4.19.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gtk4

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gtk.org/gtk4/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
