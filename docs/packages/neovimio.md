# nvim

> Ambitious Vim-fork focused on extensibility and agility

## Package Information

- **Domain**: `neovimio`
- **Name**: `nvim`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/neovim.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) nvim
```

## Programs

This package provides the following executable programs:

- `nvim`

## Aliases

This package can also be accessed using these aliases:

- `nvim`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `0.11.2`, `0.11.1`, `0.11.0`, `0.10.4`, `0.10.3`
- `0.10.2`, `0.10.1`, `0.10.0`, `0.9.5`, `0.9.4`
- `0.9.2`, `0.9.1`, `0.9.0`, `0.8.2`, `0.8.1`

</details>

**Latest Version**: `0.11.2`

### Install Specific Version

```bash
# Install specific version
pkgx nvim@0.11.2
```

## Dependencies

This package depends on:

- `gnu.org/gettext^0`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.neovimio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/neovim.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
