# gnu.org/plotutils

> C/C++ function library for exporting 2-D vector graphics

## Package Information

- **Domain**: `gnu.org/plotutils`
- **Name**: `gnu.org/plotutils`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/plotutils/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +gnu.org/plotutils -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `double`
- `graph`
- `ode`
- `pic2plot`
- `plot`
- `plotfont`
- `spline`
- `tek2plot`

## Aliases

This package can also be accessed using these aliases:

- `plotutils`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.6.0`

</details>

**Latest Version**: `2.6.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/plotutils@2.6.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libpng.org^1.6`
- `libraw.org^0.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuorgplotutils

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/plotutils/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
