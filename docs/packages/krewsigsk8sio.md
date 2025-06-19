# krew.sigs.k8s.io

> 📦 Find and install kubectl plugins

## Package Information

- **Domain**: `krewsigsk8s.io`
- **Name**: `krew.sigs.k8s.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/krew.sigs.k8s.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install kubectl-krew
```

## Programs

This package provides the following executable programs:

- `kubectl-krew`

## Aliases

This package can also be accessed using these aliases:

- `kubectl-krew`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.4.5`, `0.4.4`

</details>

**Latest Version**: `0.4.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +krewsigsk8s.io@0.4.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.krewsigsk8sio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/krew.sigs.k8s.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
