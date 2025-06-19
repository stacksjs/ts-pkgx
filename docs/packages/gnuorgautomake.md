# gnu.org/automake

> Tool for generating GNU Standards-compliant Makefiles

## Package Information

- **Domain**: `gnu.org/automake`
- **Name**: `gnu.org/automake`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/automake/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +gnu.org/automake -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `aclocal`
- `automake`

## Aliases

This package can also be accessed using these aliases:

- `automake`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.18.0`, `1.17.0`, `1.16.5`

</details>

**Latest Version**: `1.18.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/automake@1.18.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/autoconf^2.65.0`
- `perl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnuorgautomake

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/automake/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
