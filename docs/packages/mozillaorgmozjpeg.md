# mozilla.org/mozjpeg

> Improved JPEG encoder.

## Package Information

- **Domain**: `mozilla.org/mozjpeg`
- **Name**: `mozilla.org/mozjpeg`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/mozjpeg/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +mozilla.org/mozjpeg -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `cjpeg`
- `djpeg`
- `jpegtran`
- `rdjpgcom`
- `tjbench`
- `wrjpgcom`

## Aliases

This package can also be accessed using these aliases:

- `mozjpeg`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `4.0.3`

</details>

**Latest Version**: `4.0.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +mozilla.org/mozjpeg@4.0.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libpng.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mozillaorgmozjpeg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/mozjpeg/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
