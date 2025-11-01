# topgrade

> Upgrade all the things

## Package Information

- **Domain**: `crates.io/topgrade`
- **Name**: `topgrade`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/topgrade/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install crates.io/topgrade
```

## Programs

This package provides the following executable programs:

- `topgrade`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `16.1.1`, `16.1.0`, `16.0.4`, `16.0.3`, `16.0.2`
- `16.0.1`, `16.0.0`, `15.0.0`, `14.0.1`

</details>

**Latest Version**: `16.1.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +crates.io/topgrade@16.1.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.topgrade

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/topgrade/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
