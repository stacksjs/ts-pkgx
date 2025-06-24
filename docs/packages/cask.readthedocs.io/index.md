# cask

> Project management tool for Emacs

## Package Information

- **Domain**: `cask.readthedocs.io`
- **Name**: `cask`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cask.readthedocs.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cask
```

## Programs

This package provides the following executable programs:

- `cask`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.9.1`, `0.9.0`

</details>

**Latest Version**: `0.9.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cask -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/coreutils`
- `gnu.org/emacs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cask

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cask.readthedocs.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
