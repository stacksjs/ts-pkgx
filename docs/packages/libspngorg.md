# libspng.org

> Simple, modern libpng alternative

## Package Information

- **Domain**: `libspngorg`
- **Name**: `libspng.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libspng.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libspng.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.5.0`

</details>

**Latest Version**: `0.5.0`

### Install Specific Version

```bash
# Install specific version
pkgx libspng.org@0.5.0
```

## Dependencies

This package depends on:

- `darwinzlib.net`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['libspngorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libspng.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
