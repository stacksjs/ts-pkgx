# gnu.org/bc

> An arbitrary precision calculator language with syntax similar to the C programming language

## Package Information

- **Domain**: `gnu.org/bc`
- **Name**: `gnu.org/bc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bc/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/bc
```

## Programs

This package provides the following executable programs:

- `bc`
- `dc`

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
const pkg = pantry['gnu.org/bc']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/bc/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
