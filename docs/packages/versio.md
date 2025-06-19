# versio

> A version number manager

## Package Information

- **Domain**: `vers.io`
- **Name**: `versio`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/versio/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) versio
```

## Programs

This package provides the following executable programs:

- `versio`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.8.3`, `0.7.6`

</details>

**Latest Version**: `0.8.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +vers.io@0.8.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `gnupg.org/libgpg-error@1`
- `gnupg.org/gpgme^1.13`
- `gnupg.org/libassuan`
- `zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.versio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/versio/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
