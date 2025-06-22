# kube-score

> Kubernetes object analysis with recommendations for improved reliability and security. kube-score actively prevents downtime and bugs in your Kubernetes YAML and Charts. Static code analysis for Kubernetes.

## Package Information

- **Domain**: `github.com/zegl/kube-score`
- **Name**: `kube-score`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zegl/kube-score/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install kube-score
```

## Programs

This package provides the following executable programs:

- `kube-score`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.20.0`, `1.19.0`, `1.18.0`, `1.17.0`, `1.15.0`
- `1.14.0`

</details>

**Latest Version**: `1.20.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) kube-score -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kube_score

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/zegl/kube-score/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
