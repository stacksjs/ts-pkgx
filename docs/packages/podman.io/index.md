# podman.io

> Package from pantry: podman.io

## Package Information

- **Domain**: `podman.io`
- **Name**: `podman.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/podman.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install podman.io
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `qemu.org`
- `github.com/containers/gvisor-tap-vsock`
- `darwin:github.com/crc-org/vfkit`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['podman.io']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/podman.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
