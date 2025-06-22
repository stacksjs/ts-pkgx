# vault-unseal

> auto-unseal utility for Hashicorp Vault

## Package Information

- **Domain**: `github.com/lrstanley/vault-unseal`
- **Name**: `vault-unseal`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lrstanley/vault-unseal/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install vault-unseal
```

## Programs

This package provides the following executable programs:

- `vault-unseal`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.7.0`, `0.6.0`

</details>

**Latest Version**: `0.7.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/lrstanley/vault-unseal@0.7.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.vault_unseal

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/lrstanley/vault-unseal/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
