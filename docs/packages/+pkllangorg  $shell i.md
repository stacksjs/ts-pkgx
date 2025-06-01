# pkl-lang.org

> A configuration as code language with rich validation and tooling.

## Package Information

- **Domain**: `+pkllangorg  $shell i`
- **Name**: `pkl-lang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pkl-lang.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +pkl-lang.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `jpkl`
- `pkl`

## Aliases

This package can also be accessed using these aliases:

- `+pkl-lang.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `0.28.2`, `0.28.1`, `0.28.0`, `0.27.2`, `0.27.1`
- `0.27.0`, `0.26.3`, `0.26.2`, `0.26.1`, `0.26.0`
- `0.25.3`, `0.25.2`

</details>

**Latest Version**: `0.28.2`

### Install Specific Version

```bash
# Install specific version
pkgx pkl-lang.org@0.28.2
```

## Related Packages

These packages work well with pkl-lang.org:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+pkllangorg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pkl-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
