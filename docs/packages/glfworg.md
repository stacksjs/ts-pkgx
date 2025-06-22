# glfw.org

> Package from pantry: glfw.org

## Package Information

- **Domain**: `glfw.org`
- **Name**: `glfw.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/glfw.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install glfw.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `linux:freeglut.sourceforge.io^3.4`
- `linux:x.org/xcursor^1.2`
- `linux:xkbcommon.org^1.0`
- `linux:mesa3d.org^23.3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.glfworg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/glfw.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
