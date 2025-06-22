# kind.sigs.k8s.io

> Kubernetes IN Docker - local clusters for testing Kubernetes

## Package Information

- **Domain**: `kindsigsk8s.io`
- **Name**: `kind.sigs.k8s.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install kindsigsk8s.io
```

## Programs

This package provides the following executable programs:

- `kind`

## Aliases

This package can also be accessed using these aliases:

- `kind`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `0.29.0`, `0.28.0`, `0.27.0`, `0.26.0`, `0.25.0`
- `0.24.0`, `0.23.0`, `0.22.0`, `0.21.0`, `0.20.0`
- `0.19.0`

</details>

**Latest Version**: `0.29.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +kindsigsk8s.io@0.29.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kindsigsk8sio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
