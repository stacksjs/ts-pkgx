# marionette

> Something like puppet, for the localhost only.

## Package Information

- **Domain**: `github.com/skx/marionette`
- **Name**: `marionette`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/skx/marionette/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install marionette
```

## Programs

This package provides the following executable programs:

- `marionette`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.19.0`, `0.18.0`

</details>

**Latest Version**: `0.19.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) marionette -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_skx_marionette

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/skx/marionette/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
