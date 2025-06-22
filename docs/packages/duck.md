# duckscript

> Simple, extendable and embeddable scripting language.

## Package Information

- **Domain**: `sagiegurari.github.io/duckscript`
- **Name**: `duckscript`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sagiegurari.github.io/duckscript/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install duck
```

## Programs

This package provides the following executable programs:

- `duck`

## Aliases

This package can also be accessed using these aliases:

- `duck`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.11.1`, `0.11.0`, `0.10.0`, `0.9.4`, `0.9.3`

</details>

**Latest Version**: `0.11.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) duck -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.duck

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sagiegurari.github.io/duckscript/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
