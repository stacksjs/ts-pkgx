# wayland

> A package from wayland.freedesktop.org

## Package Information

- **Domain**: `way.land`
- **Name**: `wayland`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) wayland-scanner
```

## Programs

This package provides the following executable programs:

- `wayland-scanner`

## Aliases

This package can also be accessed using these aliases:

- `wayland-scanner`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `1.23.92`, `1.23.91`, `1.23.1`, `1.23.0`, `1.22.93`
- `1.22.92`, `1.22.91`, `1.22.0`

</details>

**Latest Version**: `1.23.92`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +way.land@1.23.92 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libexpat.github.io`
- `sourceware.org/libffi`
- `gnome.org/libxml2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.wayland

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
