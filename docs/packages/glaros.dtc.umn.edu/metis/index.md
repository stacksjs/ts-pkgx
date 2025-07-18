# metis

> Programs that partition graphs and order matrices

## Package Information

- **Domain**: `glaros.dtc.umn.edu/metis`
- **Name**: `metis`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/glaros.dtc.umn.edu/metis/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install metis
```

## Programs

This package provides the following executable programs:

- `cmpfillin`
- `gpmetis`
- `graphchk`
- `m2gmetis`
- `mpmetis`
- `ndmetis`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `5.2.1.1`, `5.1.0.4`, `5.1.0.3`

</details>

**Latest Version**: `5.2.1.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +glaros.dtc.umn.edu/metis@5.2.1.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.metis

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/glaros.dtc.umn.edu/metis/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
