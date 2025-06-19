# gnu.org/findutils

> A package from gnu.org/findutils

## Package Information

- **Domain**: `gnu.org/findutils`
- **Name**: `gnu.org/findutils`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/findutils/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +gnu.org/findutils -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `find`
- `locate`
- `updatedb`
- `xargs`

## Aliases

This package can also be accessed using these aliases:

- `findutils`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `4.10.0`, `4.9.0`

</details>

**Latest Version**: `4.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/findutils@4.10.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuorgfindutils

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/findutils/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
