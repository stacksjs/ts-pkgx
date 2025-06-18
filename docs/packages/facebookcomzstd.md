# facebook.com/zstd

> Zstandard - Fast real-time compression algorithm

## Package Information

- **Domain**: `facebook.com/zstd`
- **Name**: `facebook.com/zstd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/zstd/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +facebook.com/zstd -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `pzstd`
- `unzstd`
- `zstd`
- `zstdcat`
- `zstdgrep`
- `zstdless`
- `zstdmt`

## Aliases

This package can also be accessed using these aliases:

- `zstd`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `1.5.7`, `1.5.6`, `1.5.5`, `1.5.4`, `1.5.2`

</details>

**Latest Version**: `1.5.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +facebook.com/zstd@1.5.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `lz4.org^1`
- `tukaani.org/xz^5`
- `zlib.net^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.facebookcomzstd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/zstd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
