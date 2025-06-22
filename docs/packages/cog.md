# cog

> The Conventional Commits toolbox

## Package Information

- **Domain**: `cocogitto.io`
- **Name**: `cog`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cocogitto.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cog
```

## Programs

This package provides the following executable programs:

- `cog`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `6.3.0`, `6.2.0`, `6.1.0`, `6.0.1`, `6.0.0`
- `5.6.0`, `5.5.0`

</details>

**Latest Version**: `6.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cog -- $SHELL -i
```

## Dependencies

This package depends on:

- `libgit2.org~1.7 # links to libgit2.so.1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cog

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cocogitto.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
