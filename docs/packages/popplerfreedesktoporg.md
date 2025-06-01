# poppler.freedesktop.org

> Crafters of fine Open Source products

## Package Information

- **Domain**: `poppler.freedesktop.org`
- **Name**: `poppler.freedesktop.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/package.yml)

## Installation

```bash
# Install with pkgx
pkgx poppler.freedesktop.org
```

## Programs

This package provides the following executable programs:

- `pdfattach`
- `pdfdetach`
- `pdffonts`
- `pdfimages`
- `pdfinfo`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `1.58.0`, `1.16.0`, `25.5.0`, `25.4.0`, `25.3.0`
- `25.2.0`, `25.1.0`, `24.9.0`

</details>

**Latest Version**: `1.58.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +poppler.freedesktop.org@1.58.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.popplerfreedesktoporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
