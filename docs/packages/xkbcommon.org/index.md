# xkbcommon.org

> Package from pantry: xkbcommon.org

## Package Information

- **Domain**: `xkbcommon.org`
- **Name**: `xkbcommon.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xkbcommon.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/xcb`
- `freedesktop.org/XKeyboardConfig`
- `gnome.org/libxml2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['xkbcommon.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/xkbcommon.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
