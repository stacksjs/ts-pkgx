# gnu.org/bc

> A package from gnu.org/bc

## Package Information

- **Domain**: `gnu.org/bc`
- **Name**: `gnu.org/bc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bc/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +gnu.org/bc -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `bc`
- `dc`

## Aliases

This package can also be accessed using these aliases:

- `bc`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.8.2`, `1.8.1`, `1.8.0`, `1.7.1`

</details>

**Latest Version**: `1.8.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/bc@1.8.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/westes/flex^2.6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuorgbc

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bc/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
