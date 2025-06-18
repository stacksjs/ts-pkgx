# qhull.org

> Qhull development for www.qhull.org -- Qhull 2020.2 (8.1-alpha1) at https://github.com/qhull/qhull/wiki

## Package Information

- **Domain**: `qhull.org`
- **Name**: `qhull.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/qhull.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +qhull.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `qconvex`
- `qdelaunay`
- `qhalf`
- `qhull`
- `qvoronoi`
- `rbox`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `8.0.2`

</details>

**Latest Version**: `8.0.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +qhull.org@8.0.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `cmake.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.qhullorg

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
