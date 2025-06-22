# envconsul

> Launch a subprocess with environment variables using data from @HashiCorp Consul and Vault.

## Package Information

- **Domain**: `hashicorp.com/envconsul`
- **Name**: `envconsul`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/envconsul/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install envconsul
```

## Programs

This package provides the following executable programs:

- `envconsul`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.13.3`, `0.13.2`

</details>

**Latest Version**: `0.13.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +hashicorp.com/envconsul@0.13.3 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.hashicorp_com_envconsul

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/envconsul/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
