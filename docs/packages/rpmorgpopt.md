# rpm.org/popt

> C library for parsing command line parameters

## Package Information

- **Domain**: `rpm.org/popt`
- **Name**: `rpm.org/popt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rpm.org/popt/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +rpm.org/popt -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `popt`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.19.0`

</details>

**Latest Version**: `1.19.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +rpm.org/popt@1.19.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rpmorgpopt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rpm.org/popt/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
