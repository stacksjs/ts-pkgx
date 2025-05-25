# glfw.org

> A multi-platform library for OpenGL, OpenGL ES, Vulkan, window and input

## Package Information

- **Domain**: `glfworg`
- **Name**: `glfw.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/glfw.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +glfw.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `3.4.0`, `3.3.10`, `3.3.9`

</details>

**Latest Version**: `3.4.0`

### Install Specific Version

```bash
# Install specific version
pkgx glfw.org@3.4.0
```

## Dependencies

This package depends on:

- `linuxfreeglut.sourceforge.io^3.4x.org/xcursor^1.2xkbcommon.org^1.0mesa3d.org^23.3`
- `freeglut.sourceforge.io^3.4`
- `x.org/xcursor^1.2`
- `xkbcommon.org^1.0`
- `mesa3d.org^23.3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['glfworg']

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
