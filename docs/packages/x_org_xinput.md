# xinput

> Package from pantry: x.org/xinput

## Package Information

- **Domain**: `x.org/xinput`
- **Name**: `xinput`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinput/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install x.org/xinput
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/exts`
- `x.org/xi`
- `x.org/xinerama`
- `x.org/xrandr`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.x_org_xinput

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinput/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
