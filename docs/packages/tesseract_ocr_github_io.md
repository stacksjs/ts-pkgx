# tesseract

> Tesseract Open Source OCR Engine (main repository)

## Package Information

- **Domain**: `tesseract-ocr.github.io`
- **Name**: `tesseract`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tesseract-ocr.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tesseract
```

## Programs

This package provides the following executable programs:

- `tesseract`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `5.5.1`, `5.5.0`, `5.4.1`, `5.4.0`, `5.3.4`
- `5.3.3`, `5.3.2`, `5.3.1`, `5.3.0`

</details>

**Latest Version**: `5.5.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) tesseract -- $SHELL -i
```

## Dependencies

This package depends on:

- `cairographics.org@1`
- `unicode.org@71`
- `leptonica.org`
- `libarchive.org`
- `gnome.org/pango@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tesseract_ocr_github_io

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tesseract-ocr.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
