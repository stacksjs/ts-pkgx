# shovel

> An Ethereum to Postgres indexer

## Package Information

- **Domain**: `indexsupply.com/shovel`
- **Name**: `shovel`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/indexsupply.com/shovel/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install shovel
```

## Programs

This package provides the following executable programs:

- `shovel`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `1.6.0`, `1.5.0`, `1.4.0`, `1.3.0`, `1.2.0`
- `1.1.0`, `1.0.0`

</details>

**Latest Version**: `1.6.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) shovel -- $SHELL -i
```

## Related Packages

These packages work well with shovel:

- [`postgresql.org`](../../postgresql.org/index.md) - Mirror of the official PostgreSQL GIT repository. Note that this is just a *mirror* - we don't work with pull requests on github. To contribute, please see https://wiki.postgresql.org/wiki/Submitting_a_Patch

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.shovel

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/indexsupply.com/shovel/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
