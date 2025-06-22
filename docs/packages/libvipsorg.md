# libvips.org

> A fast image processing library with low memory needs.

## Package Information

- **Domain**: `libvips.org`
- **Name**: `libvips.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libvips.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libvips.org
```

## Programs

This package provides the following executable programs:

- `vips`
- `vipsedit`
- `vipsheader`
- `vipsprofile`
- `vipsthumbnail`

## Aliases

This package can also be accessed using these aliases:

- `vips`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `8.17.0`, `8.16.1`, `8.16.0`, `8.15.5`, `8.15.3`
- `8.15.2`, `8.15.1`, `8.15.0`, `8.14.5`

</details>

**Latest Version**: `8.17.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libvips.org@8.17.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `mozilla.org/mozjpeg`
- `cairographics.org`
- `heasarc.gsfc.nasa.gov/cfitsio`
- `github.com/dloebl/cgif`
- `fftw.org`
- `freedesktop.org/fontconfig`
- `gnu.org/gettext`
- `gnome.org/glib`
- `graphicsmagick.org`
- `jpeg.org/jpegxl`
- `libexif.github.io`
- `gnome.org/libgsf`
- `github.com/strukturag/libheif`
- `pngquant.org/lib`
- `matio.sourceforge.io`
- `gnome.org/librsvg`
- `libspng.org`
- `simplesystems.org/libtiff`
- `littlecms.com`
- `openexr.com`
- `openjpeg.org`
- `gstreamer.freedesktop.org/orc`
- `gnome.org/pango`
- `poppler.freedesktop.org`
- `google.com/webp`
- `libexpat.github.io`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libvipsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libvips.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
