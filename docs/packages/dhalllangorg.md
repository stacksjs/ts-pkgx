# dhall

> Interpreter for the Dhall language

## Package Information

- **Domain**: `dhall/lang.org`
- **Name**: `dhall`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dhall-lang.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) dhall
```

## Programs

This package provides the following executable programs:

- `dhall`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.42.2`, `1.42.1`

</details>

**Latest Version**: `1.42.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +dhall/lang.org@1.42.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses^6.4`
- `zlib.net^1.3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.dhalllangorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dhall-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
