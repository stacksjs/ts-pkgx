# htslib.org

> C library for high-throughput sequencing data formats

## Package Information

- **Domain**: `htslib.org`
- **Name**: `htslib.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/htslib.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +htslib.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bgzip`
- `htsfile`
- `tabix`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.22.0`, `1.21.0`, `1.20.0`, `1.19.1`, `1.19.0`
- `1.18.0`

</details>

**Latest Version**: `1.22.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +htslib.org@1.22.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `sourceware.org/bzip2`
- `tukaani.org/xz`
- `zlib.net^1`
- `curl.se>=5`
- `gnu.org/make`
- `gnu.org/autoconf`
- `gnu.org/automake^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.htsliborg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/htslib.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
