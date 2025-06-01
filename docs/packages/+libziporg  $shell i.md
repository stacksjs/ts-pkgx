# zip

> A C library for reading, creating, and modifying zip archives.

## Package Information

- **Domain**: `+libziporg  $shell i`
- **Name**: `zip`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libzip.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `zipcmp`
- `zipmerge`
- `ziptool`

## Aliases

This package can also be accessed using these aliases:

- `+libzip.org -- $SHELL -i`
- `zip`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `1.11.4`, `1.11.3`, `1.11.2`, `1.11.1`, `1.10.1`
- `1.10.0`, `1.9.2`

</details>

**Latest Version**: `1.11.4`

### Install Specific Version

```bash
# Install specific version
pkgx zip@1.11.4
```

## Dependencies

This package depends on:

- `facebook.com/zstd>=1.5.0`
- `darwinsourceware.org/bzip2>=1.0.8tukaani.org/xz>=5.2.7zlib.net>=1.2.13`
- `sourceware.org/bzip2>=1.0.8`
- `tukaani.org/xz>=5.2.7`
- `zlib.net>=1.2.13`
- `linuxopenssl.org^1.1`
- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+libziporg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libzip.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
