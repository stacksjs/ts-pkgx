# iconv

> A library for character encoding conversion

## Package Information

- **Domain**: `gnu.org/libiconv`
- **Name**: `iconv`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libiconv/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install iconv
```

## Programs

This package provides the following executable programs:

- `iconv`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.18.0`, `1.17.0`

</details>

**Latest Version**: `1.18.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) iconv -- $SHELL -i
```

## Dependencies

This package depends on:

- `linux:gnu.org/gcc/libstdcxx@14`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.iconv

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libiconv/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
