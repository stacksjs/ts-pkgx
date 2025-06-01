# aspell.net

> Spell checker with better logic than ispell

## Package Information

- **Domain**: `aspell.net`
- **Name**: `aspell.net`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/aspell.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +aspell.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `aspell`
- `aspell-import`
- `precat`
- `preunzip`
- `prezip`
- `prezip-bin`
- `pspell-config`
- `run-with-aspell`
- `word-list-compress`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.60.8.1`, `0.60.8`

</details>

**Latest Version**: `0.60.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +aspell.net@0.60.8.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.aspellnet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/aspell.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
