# ccache.dev

> Object-file caching compiler wrapper

## Package Information

- **Domain**: `ccache.dev`
- **Name**: `ccache.dev`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ccache.dev/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ccache
```

## Programs

This package provides the following executable programs:

- `ccache`

## Aliases

This package can also be accessed using these aliases:

- `ccache`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `4.11.3`, `4.11.2`, `4.11.1`, `4.11.0`, `4.10.2`
- `4.10.1`, `4.10.0`, `4.9.1`, `4.9.0`, `4.8.3`

</details>

**Latest Version**: `4.11.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) ccache -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/redis/hiredis`
- `facebook.com/zstd`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ccache

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ccache.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
