# x.org/xcb

> A package from x.org/xcb

## Package Information

- **Domain**: `x.org/xcb`
- **Name**: `x.org/xcb`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcb/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +x.org/xcb -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xcb`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.17.0`, `1.16.1`, `1.16.0`, `1.15.0`

</details>

**Latest Version**: `1.17.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xcb@1.17.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/xau^1`
- `x.org/xdmcp^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxcb

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcb/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
