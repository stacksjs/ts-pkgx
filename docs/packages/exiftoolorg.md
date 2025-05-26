# exiftool

> Perl lib for reading and writing EXIF metadata

## Package Information

- **Domain**: `exiftoolorg`
- **Name**: `exiftool`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) exiftool
```

## Programs

This package provides the following executable programs:

- `exiftool`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `13.30.0`, `13.25.0`, `13.10.0`, `13.0.0`, `12.76.0`
- `12.75.0`, `12.70.0`, `12.60.0`

</details>

**Latest Version**: `13.30.0`

### Install Specific Version

```bash
# Install specific version
pkgx exiftool@13.30.0
```

## Dependencies

This package depends on:

- `perl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['exiftoolorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
