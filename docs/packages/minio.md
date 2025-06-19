# min.io

> MinIO is a high-performance, S3 compatible object store, open sourced under GNU AGPLv3 license.

## Package Information

- **Domain**: `min.io`
- **Name**: `min.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/min.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install minio
```

## Programs

This package provides the following executable programs:

- `minio`

## Aliases

This package can also be accessed using these aliases:

- `minio`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2023.10.25.6.33.25`

</details>

**Latest Version**: `2023.10.25.6.33.25`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +min.io@2023.10.25.6.33.25 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.minio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/min.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
