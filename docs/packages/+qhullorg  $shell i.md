# qhull.org

> Qhull development for www.qhull.org -- Qhull 2020.2 (8.1-alpha1) at https://github.com/qhull/qhull/wiki

## Package Information

- **Domain**: `+qhullorg  $shell i`
- **Name**: `qhull.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +qhull.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `qconvex`
- `qdelaunay`
- `qhalf`
- `qhull`
- `qvoronoi`
- `rbox`

## Aliases

This package can also be accessed using these aliases:

- `+qhull.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `8.0.2`

</details>

**Latest Version**: `8.0.2`

### Install Specific Version

```bash
# Install specific version
pkgx qhull.org@8.0.2
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+qhullorg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
