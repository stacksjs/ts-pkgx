# sf.net/e2fsprogs

> Utilities for the ext2, ext3, and ext4 file systems

## Package Information

- **Domain**: `sf.net/e2fsprogs`
- **Name**: `sf.net/e2fsprogs`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/e2fsprogs/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +sourceforge.net/e2fsprogs -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `chattr`
- `compile_et`
- `lsattr`
- `mk_cmds`
- `uuidgen`

## Aliases

This package can also be accessed using these aliases:

- `e2fsprogs`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.47.2`, `1.47.1`, `1.47.0`

</details>

**Latest Version**: `1.47.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sf.net/e2fsprogs@1.47.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `darwingnu.org/gettext^0.22`
- `gnu.org/gettext^0.22`
- `linuxgithub.com/util-linux/util-linux^2.39`
- `github.com/util-linux/util-linux^2.39`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sfnete2fsprogs

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/e2fsprogs/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
