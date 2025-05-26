# tsc

> TypeScript is a superset of JavaScript that compiles to clean JavaScript output.

## Package Information

- **Domain**: `typescriptlangorg`
- **Name**: `tsc`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/typescriptlang.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) tsc
```

## Programs

This package provides the following executable programs:

- `tsc`

## Aliases

This package can also be accessed using these aliases:

- `tsc`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `5.8.3`, `5.8.2`, `5.7.3`, `5.7.2`, `5.6.3`
- `5.6.2`, `5.5.4`, `5.5.3`, `5.5.2`, `5.4.5`
- `5.4.4`, `5.4.3`, `5.4.2`

</details>

**Latest Version**: `5.8.3`

### Install Specific Version

```bash
# Install specific version
pkgx tsc@5.8.3
```

## Dependencies

This package depends on:

- `nodejs.org^20`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.typescriptlangorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/typescriptlang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
