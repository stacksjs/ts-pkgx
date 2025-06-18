# gnu.org/readline

> A package from gnu.org/readline

## Package Information

- **Domain**: `gnu.org/readline`
- **Name**: `gnu.org/readline`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/readline/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +gnu.org/readline -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `readline`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `8.2.13`, `8.2.0`, `8.1.0`

</details>

**Latest Version**: `8.2.13`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/readline@8.2.13 -- $SHELL -i
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses^6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuorgreadline

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/readline/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
