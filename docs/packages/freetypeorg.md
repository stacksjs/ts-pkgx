# freetype.org

> A package from freetype.org

## Package Information

- **Domain**: `freetype.org`
- **Name**: `freetype.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freetype.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +freetype.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `2.13.3`, `2.13.2`, `2.13.1`, `2.12.1`

</details>

**Latest Version**: `2.13.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +freetype.org@2.13.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libpng.org@1`
- `zlib.net@1`
- `sourceware.org/bzip2@1`
- `freedesktop.org/pkg-config^0.29`
- `cmake.org`
- `freedesktop.org/pkg-config^0.29`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.freetypeorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freetype.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
