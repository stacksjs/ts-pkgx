# autossh

> Automatically restart SSH sessions and tunnels

## Package Information

- **Domain**: `autos.sh`
- **Name**: `autossh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/harding.motd.ca/autossh/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) autossh
```

## Programs

This package provides the following executable programs:

- `autossh`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.4f`

</details>

**Latest Version**: `1.4f`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +autos.sh@1.4f -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssh.com`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.autossh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/harding.motd.ca/autossh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
