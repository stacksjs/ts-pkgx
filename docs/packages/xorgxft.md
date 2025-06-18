# x.org/xft

> A package from x.org/xft

## Package Information

- **Domain**: `x.org/xft`
- **Name**: `x.org/xft`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xft/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +x.org/xft -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `xft`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `2.3.9`, `2.3.8`

</details>

**Latest Version**: `2.3.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +x.org/xft@2.3.9 -- $SHELL -i
```

## Dependencies

This package depends on:

- `freedesktop.org/fontconfig^2.14`
- `x.org/xrender^0.9`
- `sourceware.org/bzip2^1`
- `zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xorgxft

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xft/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
