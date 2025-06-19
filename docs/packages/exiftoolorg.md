# exiftool.org

> Perl lib for reading and writing EXIF metadata

## Package Information

- **Domain**: `exiftool.org`
- **Name**: `exiftool.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install exiftool
```

## Programs

This package provides the following executable programs:

- `exiftool`

## Aliases

This package can also be accessed using these aliases:

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
sh <(curl https://pkgx.sh) +exiftool.org@13.30.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `perl.org`
- `perl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.exiftoolorg

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
