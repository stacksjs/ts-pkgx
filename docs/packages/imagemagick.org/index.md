# imagemagick.org

> ImageMagick is a powerful, open-source software suite for creating, editing, converting, and manipulating images in over 200 formats. Ideal for web developers, graphic designers, and researchers, it offers versatile tools for image processing, including batch processing, format conversion, and complex image transformations.

## Package Information

- **Domain**: `imagemagick.org`
- **Name**: `imagemagick.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/imagemagick.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install imagemagick.org
```

## Programs

This package provides the following executable programs:

- `animate`
- `compare`
- `composite`
- `conjure`
- `convert`
- `display`
- `identify`
- `import`
- `magick`
- `magick-script`
- `Magick++-config`
- `MagickCore-config`
- `MagickWand-config`
- `mogrify`
- `montage`
- `stream`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `7.1.1.27`, `7.1.1.12`, `7.1.0.61`

</details>

**Latest Version**: `7.1.1.27`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +imagemagick.org@7.1.1.27 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libpng.org`
- `ijg.org`
- `freetype.org`
- `libjpeg-turbo.org`
- `liblqr.wikidot.com`
- `simplesystems.org/libtiff`
- `gnu.org/libtool`
- `littlecms.com`
- `openexr.com`
- `openjpeg.org`
- `google.com/webp`
- `tukaani.org/xz`
- `sourceware.org/bzip2`
- `gnome.org/libxml2`
- `zlib.net^1`
- `jpeg.org/jpegxl`
- `perl.org`
- `libzip.org`
- `darwinopenmp.llvm.orggithub.com/strukturag/libheif`
- `openmp.llvm.org`
- `github.com/strukturag/libheif`
- `linux/x86-64github.com/strukturag/libheif`
- `github.com/strukturag/libheif`
- `linuxx.org/x11`
- `x.org/x11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['imagemagick.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/imagemagick.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
