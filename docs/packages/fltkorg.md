# fltk.org

> FLTK - Fast Light Tool Kit - https://github.com/fltk/fltk - cross platform GUI development

## Package Information

- **Domain**: `fltkorg`
- **Name**: `fltk.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/fltk.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +fltk.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `fluid`
- `fltk-config`

## Aliases

This package can also be accessed using these aliases:

- `+fltk.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.4.3`, `1.4.2`, `1.4.1`, `1.3.11`, `1.3.10`
- `1.3.9`

</details>

**Latest Version**: `1.4.3`

### Install Specific Version

```bash
# Install specific version
pkgx fltk.org@1.4.3
```

## Dependencies

This package depends on:

- `libjpeg-turbo.org^2`
- `libpng.org^1`
- `linuxx.org/xft^2x.org/xt^1freedesktop.org/mesa-glu^9`
- `x.org/xft^2`
- `x.org/xt^1`
- `freedesktop.org/mesa-glu^9`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.fltkorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/fltk.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
