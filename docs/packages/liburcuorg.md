# liburcu

> liburcu is a LGPLv2.1 userspace RCU (read-copy-update) library. This data synchronization library provides read-side access which scales linearly with the number of cores.

## Package Information

- **Domain**: `liburcuorg`
- **Name**: `liburcu`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/liburcu.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +liburcu.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.15.3`, `0.15.2`, `0.15.1`, `0.15.0`

</details>

**Latest Version**: `0.15.3`

### Install Specific Version

```bash
# Install specific version
pkgx liburcu@0.15.3
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['liburcuorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/liburcu.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
