# libtool

> A generic library support script

## Package Information

- **Domain**: `gnu.org/libtool`
- **Name**: `libtool`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtool/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install libtool
```

## Programs

This package provides the following executable programs:

- `libtool`
- `libtoolize`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `2.5.4`, `2.5.3`, `2.4.7`

</details>

**Latest Version**: `2.5.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/libtool@2.5.4 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libtool

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtool/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
