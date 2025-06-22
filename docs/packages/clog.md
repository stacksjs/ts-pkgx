# clog-tool.github.io

> Colorized pattern-matching log tail utility

## Package Information

- **Domain**: `clog-tool.github.io`
- **Name**: `clog-tool.github.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/clog-tool.github.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install clog
```

## Programs

This package provides the following executable programs:

- `clog`

## Aliases

This package can also be accessed using these aliases:

- `clog`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.9.3`

</details>

**Latest Version**: `0.9.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +clog-tool.github.io@0.9.3 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.clog

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/clog-tool.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
