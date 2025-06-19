# x.org/xpm

> A package from x.org/xpm

## Package Information

- **Domain**: `x.org/xpm`
- **Name**: `x.org/xpm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xpm/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/xpm -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xpm`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `3.5.17`, `3.5.15`

</details>

**Latest Version**: `3.5.17`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xpm@3.5.17 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `zlib.net^1.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxpm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xpm/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
