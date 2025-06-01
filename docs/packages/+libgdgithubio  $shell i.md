# libgd.github.io

> Graphics library to dynamically manipulate images

## Package Information

- **Domain**: `+libgdgithubio  $shell i`
- **Name**: `libgd.github.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libgd.github.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libgd.github.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bdftogd`
- `gd2copypal`
- `gd2togif`
- `gdcmpgif`
- `giftogd2`

## Aliases

This package can also be accessed using these aliases:

- `+libgd.github.io -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.3.3`

</details>

**Latest Version**: `2.3.3`

### Install Specific Version

```bash
# Install specific version
pkgx libgd.github.io@2.3.3
```

## Dependencies

This package depends on:

- `freedesktop.org/fontconfig`
- `freetype.org`
- `libjpeg-turbo.org`
- `github.com/AOMediaCodec/libavif`
- `libpng.org`
- `simplesystems.org/libtiff`
- `google.com/webp`
- `zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+libgdgithubio  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libgd.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
