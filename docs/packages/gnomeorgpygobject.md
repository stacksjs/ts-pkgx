# gnome.org/PyGObject

> A package from gnome.org/PyGObject

## Package Information

- **Domain**: `gnome.org/PyGObject`
- **Name**: `gnome.org/PyGObject`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/PyGObject/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +gnome.org/PyGObject -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `gnome.org/pygobject`
- `PyGObject`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `3.51.0`, `3.50.0`, `3.49.0`, `3.48.2`, `3.48.1`
- `3.48.0`, `3.47.0`, `3.46.0`

</details>

**Latest Version**: `3.51.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnome.org/PyGObject@3.51.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/gobject-introspection`
- `cairographics.org/pycairo`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnomeorgpygobject

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/PyGObject/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
