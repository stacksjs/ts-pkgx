# sops

> Simple and flexible tool for managing secrets

## Package Information

- **Domain**: `getsops.io`
- **Name**: `sops`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/getsops.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sops
```

## Programs

This package provides the following executable programs:

- `sops`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `3.10.2`, `3.10.1`, `3.10.0`, `3.9.4`, `3.9.3`
- `3.9.2`, `3.9.1`, `3.9.0`, `3.8.1`

</details>

**Latest Version**: `3.10.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) sops -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sops

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/getsops.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
