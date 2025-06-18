# dgraph.io

> high-performance graph database for real-time use cases

## Package Information

- **Domain**: `dgraph.io`
- **Name**: `dgraph.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dgraph.io/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install dgraph
```

## Programs

This package provides the following executable programs:

- `dgraph`

## Aliases

This package can also be accessed using these aliases:

- `dgraph`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `24.1.3`, `24.1.2`, `24.1.1`, `24.1.0`, `24.0.5`
- `24.0.4`, `24.0.2`, `24.0.1`, `24.0.0`, `23.1.1`
- `23.1.0`

</details>

**Latest Version**: `24.1.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +dgraph.io@24.1.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev~1.22.12`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.dgraphio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dgraph.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
