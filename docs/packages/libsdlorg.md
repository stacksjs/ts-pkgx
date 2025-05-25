# libsdl.org

> Simple Directmedia Layer

## Package Information

- **Domain**: `libsdlorg`
- **Name**: `libsdl.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libsdl.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 32 versions</summary>

- `3.2.14`, `3.2.12`, `3.2.10`, `3.2.8`, `3.2.6`
- `3.2.4`, `3.2.2`, `3.2.0`, `2.32.6`, `2.32.4`
- `2.32.2`, `2.32.0`, `2.30.12`, `2.30.11`, `2.30.10`
- `2.30.9`, `2.30.8`, `2.30.7`, `2.30.6`, `2.30.5`
- `2.30.4`, `2.30.3`, `2.30.2`, `2.30.1`, `2.30.0`
- `2.28.5`, `2.28.4`, `2.28.3`, `2.28.2`, `2.28.1`
- `2.28.0`, `2.26.5`

</details>

**Latest Version**: `3.2.14`

### Install Specific Version

```bash
# Install specific version
pkgx libsdl.org@3.2.14
```

## Dependencies

This package depends on:

- `linuxx.org/x11x.org/xcursorx.org/xix.org/xrandrx.org/xfixesx.org/xrenderx.org/xscrnsaverx.org/exts`
- `x.org/x11`
- `x.org/xcursor`
- `x.org/xi`
- `x.org/xrandr`
- `x.org/xfixes`
- `x.org/xrender`
- `x.org/xscrnsaver`
- `x.org/exts`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['libsdlorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libsdl.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
