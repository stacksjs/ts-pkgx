# lynx

> Text-based web browser

## Package Information

- **Domain**: `lynx`
- **Name**: `lynx`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/lynx/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) lynx
```

## Programs

This package provides the following executable programs:

- `lynx`

## Aliases

This package can also be accessed using these aliases:

- `lynx`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.9.2`

</details>

**Latest Version**: `2.9.2`

### Install Specific Version

```bash
# Install specific version
pkgx lynx@2.9.2
```

## Dependencies

This package depends on:

- `openssl.org^3`
- `invisible-island.net/ncurses^6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.lynx

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/invisible-island.net/lynx/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
