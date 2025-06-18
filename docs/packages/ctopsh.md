# ctop.sh

> Top-like interface for container metrics

## Package Information

- **Domain**: `ctop.sh`
- **Name**: `ctop.sh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/ctop.sh/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install ctop
```

## Programs

This package provides the following executable programs:

- `ctop`

## Aliases

This package can also be accessed using these aliases:

- `ctop`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.7.7`

</details>

**Latest Version**: `0.7.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ctop.sh@0.7.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev~1.18`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ctopsh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/ctop.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
