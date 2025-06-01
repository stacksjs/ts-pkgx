# leptonica.org

> Leptonica is an open source library containing software that is broadly useful for image processing and image analysis applications. The official github repository for Leptonica is: danbloomberg/leptonica.  See leptonica.org for more documentation.

## Package Information

- **Domain**: `+leptonicaorg  $shell i`
- **Name**: `leptonica.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/leptonica.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +leptonica.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `convertfilestopdf`
- `convertfilestops`
- `convertformat`
- `convertsegfilestopdf`
- `convertsegfilestops`
- `converttopdf`
- `converttops`
- `fileinfo`
- `imagetops`
- `xtractprotos`

## Aliases

This package can also be accessed using these aliases:

- `+leptonica.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.85.0`, `1.84.1`, `1.84.0`, `1.83.1`

</details>

**Latest Version**: `1.85.0`

### Install Specific Version

```bash
# Install specific version
pkgx leptonica.org@1.85.0
```

## Dependencies

This package depends on:

- `giflib.sourceforge.io@5`
- `libjpeg-turbo.org@2`
- `libpng.org@1`
- `simplesystems.org/libtiff@4`
- `openjpeg.org`
- `google.com/webp`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+leptonicaorg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/leptonica.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
