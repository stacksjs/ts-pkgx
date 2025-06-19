# atlasgo.io

> Manage your database schema as code

## Package Information

- **Domain**: `atlasgo.io`
- **Name**: `atlasgo.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/atlasgo.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install atlas
```

## Programs

This package provides the following executable programs:

- `atlas`

## Aliases

This package can also be accessed using these aliases:

- `atlas`

## Available Versions

<details>
<summary>Show all 22 versions</summary>

- `0.35.0`, `0.34.0`, `0.33.0`, `0.32.0`, `0.31.0`
- `0.30.0`, `0.29.0`, `0.28.0`, `0.27.0`, `0.26.0`
- `0.25.0`, `0.24.0`, `0.23.0`, `0.22.0`, `0.21.0`
- `0.20.0`, `0.19.0`, `0.18.0`, `0.17.0`, `0.16.0`
- `0.15.0`, `0.14.0`

</details>

**Latest Version**: `0.35.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +atlasgo.io@0.35.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev^1.20`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.atlasgoio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/atlasgo.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
