# mujs.com

> An embeddable Javascript interpreter in C.

## Package Information

- **Domain**: `mujs.com`
- **Name**: `mujs.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mujs.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mujs.com
```

## Programs

This package provides the following executable programs:

- `mujs`
- `mujs-pp`

## Aliases

This package can also be accessed using these aliases:

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
sh <(curl https://pkgx.sh) +mujs.com@1.3.6 -- $SHELL -i
```

## Dependencies

This package depends on:

- `linux:gnu.org/readline~8.1`
- `linux:invisible-island.net/ncurses`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mujscom

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
