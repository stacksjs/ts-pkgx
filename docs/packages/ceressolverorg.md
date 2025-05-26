# ceres-solver.org

>

## Package Information

- **Domain**: `ceressolverorg`
- **Name**: `ceres-solver.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ceres-solver.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +ceres-solver.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.2.0`, `2.1.0`

</details>

**Latest Version**: `2.2.0`

### Install Specific Version

```bash
# Install specific version
pkgx ceres-solver.org@2.2.0
```

## Dependencies

This package depends on:

- `eigen.tuxfamily.org`
- `gflags.github.io`
- `google.com/glog`
- `glaros.dtc.umn.edu/metis`
- `netlib.org/lapack`
- `people.engr.tamu.edu/davis/suitesparse`
- `github.com/oneapi-src/oneTBB`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ceressolverorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ceres-solver.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
