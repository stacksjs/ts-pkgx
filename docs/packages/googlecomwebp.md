# google.com/webp

> Mirror only. Please do not send pull requests. See https://chromium.googlesource.com/webm/libwebp/+/HEAD/CONTRIBUTING.md.

## Package Information

- **Domain**: `google.com/webp`
- **Name**: `google.com/webp`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/google.com/webp/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +google.com/webp -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `cwebp`
- `dwebp`
- `gif2webp`
- `img2webp`
- `vwebp`
- `webpinfo`
- `webpmux`

## Aliases

This package can also be accessed using these aliases:

- `webp`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `1.5.0`, `1.4.0`, `1.3.2`, `1.3.1`, `1.3.0`

</details>

**Latest Version**: `1.5.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +google.com/webp@1.5.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `giflib.sourceforge.io^5`
- `libjpeg-turbo.org^2`
- `libpng.org^1`
- `simplesystems.org/libtiff^4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.googlecomwebp

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/google.com/webp/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
