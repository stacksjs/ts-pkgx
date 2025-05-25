# sdkman-init.sh

> The SDKMAN! Command Line Interface

## Package Information

- **Domain**: `sdkmanio`
- **Name**: `sdkman-init.sh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sdkman.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) sdkman-init.sh
```

## Programs

This package provides the following executable programs:

- `sdkman-init.sh`

## Aliases

This package can also be accessed using these aliases:

- `sdkman-init.sh`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `5.19.0`, `5.18.2`

</details>

**Latest Version**: `5.19.0`

### Install Specific Version

```bash
# Install specific version
pkgx sdkman-init.sh@5.19.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['sdkmanio']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sdkman.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
