# proj

> PROJ - Cartographic Projections and Coordinate Transformations Library

## Package Information

- **Domain**: `projorg`
- **Name**: `proj`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) proj
```

## Programs

This package provides the following executable programs:

- `proj`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `9.6.0`, `9.5.1`, `9.5.0`, `9.4.1`, `9.4.0`
- `9.3.1`, `9.3.0`, `9.2.1`, `9.2.0`

</details>

**Latest Version**: `9.6.0`

### Install Specific Version

```bash
# Install specific version
pkgx proj@9.6.0
```

## Dependencies

This package depends on:

- `simplesystems.org/libtiff`
- `sqlite.org`
- `curl.se`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['projorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/proj.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
