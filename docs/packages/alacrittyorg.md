# alacritty

> A cross-platform, OpenGL terminal emulator.

## Package Information

- **Domain**: `alacritty.org`
- **Name**: `alacritty`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/alacritty.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) alacritty
```

## Programs

This package provides the following executable programs:

- `alacritty`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.15.1`, `0.15.0`, `0.14.0`, `0.13.2`

</details>

**Latest Version**: `0.15.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +alacritty.org@0.15.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `linuxfreetype.orgfreedesktop.org/fontconfig`
- `freetype.org`
- `freedesktop.org/fontconfig`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.alacrittyorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/alacritty.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
