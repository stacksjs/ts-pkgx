# k3sup

> Utility to create k3s clusters on any local or remote VM

## Package Information

- **Domain**: `github.com/alexellis/k3sup`
- **Name**: `k3sup`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/alexellis/k3sup/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install k3sup
```

## Programs

This package provides the following executable programs:

- `k3sup`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `0.13.9`, `0.13.8`, `0.13.6`, `0.13.5`, `0.13.4`
- `0.13.3`, `0.13.2`, `0.13.1`

</details>

**Latest Version**: `0.13.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) k3sup -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.k3sup

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/alexellis/k3sup/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
