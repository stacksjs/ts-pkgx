# skhd

> Simple hotkey daemon for macOS

## Package Information

- **Domain**: `koekeishiyaskhd`
- **Name**: `skhd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/skhd/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) skhd
```

## Programs

This package provides the following executable programs:

- `skhd`

## Aliases

This package can also be accessed using these aliases:

- `skhd`
- `koekeishiya/skhd`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.3.9`

</details>

**Latest Version**: `0.3.9`

### Install Specific Version

```bash
# Install specific version
pkgx skhd@0.3.9
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.koekeishiyaskhd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/koekeishiya/skhd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
