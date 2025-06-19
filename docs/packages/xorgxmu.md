# x.org/xmu

> A package from x.org/xmu

## Package Information

- **Domain**: `x.org/xmu`
- **Name**: `x.org/xmu`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xmu/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/xmu -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xmu`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.2.1`, `1.2.0`, `1.1.4`

</details>

**Latest Version**: `1.2.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xmu@1.2.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/exts`
- `x.org/xt`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxmu

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xmu/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
