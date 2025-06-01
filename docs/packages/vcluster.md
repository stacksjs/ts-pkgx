# vcluster

> vCluster - Create fully functional virtual Kubernetes clusters - Each vcluster runs inside a namespace of the underlying k8s cluster. It's cheaper than creating separate full-blown clusters and it offers better multi-tenancy and isolation than regular namespaces.

## Package Information

- **Domain**: `vcluster`
- **Name**: `vcluster`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/vcluster.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) vcluster
```

## Programs

This package provides the following executable programs:

- `vcluster`

## Aliases

This package can also be accessed using these aliases:

- `vcluster`

## Available Versions

<details>
<summary>Show all 33 versions</summary>

- `0.25.0`, `0.24.1`, `0.24.0`, `0.23.2`, `0.23.1`
- `0.23.0`, `0.22.6`, `0.22.5`, `0.22.4`, `0.22.3`
- `0.22.2`, `0.22.1`, `0.22.0`, `0.21.6`, `0.21.5`
- `0.21.4`, `0.21.3`, `0.21.2`, `0.21.1`, `0.21.0`
- `0.20.6`, `0.20.5`, `0.20.4`, `0.20.3`, `0.20.2`
- `0.20.1`, `0.20.0`, `0.19.9`, `0.19.8`, `0.19.7`
- `0.19.6`, `0.19.5`, `0.19.4`

</details>

**Latest Version**: `0.25.0`

### Install Specific Version

```bash
# Install specific version
pkgx vcluster@0.25.0
```

## Dependencies

This package depends on:

- `kubernetes.io/kubectl^1`
- `linuxcurl.se/ca-certs`
- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.vcluster

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/vcluster.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
