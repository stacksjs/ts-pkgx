# x.org/xaw

> A package from x.org/xaw

## Package Information

- **Domain**: `x.org/xaw`
- **Name**: `x.org/xaw`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xaw/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xaw -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xaw`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.0.16`, `1.0.15`

</details>

**Latest Version**: `1.0.16`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xaw@1.0.16 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/exts`
- `x.org/xmu`
- `x.org/xt`
- `x.org/xpm`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxaw

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xaw/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
