# kind

> Kubernetes IN Docker - local clusters for testing Kubernetes

## Package Information

- **Domain**: `kind.sigs.k8s.io`
- **Name**: `kind`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install kind
```

## Programs

This package provides the following executable programs:

- `kind`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `0.30.0`, `0.29.0`, `0.28.0`, `0.27.0`, `0.26.0`
- `0.25.0`, `0.24.0`, `0.23.0`, `0.22.0`, `0.21.0`
- `0.20.0`, `0.19.0`

</details>

**Latest Version**: `0.30.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) kind -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kind

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kind.sigs.k8s.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
