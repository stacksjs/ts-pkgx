# upx.github.io

> UPX - the Ultimate Packer for eXecutables

## Package Information

- **Domain**: `upxgithub.io`
- **Name**: `upx.github.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/upx.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install upx
```

## Programs

This package provides the following executable programs:

- `upx`

## Aliases

This package can also be accessed using these aliases:

- `upx`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `5.0.1`, `5.0.0`, `4.2.4`

</details>

**Latest Version**: `5.0.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +upxgithub.io@5.0.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net`
- `cmake.org`
- `oberhumer.com/ucl`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.upxgithubio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/upx.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
