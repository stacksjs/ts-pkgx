# wayland.freedesktop.org

> A package from waylandfreedesktop.org

## Package Information

- **Domain**: `waylandfreedesktop.org`
- **Name**: `wayland.freedesktop.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wayland.freedesktop.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install waylandfreedesktop.org
```

## Programs

This package provides the following executable programs:

- `wayland-scanner`

## Aliases

This package can also be accessed using these aliases:

- `wayland-scanner`
- `wayland`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `1.23.93`, `1.23.92`, `1.23.91`, `1.23.1`, `1.23.0`
- `1.22.93`, `1.22.92`, `1.22.91`, `1.22.0`

</details>

**Latest Version**: `1.23.93`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +waylandfreedesktop.org@1.23.93 -- $SHELL -i
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
const pkg = pantry.waylandfreedesktoporg

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
