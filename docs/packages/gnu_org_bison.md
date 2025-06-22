# gnu.org/bison

> Parser generator

## Package Information

- **Domain**: `gnu.org/bison`
- **Name**: `gnu.org/bison`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bison/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/bison
```

## Programs

This package provides the following executable programs:

- `bison`
- `yacc`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `3.8.2`

</details>

**Latest Version**: `3.8.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/bison@3.8.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/m4@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gnu_org_bison

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bison/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
