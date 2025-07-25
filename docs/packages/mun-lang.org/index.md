# mun

> Source code for the Mun language and runtime.

## Package Information

- **Domain**: `mun-lang.org`
- **Name**: `mun`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mun-lang.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mun
```

## Programs

This package provides the following executable programs:

- `mun`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.5.0`

</details>

**Latest Version**: `0.5.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) mun -- $SHELL -i
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses@6`
- `sourceware.org/libffi@3`
- `gnome.org/libxml2@2`

## Related Packages

These packages work well with mun:

- [`llvm.org`](../llvm.org/index.md) - The LLVM Project is a collection of modular and reusable compiler and toolchain technologies.

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mun

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mun-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
