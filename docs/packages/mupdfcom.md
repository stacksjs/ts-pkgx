# mupdf.com

> Lightweight PDF and XPS viewer

## Package Information

- **Domain**: `mupdfcom`
- **Name**: `mupdf.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mupdf.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +mupdf.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mupdf-gl`
- `muraster`
- `mutool`

## Aliases

This package can also be accessed using these aliases:

- `+mupdf.com -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 27 versions</summary>

- `1.26.1`, `1.26.0`, `1.25.6`, `1.25.5`, `1.25.4`
- `1.25.3`, `1.25.2`, `1.25.1`, `1.25.0`, `1.24.11`
- `1.24.10`, `1.24.9`, `1.24.8`, `1.24.7`, `1.24.6`
- `1.24.5`, `1.24.4`, `1.24.3`, `1.24.2`, `1.24.1`
- `1.24.0`, `1.23.11`, `1.23.10`, `1.23.9`, `1.23.8`
- `1.23.7`, `1.23.6`

</details>

**Latest Version**: `1.26.1`

### Install Specific Version

```bash
# Install specific version
pkgx mupdf.com@1.26.1
```

## Dependencies

This package depends on:

- `zlib.net^1`
- `openssl.org^1.1`
- `info-zip.org/unzip^6`
- `github.com/google/brotli^1`
- `freetype.org^2`
- `harfbuzz.org^9`
- `mujs.com^1`
- `openjpeg.org^2`
- `jbig2dec.com^0`
- `darwinlibarchive.org^3`
- `libarchive.org^3`
- `linuxmesa3d.org^23freeglut.sourceforge.io^3freedesktop.org/mesa-glu^9x.org/protocol>=2022x.org/x11^1x.org/xcursor^1x.org/xinerama^1x.org/xrandr^1gnome.org/glib^2x.org/xtrans^1`
- `mesa3d.org^23`
- `freeglut.sourceforge.io^3`
- `freedesktop.org/mesa-glu^9`
- `x.org/protocol>=2022`
- `x.org/x11^1`
- `x.org/xcursor^1`
- `x.org/xinerama^1`
- `x.org/xrandr^1`
- `gnome.org/glib^2`
- `x.org/xtrans^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mupdfcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mupdf.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
