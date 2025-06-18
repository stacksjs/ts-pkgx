# ziglang.org

> General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.

## Package Information

- **Domain**: `ziglang.org`
- **Name**: `ziglang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ziglang.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install zig
```

## Programs

This package provides the following executable programs:

- `zig`

## Aliases

This package can also be accessed using these aliases:

- `zig`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `0.14.1`, `0.14.0`, `0.13.0`, `0.12.1`, `0.12.0`
- `0.11.0`, `0.10.1`

</details>

**Latest Version**: `0.14.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ziglang.org@0.14.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `curl.se`
- `gnu.org/tar`
- `tukaani.org/xz`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ziglangorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ziglang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
