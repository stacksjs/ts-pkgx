# glew.sourceforge.io

> The OpenGL Extension Wrangler Library

## Package Information

- **Domain**: `glewsourceforge.io`
- **Name**: `glew.sourceforge.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/glew.sourceforge.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +glew.sourceforge.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `glewinfo`
- `visualinfo`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.2.0`

</details>

**Latest Version**: `2.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +glewsourceforge.io@2.2.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `cmake.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.glewsourceforgeio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/glew.sourceforge.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
