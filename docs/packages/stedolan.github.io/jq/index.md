# jq

> Lightweight and flexible command-line JSON processor

## Package Information

- **Domain**: `stedolan.github.io/jq`
- **Name**: `jq`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/stedolan.github.io/jq/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install jq
```

## Programs

This package provides the following executable programs:

- `jq`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `1.8.1`, `1.8.0`, `1.7.1`, `1.7.0`, `1.6.0`

</details>

**Latest Version**: `1.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) jq -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/kkos/oniguruma@6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.jq

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/stedolan.github.io/jq/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
