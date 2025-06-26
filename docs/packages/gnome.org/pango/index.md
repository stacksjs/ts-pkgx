# pango

> Package from pantry: gnome.org/pango

## Package Information

- **Domain**: `gnome.org/pango`
- **Name**: `pango`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/pango/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnome.org/pango
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `cairographics.org^1.18`
- `freetype.org@2`
- `gnome.org/glib@2`
- `harfbuzz.org@8`
- `freedesktop.org/fontconfig@2`
- `sourceware.org/libffi@3`
- `gnu.org/fribidi@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pango

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnome.org/pango/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
