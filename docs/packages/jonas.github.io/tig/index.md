# tig

> Text interface for Git repositories

## Package Information

- **Domain**: `jonas.github.io/tig`
- **Name**: `tig`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/jonas.github.io/tig/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tig
```

## Programs

This package provides the following executable programs:

- `tig`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `2.5.12`, `2.5.11`, `2.5.10`, `2.5.9`, `2.5.8`

</details>

**Latest Version**: `2.5.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) tig -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/libiconv^1`
- `invisible-island.net/ncurses^6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tig

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/jonas.github.io/tig/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
