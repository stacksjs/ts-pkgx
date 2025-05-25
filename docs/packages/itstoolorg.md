# itstool

> Translate XML with PO files using W3C Internationalization Tag Set rules

## Package Information

- **Domain**: `itstoolorg`
- **Name**: `itstool`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) itstool
```

## Programs

This package provides the following executable programs:

- `itstool`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.0.7`

</details>

**Latest Version**: `2.0.7`

### Install Specific Version

```bash
# Install specific version
pkgx itstool@2.0.7
```

## Dependencies

This package depends on:

- `gnome.org/libxml2`
- `python.org~3.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['itstoolorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
