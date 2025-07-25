# kubebuilder

> Kubebuilder - SDK for building Kubernetes APIs using CRDs

## Package Information

- **Domain**: `kubebuilder.io`
- **Name**: `kubebuilder`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kubebuilder.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install kubebuilder
```

## Programs

This package provides the following executable programs:

- `kubebuilder`

## Available Versions

<details>
<summary>Show all 20 versions</summary>

- `4.7.1`, `4.7.0`, `4.6.0`, `4.5.2`, `4.5.1`
- `4.5.0`, `4.4.0`, `4.3.1`, `4.3.0`, `4.2.0`
- `4.1.1`, `4.1.0`, `4.0.0`, `3.15.1`, `3.15.0`
- `3.14.2`, `3.14.1`, `3.14.0`, `3.13.0`, `3.12.0`

</details>

**Latest Version**: `4.7.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) kubebuilder -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kubebuilder

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kubebuilder.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
