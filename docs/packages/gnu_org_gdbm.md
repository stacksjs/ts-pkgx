# gdbm

> GNU database manager

## Package Information

- **Domain**: `gnu.org/gdbm`
- **Name**: `gdbm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gdbm/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gdbm
```

## Programs

This package provides the following executable programs:

- `gdbm_dump`
- `gdbm_load`
- `gdbmtool`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.25.0`, `1.24.0`, `1.23.0`

</details>

**Latest Version**: `1.25.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/gdbm@1.25.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnu_org_gdbm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gdbm/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
