# fusermount3

> The reference implementation of the Linux FUSE (Filesystem in Userspace) interface

## Package Information

- **Domain**: `github.com/libfuse/libfuse`
- **Name**: `fusermount3`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libfuse/libfuse/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/libfuse/libfuse
```

## Programs

This package provides the following executable programs:

- `fusermount3`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.17.4`, `3.17.3`, `3.17.2`, `3.17.1`

</details>

**Latest Version**: `3.17.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/libfuse/libfuse@3.17.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `mesonbuild.com`
- `linux:gnu.org/gcc`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.fusermount3

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/libfuse/libfuse/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
