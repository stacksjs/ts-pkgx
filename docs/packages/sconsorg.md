# scons

> Substitute for classic 'make' tool with autoconf/automake functionality

## Package Information

- **Domain**: `sconsorg`
- **Name**: `scons`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/scons.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) scons
```

## Programs

This package provides the following executable programs:

- `scons`

## Aliases

This package can also be accessed using these aliases:

- `scons`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `4.9.1`, `4.9.0`, `4.8.1`, `4.8.0`, `4.7.0`
- `4.6.0`, `4.5.2`

</details>

**Latest Version**: `4.9.1`

### Install Specific Version

```bash
# Install specific version
pkgx scons@4.9.1
```

## Dependencies

This package depends on:

- `python.org~3.11`
- `linuxgnu.org/gcc>=10`
- `gnu.org/gcc>=10`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sconsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/scons.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
