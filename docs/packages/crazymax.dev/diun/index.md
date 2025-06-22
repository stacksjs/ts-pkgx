# diun

> Receive notifications when an image is updated on a Docker registry

## Package Information

- **Domain**: `crazymax.dev/diun`
- **Name**: `diun`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crazymax.dev/diun/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install diun
```

## Programs

This package provides the following executable programs:

- `diun`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `4.29.0`, `4.28.0`

</details>

**Latest Version**: `4.29.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) diun -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.diun

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crazymax.dev/diun/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
