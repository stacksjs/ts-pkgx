# glib

> Package from pantry: gnome.org/glib

## Package Information

- **Domain**: `gnome.org/glib`
- **Name**: `glib`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/glib
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnu.org/gettext^0.21`
- `sourceware.org/libffi@3`
- `pcre.org@8`
- `pcre.org/v2@10`
- `python.org^3 # several of the bins are scripts`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnome_org_glib

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/glib/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
