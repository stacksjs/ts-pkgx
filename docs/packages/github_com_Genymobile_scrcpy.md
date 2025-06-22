# scrcpy

> Display and control your Android device

## Package Information

- **Domain**: `github.com/Genymobile/scrcpy`
- **Name**: `scrcpy`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Genymobile/scrcpy/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install scrcpy
```

## Programs

This package provides the following executable programs:

- `scrcpy`

## Available Versions

<details>
<summary>Show all 16 versions</summary>

- `3.3.1`, `3.3.0`, `3.2.0`, `3.1.0`, `3.0.2`
- `3.0.1`, `3.0.0`, `2.7.0`, `2.6.1`, `2.6.0`
- `2.5.0`, `2.4.0`, `2.3.1`, `2.3.0`, `2.2.0`
- `2.1.0`

</details>

**Latest Version**: `3.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) scrcpy -- $SHELL -i
```

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
const pkg = pantry.github_com_Genymobile_scrcpy

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Genymobile/scrcpy/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
