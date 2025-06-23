# freeglut.sourceforge.io

> Free implementation of the OpenGL Utility Toolkit (GLUT)

## Package Information

- **Domain**: `freeglut.sourceforge.io`
- **Name**: `freeglut.sourceforge.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freeglut.sourceforge.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install freeglut.sourceforge.io
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `3.6.0`, `3.4.0`

</details>

**Latest Version**: `3.6.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +freeglut.sourceforge.io@3.6.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `x.org/x11`
- `x.org/xi`
- `x.org/xrandr`
- `x.org/xxf86vm`
- `mesa3d.org`
- `linux:freedesktop.org/mesa-glu`
- `linux:x.org/xinput`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['freeglut.sourceforge.io']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freeglut.sourceforge.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
