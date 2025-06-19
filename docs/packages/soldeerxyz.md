# soldeer

> Solidity Package Manager written in rust and integrated into Foundry (forge soldeer ...)

## Package Information

- **Domain**: `soldeer.xyz`
- **Name**: `soldeer`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/soldeer.xyz/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) soldeer
```

## Programs

This package provides the following executable programs:

- `soldeer`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.5.4`, `0.5.3`, `0.5.2`

</details>

**Latest Version**: `0.5.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +soldeer.xyz@0.5.4 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.soldeerxyz

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/soldeer.xyz/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
