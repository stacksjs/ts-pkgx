# nano

> Free (GNU) replacement for the Pico text editor

## Package Information

- **Domain**: `nanoeditororg`
- **Name**: `nano`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nano-editor.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) nano
```

## Programs

This package provides the following executable programs:

- `nano`

## Aliases

This package can also be accessed using these aliases:

- `nano`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `8.0.0`, `7.2.0`

</details>

**Latest Version**: `8.0.0`

### Install Specific Version

```bash
# Install specific version
pkgx nano@8.0.0
```

## Dependencies

This package depends on:

- `gnu.org/gettext`
- `invisible-island.net/ncurses>=6.0`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nanoeditororg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nano-editor.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
