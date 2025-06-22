# yq

> yq is a portable command-line YAML, JSON, XML, CSV, TOML  and properties processor

## Package Information

- **Domain**: `github.com/mikefarah/yq`
- **Name**: `yq`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mikefarah/yq/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install yq
```

## Programs

This package provides the following executable programs:

- `yq`

## Available Versions

<details>
<summary>Show all 33 versions</summary>

- `4.45.4`, `4.45.3`, `4.45.2`, `4.45.1`, `4.44.6`
- `4.44.5`, `4.44.3`, `4.44.2`, `4.44.1`, `4.43.1`
- `4.42.1`, `4.41.1`, `4.40.7`, `4.40.5`, `4.40.4`
- `4.40.3`, `4.40.2`, `4.40.1`, `4.35.2`, `4.35.1`
- `4.34.2`, `4.34.1`, `4.33.3`, `4.33.2`, `4.33.1`
- `4.32.2`, `4.32.1`, `4.31.2`, `4.31.1`, `4.30.8`
- `4.30.7`, `4.30.6`, `4.30.5`

</details>

**Latest Version**: `4.45.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) yq -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.yq

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mikefarah/yq/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
