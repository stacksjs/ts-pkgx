# Midnight Commander

> Terminal-based visual file manager

## Package Information

- **Domain**: `+midnightcommanderorg  $shell i`
- **Name**: `Midnight Commander`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/midnight-commander.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +midnight-commander.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mc`
- `mcdiff`
- `mcedit`
- `mcview`

## Aliases

This package can also be accessed using these aliases:

- `+midnight-commander.org -- $SHELL -i`
- `Midnight Commander`
- `midnight commander`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `4.8.33`, `4.8.32`, `4.8.31`, `4.8.30`, `4.8.29`
- `4.8.28`

</details>

**Latest Version**: `4.8.33`

### Install Specific Version

```bash
# Install specific version
pkgx Midnight Commander@4.8.33
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses`
- `gnome.org/glib>=2.30`
- `gnu.org/gettext>=0.18.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+midnightcommanderorg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/midnight-commander.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
