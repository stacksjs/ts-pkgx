# telnet

> A package from apple.com/remote_cmds

## Package Information

- **Domain**: `tel.net`
- **Name**: `telnet`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apple.com/remote_cmds/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) telnet
```

## Programs

This package provides the following executable programs:

- `telnet`

## Aliases

This package can also be accessed using these aliases:

- `remote_cmds`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `306.0.0`, `303.141.1`, `303.0.2`, `302.0.0`, `294.0.0`

</details>

**Latest Version**: `306.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +tel.net@306.0.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.telnet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apple.com/remote_cmds/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
