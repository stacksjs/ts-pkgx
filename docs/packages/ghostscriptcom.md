# ghostscript.com

> This is purely for downloads, please check the website for full information

## Package Information

- **Domain**: `ghostscriptcom`
- **Name**: `ghostscript.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ghostscript.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +ghostscript.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `dvipdf`
- `eps2eps`
- `gpcl6`
- `gpcl6c`
- `gpdlc`
- `gs`
- `gsbj`
- `gsc`
- `gsdj`
- `gsdj500`
- `gslj`
- `gslp`
- `gsnd`
- `gsx`
- `gxps`
- `gxpsc`
- `lprsetup.sh`
- `pdf2dsc`
- `pdf2ps`
- `pf2afm`
- `pfbtopfa`
- `pphs`
- `printafm`
- `ps2ascii`
- `ps2epsi`
- `ps2pdf`
- `ps2pdf12`
- `ps2pdf13`
- `ps2pdf14`
- `ps2pdfwr`
- `ps2ps`
- `ps2ps2`
- `unix-lpr.sh`

## Aliases

This package can also be accessed using these aliases:

- `+ghostscript.com -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `10.5.1`, `10.4.0`, `10.3.1`, `10.3.0`, `10.2.1`
- `10.2.0`, `10.1.2`

</details>

**Latest Version**: `10.5.1`

### Install Specific Version

```bash
# Install specific version
pkgx ghostscript.com@10.5.1
```

## Dependencies

This package depends on:

- `zlib.net^1.2`
- `libpng.org^1.6`
- `libjpeg-turbo.org^2`
- `simplesystems.org/libtiff^4`
- `littlecms.com^2.15`
- `gnu.org/libidn^1.41`
- `freedesktop.org/fontconfig^2.14`
- `jbig2dec.com^0.19`
- `libexpat.github.io^2.5`
- `openjpeg.org^2.5`
- `freetype.org^2.13`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ghostscriptcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ghostscript.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
