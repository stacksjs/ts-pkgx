# xpra

> Persistent remote applications for X11; screen sharing for X11, MacOS and MSWindows.

## Package Information

- **Domain**: `xpra.org`
- **Name**: `xpra`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/xpra.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) xpra
```

## Programs

This package provides the following executable programs:

- `xpra`

## Aliases

This package can also be accessed using these aliases:

- `xpra`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `6.3.0`, `6.2.5`, `6.2.4`, `6.2.3`, `6.2.2`
- `6.2.1`, `6.2.0`, `6.1.3`, `6.1.2`

</details>

**Latest Version**: `6.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +xpra.org@6.3.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `python.org~3.11`
- `cython.org`
- `tukaani.org/xz`
- `cairographics.org`
- `cairographics.org/pycairo@1.26.1`
- `freedesktop.org/pkg-config~0.29`
- `gnome.org/PyGObject`
- `gnome.org/glib`
- `x.org/x11`
- `x.org/protocol`
- `x.org/exts`
- `x.org/xkbfile`
- `x.org/xdamage`
- `x.org/xrandr`
- `x.org/xcomposite`
- `x.org/xtst`
- `x.org/libxres`
- `x.org/xfixes`
- `videolan.org/x264`
- `webmproject.org/libvpx`
- `github.com/AOMediaCodec/libavif`
- `github.com/Cyan4973/xxHash`
- `gtk.org/gtk3`
- `gnome.org/gobject-introspection`
- `harfbuzz.org`
- `gnome.org/gdk-pixbuf`
- `gnome.org/atk`
- `gnome.org/pango`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xpraorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/xpra.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
