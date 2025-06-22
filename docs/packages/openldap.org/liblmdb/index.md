# liblmdb

> Lightning memory-mapped database: key-value data store

## Package Information

- **Domain**: `openldap.org/liblmdb`
- **Name**: `liblmdb`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/liblmdb/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install liblmdb
```

## Programs

This package provides the following executable programs:

- `mdb_copy`
- `mdb_dump`
- `mdb_load`
- `mdb_stat`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.9.33`

</details>

**Latest Version**: `0.9.33`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +openldap.org/liblmdb@0.9.33 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.liblmdb

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/liblmdb/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
