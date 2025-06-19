# spawn.link

> a featureful union filesystem

## Package Information

- **Domain**: `spawn.link`
- **Name**: `spawn.link`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/spawn.link/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +spawn.link -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mergerfs`
- `mergerfs-fusermount`
- `mount.mergerfs`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `2.40.2`, `2.40.1`, `2.40.0`, `2.39.0`, `2.38.0`
- `2.37.1`, `2.37.0`, `2.36.0`, `2.35.1`

</details>

**Latest Version**: `2.40.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +spawn.link@2.40.2 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.spawnlink

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/spawn.link/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
