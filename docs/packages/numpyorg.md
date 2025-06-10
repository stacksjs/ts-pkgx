# f2py

> The fundamental package for scientific computing with Python.

## Package Information

- **Domain**: `numpy.org`
- **Name**: `f2py`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/numpy.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) f2py
```

## Programs

This package provides the following executable programs:

- `f2py`

## Available Versions

<details>
<summary>Show all 18 versions</summary>

- `2.3.0`, `2.2.6`, `2.2.5`, `2.2.4`, `2.2.3`
- `2.2.2`, `2.2.1`, `2.2.0`, `2.1.3`, `2.1.2`
- `2.1.1`, `2.1.0`, `2.0.2`, `2.0.1`, `2.0.0`
- `1.26.4`, `1.26.3`, `1.26.2`

</details>

**Latest Version**: `2.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +numpy.org@2.3.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openblas.net^0.3`
- `python.org^3.11`

## Related Packages

These packages work well with f2py:

- `gnu.org/gcc`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.numpyorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/numpy.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
