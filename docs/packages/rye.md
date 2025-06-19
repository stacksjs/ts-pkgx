# rye

> Experimental Package Management Solution for Python

## Package Information

- **Domain**: `rye`
- **Name**: `rye`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rye.astral.sh/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) rye
```

## Programs

This package provides the following executable programs:

- `rye`

## Aliases

This package can also be accessed using these aliases:

- `rye`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `0.44.0`, `0.43.0`, `0.42.0`, `0.41.0`, `0.40.0`
- `0.39.0`, `0.38.0`, `0.37.0`, `0.36.0`

</details>

**Latest Version**: `0.44.0`

### Install Specific Version

```bash
# Install specific version
pkgx rye@0.44.0
```

## Dependencies

This package depends on:

- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rye

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rye.astral.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
