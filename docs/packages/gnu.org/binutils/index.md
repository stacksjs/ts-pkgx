# gnu.org/binutils

> GNU binary tools for native development

## Package Information

- **Domain**: `gnu.org/binutils`
- **Name**: `gnu.org/binutils`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/binutils/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/binutils
```

## Programs

This package provides the following executable programs:

- `addr2line`
- `ar`
- `c++filt`
- `elfedit`
- `nm`
- `objcopy`
- `objdump`
- `ranlib`
- `readelf`
- `size`
- `strings`
- `strip`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `2.45.0`, `2.44.0`, `2.43.1`, `2.43.0`, `2.42.0`
- `2.41.0`, `2.40.0`, `2.39.0`

</details>

**Latest Version**: `2.45.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/binutils@2.45.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['gnu.org/binutils']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/binutils/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
