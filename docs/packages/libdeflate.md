# libdeflate

> Heavily optimized library for DEFLATE/zlib/gzip compression and decompression

## Package Information

- **Domain**: `github.com/ebiggers/libdeflate`
- **Name**: `libdeflate`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ebiggers/libdeflate/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +github.com/ebiggers/libdeflate -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `libdeflate-gzip`
- `libdeflate-gunzip`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.24.0`, `1.23.0`, `1.22.0`, `1.21.0`, `1.20.0`
- `1.19.0`

</details>

**Latest Version**: `1.24.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/ebiggers/libdeflate@1.24.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libdeflate

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ebiggers/libdeflate/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
