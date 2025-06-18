# pandoc.org

> Swiss-army knife of markup format conversion

## Package Information

- **Domain**: `pandoc.org`
- **Name**: `pandoc.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install pandoc
```

## Programs

This package provides the following executable programs:

- `pandoc`

## Aliases

This package can also be accessed using these aliases:

- `pandoc`

## Available Versions

<details>
<summary>Show all 31 versions</summary>

- `3.7.0.2`, `3.7.0.1`, `3.7.0`, `3.6.4`, `3.6.3`
- `3.6.2`, `3.6.1`, `3.6.0`, `3.5.0`, `3.4.0`
- `3.3.0`, `3.2.1`, `3.2.0`, `3.1.13`, `3.1.9`
- `3.1.8`, `3.1.7`, `3.1.6.2`, `3.1.6`, `3.1.5`
- `3.1.4`, `3.1.3`, `3.1.2`, `3.1.12.3`, `3.1.12.2`
- `3.1.12.1`, `3.1.12`, `3.1.11.1`, `3.1.11`, `3.1.10`
- `2.19.2`

</details>

**Latest Version**: `3.7.0.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pandoc.org@3.7.0.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gmp@6`
- `zlib.net@1`
- `sourceware.org/libffi@3`
- `haskell.org~9.4`
- `haskell.org/cabal~3.10 # 3.12 complains when using --installdir about relative library paths`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pandocorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pandoc.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
