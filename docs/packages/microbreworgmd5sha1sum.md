# microbrew.org/md5sha1sum

> Hash utilities

## Package Information

- **Domain**: `microbrew.org/md5sha1sum`
- **Name**: `microbrew.org/md5sha1sum`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/microbrew.org/md5sha1sum/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +microbrew.org/md5sha1sum -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `md5sum`
- `sha1sum`
- `ripemd160sum`

## Aliases

This package can also be accessed using these aliases:

- `md5sha1sum`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.9.5`

</details>

**Latest Version**: `0.9.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +microbrew.org/md5sha1sum@0.9.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.microbreworgmd5sha1sum

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/microbrew.org/md5sha1sum/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
