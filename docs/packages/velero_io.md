# velero

> Backup and migrate Kubernetes applications and their persistent volumes

## Package Information

- **Domain**: `velero.io`
- **Name**: `velero`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/velero.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install velero
```

## Programs

This package provides the following executable programs:

- `velero`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.16.1`

</details>

**Latest Version**: `1.16.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) velero -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.velero_io

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/velero.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
