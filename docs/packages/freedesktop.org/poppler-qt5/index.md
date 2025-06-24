# poppler-qt5

> Package from pantry: freedesktop.org/poppler-qt5

## Package Information

- **Domain**: `freedesktop.org/poppler-qt5`
- **Name**: `poppler-qt5`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/poppler-qt5/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install freedesktop.org/poppler-qt5
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnupg.org/libassuan^2`
- `cairographics.org^1`
- `freedesktop.org/fontconfig^2`
- `freetype.org^2`
- `gnu.org/gettext^0`
- `gnome.org/libxml2~2.13 # since 25.4.0, 2.14 changed the API version`
- `gnome.org/glib^2`
- `gnupg.org/gpgme^1`
- `gnupg.org/libgpg-error^1`
- `libjpeg-turbo.org^2`
- `libpng.org^1`
- `simplesystems.org/libtiff^4`
- `littlecms.com^2`
- `mozilla.org/nss^3`
- `openjpeg.org^2`
- `qt.io~5`
- `curl.se^8`
- `darwin:gnupg.org/libassuan^2`
- `linux:gnu.org/gcc`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['poppler-qt5']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/poppler-qt5/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
