# scrcpy

> Package from pantry: github.com/Genymobile/scrcpy

## Package Information

- **Domain**: `github.com/Genymobile/scrcpy`
- **Name**: `scrcpy`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Genymobile/scrcpy/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/Genymobile/scrcpy
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `ffmpeg.org`
- `libusb.info`
- `libsdl.org`
- `linux:webmproject.org/libvpx<1.15.1 # since 3.3, .9 lib api`
- `darwin:sourceware.org/bzip2`
- `darwin:zlib.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.scrcpy

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Genymobile/scrcpy/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
