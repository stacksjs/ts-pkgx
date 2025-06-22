# rg

> ripgrep recursively searches directories for a regex pattern while respecting your gitignore

## Package Information

- **Domain**: `crates.io/ripgrep`
- **Name**: `rg`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install rg
```

## Programs

This package provides the following executable programs:

- `rg`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `14.1.1`, `14.1.0`, `14.0.3`, `14.0.2`, `14.0.1`
- `14.0.0`, `13.0.0`

</details>

**Latest Version**: `14.1.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) rg -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.ripgrep

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
