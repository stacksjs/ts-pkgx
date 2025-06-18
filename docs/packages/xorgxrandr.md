# x.org/xrandr

> A package from x.org/xrandr

## Package Information

- **Domain**: `x.org/xrandr`
- **Name**: `x.org/xrandr`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xrandr/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xrandr -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xrandr`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.5.4`, `1.5.3`

</details>

**Latest Version**: `1.5.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xrandr@1.5.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/protocol`
- `x.org/exts`
- `x.org/xrender`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxrandr

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xrandr/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
