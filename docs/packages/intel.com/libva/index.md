# libva

> Package from pantry: intel.com/libva

## Package Information

- **Domain**: `intel.com/libva`
- **Name**: `libva`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/intel.com/libva/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install intel.com/libva
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `dri.freedesktop.org`
- `x.org/x11`
- `x.org/exts`
- `x.org/xfixes`
- `wayland.freedesktop.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libva

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/intel.com/libva/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
