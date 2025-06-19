# curlie.io

> The power of curl, the ease of use of httpie.

## Package Information

- **Domain**: `curlie.io`
- **Name**: `curlie.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install curlie
```

## Programs

This package provides the following executable programs:

- `curlie`

## Aliases

This package can also be accessed using these aliases:

- `curlie`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.8.2`, `1.7.2`

</details>

**Latest Version**: `1.8.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +curlie.io@1.8.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev~1.24`
- `goreleaser.com`
- `git-scm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.curlieio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
