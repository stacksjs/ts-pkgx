# kube-linter

> KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.

## Package Information

- **Domain**: `kubelinterio`
- **Name**: `kube-linter`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) kube-linter
```

## Programs

This package provides the following executable programs:

- `kube-linter`

## Aliases

This package can also be accessed using these aliases:

- `kube-linter`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.7.2`, `0.7.1`, `0.7.0`, `0.6.8`

</details>

**Latest Version**: `0.7.2`

### Install Specific Version

```bash
# Install specific version
pkgx kube-linter@0.7.2
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kubelinterio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
