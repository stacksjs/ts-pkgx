# x.org/xv

> A package from x.org/xv

## Package Information

- **Domain**: `x.org/xv`
- **Name**: `x.org/xv`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xv/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/xv -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xv`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.0.13`, `1.0.12`

</details>

**Latest Version**: `1.0.13`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xv@1.0.13 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/protocol`
- `x.org/exts`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxv

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xv/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
