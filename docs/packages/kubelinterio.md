# kubelinter.io

> KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.

## Package Information

- **Domain**: `kubelinter.io`
- **Name**: `kubelinter.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kubelinter.io/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install kube-linter
```

## Programs

This package provides the following executable programs:

- `kube-linter`

## Aliases

This package can also be accessed using these aliases:

- `kube-linter`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `0.7.4`, `0.7.3`, `0.7.2`, `0.7.1`, `0.7.0`
- `0.6.8`

</details>

**Latest Version**: `0.7.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +kubelinter.io@0.7.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev^1.21`

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
