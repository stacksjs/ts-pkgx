# par2

> Parchive: Parity Archive Volume Set for data recovery

## Package Information

- **Domain**: `par2`
- **Name**: `par2`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Parchive/par2cmdline/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +github.com/Parchive/par2cmdline -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `par2`
- `par2create`
- `par2verify`
- `par2repair`

## Aliases

This package can also be accessed using these aliases:

- `par2`
- `Parchive/par2cmdline`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.0.0`, `0.8.1`

</details>

**Latest Version**: `1.0.0`

### Install Specific Version

```bash
# Install specific version
pkgx par2@1.0.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.par2

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Parchive/par2cmdline/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
