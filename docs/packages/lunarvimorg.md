# lunarvim.org

> 🌙 LunarVim is an IDE layer for Neovim. Completely free and community driven.

## Package Information

- **Domain**: `lunarvimorg`
- **Name**: `lunarvim.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lunarvim.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +lunarvim.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `lvim`
- `nvim`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.4.0`, `1.3.0`

</details>

**Latest Version**: `1.4.0`

### Install Specific Version

```bash
# Install specific version
pkgx lunarvim.org@1.4.0
```

## Dependencies

This package depends on:

- `gnu.org/bash`
- `crates.io/fd-find`
- `pip.pypa.io`
- `python.org^3`
- `nodejs.org`
- `rust-lang.org/cargo`
- `neovim.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['lunarvimorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/lunarvim.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
