# poppler.freedesktop.org

>

## Package Information

- **Domain**: `popplerfreedesktoporg`
- **Name**: `poppler.freedesktop.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +poppler.freedesktop.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `pdfattach`
- `pdfdetach`
- `pdffonts`
- `pdfimages`
- `pdfinfo`
- `pdfseparate`
- `pdftocairo`
- `pdftohtml`
- `pdftoppm`
- `pdftops`
- `pdftotext`
- `pdfunite`

## Available Versions

<details>
<summary>Show all 16 versions</summary>

- `25.5.0`, `25.4.0`, `25.3.0`, `25.2.0`, `25.1.0`
- `24.12.0`, `24.11.0`, `24.10.0`, `24.9.0`, `24.8.0`
- `24.7.0`, `24.6.1`, `24.6.0`, `24.5.0`, `24.4.0`
- `22.12.0`

</details>

**Latest Version**: `25.5.0`

### Install Specific Version

```bash
# Install specific version
pkgx poppler.freedesktop.org@25.5.0
```

## Dependencies

This package depends on:

- `boost.org>=1.58.0`
- `cairographics.org>=1.16.0`
- `curl.se`
- `freedesktop.org/fontconfig>=2.13`
- `freetype.org>=2.10`
- `gnome.org/glib>=2.64`
- `gnome.org/libxml2~2.13`
- `libjpeg-turbo.org`
- `libpng.org`
- `openjpeg.org`
- `poppler.freedesktop.org/poppler-data`
- `simplesystems.org/libtiff`
- `zlib.net`
- `mozilla.org/nss>=3.68`
- `gnupg.org/gpgme>=1.19`
- `gnupg.org/libgpg-error@1`
- `gnupg.org/libassuan@2`
- `littlecms.com^2.9`
- `linuxgnu.org/gcc/libstdcxx@14`
- `gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.popplerfreedesktoporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
