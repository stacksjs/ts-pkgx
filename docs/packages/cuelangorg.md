# cuelang.org

> The home of the CUE language! Validate and define text-based and dynamic configuration

## Package Information

- **Domain**: `cuelang.org`
- **Name**: `cuelang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cuelang.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cuelang.org
```

## Programs

This package provides the following executable programs:

- `cue`

## Aliases

This package can also be accessed using these aliases:

- `cue`

## Available Versions

<details>
<summary>Show all 20 versions</summary>

- `0.13.1`, `0.13.0`, `0.12.1`, `0.12.0`, `0.11.2`
- `0.11.1`, `0.11.0`, `0.10.1`, `0.10.0`, `0.9.2`
- `0.9.1`, `0.9.0`, `0.8.2`, `0.8.1`, `0.8.0`
- `0.7.1`, `0.7.0`, `0.6.0`, `0.5.0`, `0.4.3`

</details>

**Latest Version**: `0.13.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +cuelang.org@0.13.1 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cuelangorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cuelang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
