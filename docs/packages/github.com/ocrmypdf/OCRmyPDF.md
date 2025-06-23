# ocrmypdf

> OCRmyPDF adds an OCR text layer to scanned PDF files, allowing them to be searched

## Package Information

- **Domain**: `github.com/ocrmypdf/OCRmyPDF`
- **Name**: `ocrmypdf`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ocrmypdf/OCRmyPDF/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ocrmypdf
```

## Programs

This package provides the following executable programs:

- `ocrmypdf`

## Available Versions

<details>
<summary>Show all 36 versions</summary>

- `16.10.2`, `16.10.1`, `16.10.0`, `16.7.0`, `16.6.2`
- `16.6.1`, `16.6.0`, `16.5.0`, `16.4.3`, `16.4.2`
- `16.4.1`, `16.4.0`, `16.3.1`, `16.3.0`, `16.2.0`
- `16.1.2`, `16.1.1`, `16.1.0`, `16.0.4`, `16.0.3`
- `16.0.2`, `16.0.1`, `16.0.0`, `15.4.4`, `15.4.3`
- `15.4.2`, `15.4.1`, `15.4.0`, `15.3.1`, `15.3.0`
- `15.2.0`, `15.1.0`, `15.0.2`, `15.0.1`, `15.0.0`
- `14.4.0`

</details>

**Latest Version**: `16.10.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) ocrmypdf -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `qpdf.sourceforge.io^12 # as of 16.10.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.OCRmyPDF

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ocrmypdf/OCRmyPDF/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
