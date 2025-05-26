# tofu

> OpenTofu lets you declaratively manage your cloud infrastructure.

## Package Information

- **Domain**: `opentofuorg`
- **Name**: `tofu`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/opentofu.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) tofu
```

## Programs

This package provides the following executable programs:

- `tofu`

## Aliases

This package can also be accessed using these aliases:

- `tofu`

## Available Versions

<details>
<summary>Show all 19 versions</summary>

- `1.9.1`, `1.9.0`, `1.8.9`, `1.8.8`, `1.8.7`
- `1.8.6`, `1.8.5`, `1.8.4`, `1.8.3`, `1.8.2`
- `1.8.1`, `1.8.0`, `1.7.8`, `1.7.7`, `1.7.6`
- `1.7.5`, `1.7.4`, `1.7.3`, `1.6.0.3`

</details>

**Latest Version**: `1.9.1`

### Install Specific Version

```bash
# Install specific version
pkgx tofu@1.9.1
```

## Dependencies

This package depends on:

- `linuxgnu.org/gcc/libstdcxx`
- `gnu.org/gcc/libstdcxx`
- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.opentofuorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/opentofu.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
