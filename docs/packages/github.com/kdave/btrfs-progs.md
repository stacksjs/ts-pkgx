# btrfs-progs

> Package from pantry: github.com/kdave/btrfs-progs

## Package Information

- **Domain**: `github.com/kdave/btrfs-progs`
- **Name**: `btrfs-progs`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kdave/btrfs-progs/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/kdave/btrfs-progs
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `python.org~3.11`
- `sourceforge.net/e2fsprogs^1.47`
- `oberhumer.com/lzo^2.10`
- `systemd.io^255 # for libudev`
- `github.com/util-linux/util-linux^2.39`
- `zlib.net^1.3`
- `facebook.com/zstd^1.5`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['btrfs-progs']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kdave/btrfs-progs/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
