# pack

> CLI for building apps using Cloud Native Buildpacks

## Package Information

- **Domain**: `buildpacks.io`
- **Name**: `pack`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/buildpacks.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pack
```

## Programs

This package provides the following executable programs:

- `pack`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `0.38.1`, `0.38.0`, `0.37.0`, `0.36.4`, `0.36.3`
- `0.36.2`, `0.36.1`, `0.36.0`, `0.35.1`, `0.35.0`
- `0.34.2`, `0.34.1`, `0.34.0`, `0.33.2`

</details>

**Latest Version**: `0.38.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pack -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.buildpacksio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/buildpacks.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
