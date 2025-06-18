# net-tools

> Linux networking base tools

## Package Information

- **Domain**: `.net/tools`
- **Name**: `net-tools`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/net-tools/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +sourceforge.net/net-tools -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `hostname`
- `ifconfig`
- `netstat`
- `route`

## Aliases

This package can also be accessed using these aliases:

- `sourceforge.net/net-tools`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.10.0`

</details>

**Latest Version**: `2.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +.net/tools@2.10.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nettools

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/net-tools/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
