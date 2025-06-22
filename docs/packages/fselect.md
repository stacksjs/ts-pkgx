# fselect

> Find files with SQL-like queries

## Package Information

- **Domain**: `crates.io/fselect`
- **Name**: `fselect`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fselect/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install fselect
```

## Programs

This package provides the following executable programs:

- `fselect`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.8.12`, `0.8.11`, `0.8.10`, `0.8.9`, `0.8.8`
- `0.8.6`, `0.8.5`, `0.8.4`

</details>

**Latest Version**: `0.8.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) fselect -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.fselect

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/fselect/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
