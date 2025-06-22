# elv.sh

> Powerful scripting language & versatile interactive shell

## Package Information

- **Domain**: `elv.sh`
- **Name**: `elv.sh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/elv.sh/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install elv.sh
```

## Programs

This package provides the following executable programs:

- `elvish`

## Aliases

This package can also be accessed using these aliases:

- `elvish`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.21.0`, `0.20.1`, `0.20.0`, `0.19.2`

</details>

**Latest Version**: `0.21.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +elv.sh@0.21.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.elvsh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/elv.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
