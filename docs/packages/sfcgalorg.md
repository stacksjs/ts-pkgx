# sfcgal.org

> C++ wrapper library around CGAL

## Package Information

- **Domain**: `sfcgal.org`
- **Name**: `sfcgal.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sfcgal.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sfcgal-config
```

## Programs

This package provides the following executable programs:

- `sfcgal-config`

## Aliases

This package can also be accessed using these aliases:

- `sfcgal-config`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `2.1.0`, `2.0.0`, `1.5.2`, `1.5.1`, `1.5.0`
- `1.4.1`

</details>

**Latest Version**: `2.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sfcgal.org@2.1.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `boost.org`
- `cgal.org`
- `gnu.org/gmp`
- `gnu.org/mpfr`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sfcgalorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sfcgal.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
