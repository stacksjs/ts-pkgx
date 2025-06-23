# gnu.org/gcc/libstdcxx

> The GNU Standard C++ Library v3

## Package Information

- **Domain**: `gnu.org/gcc/libstdcxx`
- **Name**: `gnu.org/gcc/libstdcxx`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gcc/libstdcxx/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/gcc/libstdcxx
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `15.1.0`, `14.3.0`, `14.2.0`, `14.1.0`, `13.3.0`
- `12.4.0`

</details>

**Latest Version**: `15.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/gcc/libstdcxx@15.1.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/binutils`
- `gnu.org/gmp>=4.2`
- `gnu.org/mpfr>=2.4.0`
- `gnu.org/mpc>=0.8.0`
- `zlib.net^1.3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libstdcxx

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gcc/libstdcxx/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
