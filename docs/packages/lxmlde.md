# lxml.de

> The lxml XML toolkit for Python

## Package Information

- **Domain**: `lxmlde`
- **Name**: `lxml.de`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lxml.de/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +lxml.de -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `5.4.0`, `5.3.2`, `5.3.1`, `5.3.0`, `5.2.2`
- `5.2.1`, `5.2.0`, `5.1.1`, `5.1.0`, `5.0.2`
- `5.0.1`, `5.0.0`, `4.9.4`, `4.9.3`

</details>

**Latest Version**: `5.4.0`

### Install Specific Version

```bash
# Install specific version
pkgx lxml.de@5.4.0
```

## Dependencies

This package depends on:

- `python.org^3.10`
- `gnome.org/libxml2~2.12`
- `gnome.org/libxslt^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.lxmlde

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/lxml.de/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
