# confd

> Manage local application configuration files using templates and data from etcd or consul

## Package Information

- **Domain**: `github.com/abtreece/confd`
- **Name**: `confd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/abtreece/confd/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install confd
```

## Programs

This package provides the following executable programs:

- `confd`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.30.0`

</details>

**Latest Version**: `0.30.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/abtreece/confd@0.30.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_abtreece_confd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/abtreece/confd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
