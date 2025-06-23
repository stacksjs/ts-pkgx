# gnu.org/findutils

> Basic directory searching utilities of the GNU operating system

## Package Information

- **Domain**: `gnu.org/findutils`
- **Name**: `gnu.org/findutils`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/findutils/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/findutils
```

## Programs

This package provides the following executable programs:

- `find`
- `locate`
- `updatedb`
- `xargs`

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
const pkg = pantry['gnu.org/findutils']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/findutils/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
