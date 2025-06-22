# mamba

> The Fast Cross-Platform Package Manager

## Package Information

- **Domain**: `github.com/mamba-org/mamba`
- **Name**: `mamba`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/mamba/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mamba
```

## Programs

This package provides the following executable programs:

- `mamba`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `22.11.1.4`

</details>

**Latest Version**: `22.11.1.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) mamba -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_mamba_org_mamba

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/mamba/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
