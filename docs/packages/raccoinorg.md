# raccoin

> Crypto Portfolio and Tax Reporting Tool

## Package Information

- **Domain**: `raccoin.org`
- **Name**: `raccoin`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/raccoin.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) raccoin
```

## Programs

This package provides the following executable programs:

- `raccoin`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.2.0`, `0.1.0`

</details>

**Latest Version**: `0.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +raccoin.org@0.2.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/libiconv^1`
- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.raccoinorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/raccoin.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
