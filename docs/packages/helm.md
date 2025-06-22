# helm

> The Kubernetes Package Manager

## Package Information

- **Domain**: `helm.sh`
- **Name**: `helm`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/helm.sh/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install helm
```

## Programs

This package provides the following executable programs:

- `helm`

## Available Versions

<details>
<summary>Show all 34 versions</summary>

- `3.18.3`, `3.18.2`, `3.18.1`, `3.18.0`, `3.17.3`
- `3.17.2`, `3.17.1`, `3.17.0`, `3.16.4`, `3.16.3`
- `3.16.2`, `3.16.1`, `3.16.0`, `3.15.4`, `3.15.3`
- `3.15.2`, `3.15.1`, `3.15.0`, `3.14.4`, `3.14.3`
- `3.14.2`, `3.14.1`, `3.14.0`, `3.13.3`, `3.13.2`
- `3.13.1`, `3.13.0`, `3.12.3`, `3.12.2`, `3.12.1`
- `3.12.0`, `3.11.3`, `3.11.2`, `3.11.1`

</details>

**Latest Version**: `3.18.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) helm -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.helm

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/helm.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
