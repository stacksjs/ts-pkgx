# eigen.tuxfamily.org

> 

## Package Information

- **Domain**: `eigentuxfamilyorg`
- **Name**: `eigen.tuxfamily.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/eigen.tuxfamily.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +eigen.tuxfamily.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `3.4.0`

</details>

**Latest Version**: `3.4.0`

### Install Specific Version

```bash
# Install specific version
pkgx eigen.tuxfamily.org@3.4.0
```

## Dependencies

This package depends on:

- `linuxgnu.org/gcc/libstdcxx@14`
- `gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['eigentuxfamilyorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/eigen.tuxfamily.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
