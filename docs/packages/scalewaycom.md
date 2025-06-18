# scaleway.com

> Command Line Interface for Scaleway

## Package Information

- **Domain**: `scaleway.com`
- **Name**: `scaleway.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/scaleway.com/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install scw
```

## Programs

This package provides the following executable programs:

- `scw`

## Aliases

This package can also be accessed using these aliases:

- `scw`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `2.40.0`, `2.39.0`, `2.38.0`, `2.37.0`, `2.36.0`
- `2.35.0`, `2.34.0`, `2.33.0`, `2.32.1`

</details>

**Latest Version**: `2.40.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +scaleway.com@2.40.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev@1.22`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.scalewaycom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/scaleway.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
