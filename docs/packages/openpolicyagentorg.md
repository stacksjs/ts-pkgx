# opa

> Open Policy Agent (OPA) is an open source, general-purpose policy engine.

## Package Information

- **Domain**: `openpolicyagentorg`
- **Name**: `opa`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openpolicyagent.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) opa
```

## Programs

This package provides the following executable programs:

- `opa`

## Aliases

This package can also be accessed using these aliases:

- `opa`

## Available Versions

<details>
<summary>Show all 25 versions</summary>

- `1.5.0`, `1.4.2`, `1.4.1`, `1.4.0`, `1.3.0`
- `1.2.0`, `1.1.0`, `1.0.1`, `1.0.0`, `0.70.0`
- `0.69.0`, `0.68.0`, `0.67.1`, `0.67.0`, `0.66.0`
- `0.65.0`, `0.64.1`, `0.64.0`, `0.63.0`, `0.62.1`
- `0.62.0`, `0.61.0`, `0.60.0`, `0.59.0`, `0.58.0`

</details>

**Latest Version**: `1.5.0`

### Install Specific Version

```bash
# Install specific version
pkgx opa@1.5.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.openpolicyagentorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openpolicyagent.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
