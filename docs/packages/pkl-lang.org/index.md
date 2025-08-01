# pkl-lang.org

> A configuration as code language with rich validation and tooling.

## Package Information

- **Domain**: `pkl-lang.org`
- **Name**: `pkl-lang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pkl-lang.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pkl-lang.org
```

## Programs

This package provides the following executable programs:

- `jpkl`
- `pkl`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `0.29.0`, `0.28.2`, `0.28.1`, `0.28.0`, `0.27.2`
- `0.27.1`, `0.27.0`, `0.26.3`, `0.26.2`, `0.26.1`
- `0.26.0`, `0.25.3`, `0.25.2`

</details>

**Latest Version**: `0.29.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pkl-lang.org@0.29.0 -- $SHELL -i
```

## Related Packages

These packages work well with pkl-lang.org:

- [`openjdk.org`](../openjdk.org/index.md) - Development kit for the Java programming language

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['pkl-lang.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pkl-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
