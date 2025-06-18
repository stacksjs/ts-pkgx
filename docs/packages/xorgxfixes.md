# x.org/xfixes

> A package from x.org/xfixes

## Package Information

- **Domain**: `x.org/xfixes`
- **Name**: `x.org/xfixes`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xfixes/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xfixes -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xfixes`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `6.0.1`

</details>

**Latest Version**: `6.0.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xfixes@6.0.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxfixes

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xfixes/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
