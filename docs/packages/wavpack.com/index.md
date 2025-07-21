# wavpack.com

> WavPack encode/decode library, command-line programs, and several plugins

## Package Information

- **Domain**: `wavpack.com`
- **Name**: `wavpack.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wavpack.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install wavpack.com
```

## Programs

This package provides the following executable programs:

- `wavpack`
- `wvunpack`
- `wvtag`
- `wvgain`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `5.8.1`, `5.8.0`, `5.7.0`

</details>

**Latest Version**: `5.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +wavpack.com@5.8.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['wavpack.com']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wavpack.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
