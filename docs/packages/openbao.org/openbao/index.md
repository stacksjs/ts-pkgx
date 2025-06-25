# openbao

> OpenBao exists to provide a software solution to manage, store, and distribute sensitive data including secrets, certificates, and keys.

## Package Information

- **Domain**: `openbao.org/openbao`
- **Name**: `openbao`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openbao.org/openbao/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install openbao
```

## Programs

This package provides the following executable programs:

- `bao`
- `bao-setup`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `2.3.1`, `2.2.2`, `2.2.1`, `2.2.0`, `2.1.1`
- `2.1.0`, `2.0.3`, `2.0.2`, `2.0.1`, `2.0.0`

</details>

**Latest Version**: `2.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +openbao.org/openbao@2.3.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.openbao

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openbao.org/openbao/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
