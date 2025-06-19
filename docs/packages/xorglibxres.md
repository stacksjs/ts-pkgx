# x.org/libxres

> A package from x.org/libxres

## Package Information

- **Domain**: `x.org/libxres`
- **Name**: `x.org/libxres`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxres/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/libxres -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `libxres`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.2.2`

</details>

**Latest Version**: `1.2.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/libxres@1.2.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11^1`
- `x.org/exts`
- `x.org/protocol`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorglibxres

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxres/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
