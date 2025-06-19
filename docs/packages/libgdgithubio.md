# libgd.github.io

> Graphics library to dynamically manipulate images

## Package Information

- **Domain**: `libgdgithub.io`
- **Name**: `libgd.github.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libgd.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +libgd.github.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bdftogd`
- `gd2copypal`
- `gd2togif`
- `gdcmpgif`
- `giftogd2`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.3.3`

</details>

**Latest Version**: `2.3.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +libgdgithub.io@2.3.3 -- $SHELL -i
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
- `gnu.org/autoconf`
- `gnu.org/libtool`
- `freedesktop.org/pkg-config`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libgdgithubio

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
