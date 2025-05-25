# htop

> Improved top (interactive process viewer)

## Package Information

- **Domain**: `htopdev`
- **Name**: `htop`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/htop.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) htop
```

## Programs

This package provides the following executable programs:

- `htop`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `3.4.1`, `3.4.0`, `3.3.0`, `3.2.2`, `3.2.1`

</details>

**Latest Version**: `3.4.1`

### Install Specific Version

```bash
# Install specific version
pkgx htop@3.4.1
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses@6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['htopdev']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/htop.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
