# itstool.org

> Translate XML with PO files using W3C Internationalization Tag Set rules

## Package Information

- **Domain**: `itstool.org`
- **Name**: `itstool.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install itstool.org
```

## Programs

This package provides the following executable programs:

- `itstool`

## Aliases

This package can also be accessed using these aliases:

- `itstool`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.0.7`

</details>

**Latest Version**: `2.0.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +itstool.org@2.0.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/libxml2`
- `python.org~3.11`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.itstoolorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
