# xxHash

> Extremely fast non-cryptographic hash algorithm

## Package Information

- **Domain**: `xxHa.sh`
- **Name**: `xxHash`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyan4973/xxHash/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install xxHa.sh
```

## Programs

This package provides the following executable programs:

- `xxhsum`
- `xxh32sum`
- `xxh64sum`
- `xxh128sum`

## Aliases

This package can also be accessed using these aliases:

- `xxh`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.8.3`, `0.8.2`, `0.8.1`

</details>

**Latest Version**: `0.8.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +xxHa.sh@0.8.3 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.xxhash

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Cyan4973/xxHash/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
