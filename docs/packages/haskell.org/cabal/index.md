# cabal

> Official upstream development repository for Cabal and cabal-install

## Package Information

- **Domain**: `haskell.org/cabal`
- **Name**: `cabal`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/cabal/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cabal
```

## Programs

This package provides the following executable programs:

- `cabal`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `3.8.1`, `3.14.2.0`, `3.14.1.1`, `3.14.1.0`, `3.12.1.0`
- `3.10.3.0`, `3.10.1`

</details>

**Latest Version**: `3.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cabal -- $SHELL -i
```

## Dependencies

This package depends on:

- `haskell.org@9`
- `gnu.org/gmp@6`
- `zlib.net@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cabal

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/cabal/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
