# liburcu.org

> liburcu is a LGPLv2.1 userspace RCU (read-copy-update) library. This data synchronization library provides read-side access which scales linearly with the number of cores.

## Package Information

- **Domain**: `liburcu.org`
- **Name**: `liburcu.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/liburcu.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install liburcu.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `liburcu`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.15.3`, `0.15.2`, `0.15.1`, `0.15.0`

</details>

**Latest Version**: `0.15.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +liburcu.org@0.15.3 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.liburcuorg

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
