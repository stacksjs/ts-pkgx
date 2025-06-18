# boost.org

> Super-project for modularized Boost

## Package Information

- **Domain**: `boost.org`
- **Name**: `boost.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/boost.org/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +boost.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `1.88.0`, `1.87.0`, `1.86.0`, `1.85.0`, `1.84.0`
- `1.83.0`, `1.82.0`, `1.81.0`

</details>

**Latest Version**: `1.88.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +boost.org@1.88.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `facebook.com/zstd^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.boostorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/boost.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
