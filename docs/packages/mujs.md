# mujs

> An embeddable Javascript interpreter in C.

## Package Information

- **Domain**: `mujs`
- **Name**: `mujs`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mujs.com/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +mujs.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mujs`
- `mujs-pp`

## Aliases

This package can also be accessed using these aliases:

- `+mujs.com -- $SHELL -i`
- `mujs`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.3.6`, `1.3.5`, `1.3.4`, `1.3.3`

</details>

**Latest Version**: `1.3.6`

### Install Specific Version

```bash
# Install specific version
pkgx mujs@1.3.6
```

## Dependencies

This package depends on:

- `linuxgnu.org/readline~8.1invisible-island.net/ncurses`
- `gnu.org/readline~8.1`
- `invisible-island.net/ncurses`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mujs

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mujs.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
