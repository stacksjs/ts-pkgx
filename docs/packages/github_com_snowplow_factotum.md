# factotum

> A system to programmatically run data pipelines

## Package Information

- **Domain**: `github.com/snowplow/factotum`
- **Name**: `factotum`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/snowplow/factotum/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install factotum
```

## Programs

This package provides the following executable programs:

- `factotum`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.6.1`, `0.6.0`

</details>

**Latest Version**: `0.6.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/snowplow/factotum@0.6.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_snowplow_factotum

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/snowplow/factotum/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
