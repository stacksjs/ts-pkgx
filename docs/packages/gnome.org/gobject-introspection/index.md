# gobject-introspection

> Package from pantry: gnome.org/gobject-introspection

## Package Information

- **Domain**: `gnome.org/gobject-introspection`
- **Name**: `gobject-introspection`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gobject-introspection/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/gobject-introspection
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnome.org/glib@2`
- `sourceware.org/libffi@3`
- `gnu.org/bison^3 #NOTE macOS provides v2`
- `python.org>=3<3.12`
- `github.com/westes/flex@2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['gobject-introspection']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/gobject-introspection/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
