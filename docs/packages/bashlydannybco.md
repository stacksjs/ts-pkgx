# bashly

> Bash command line framework and CLI generator

## Package Information

- **Domain**: `bashly.dannyb.co`
- **Name**: `bashly`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/bashly.dannyb.co/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) bashly
```

## Programs

This package provides the following executable programs:

- `bashly`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `1.2.12`, `1.2.11`, `1.2.10`, `1.2.9`, `1.2.8`
- `1.2.7`, `1.2.6`, `1.2.5`, `1.2.4`, `1.2.3`
- `1.2.2`, `1.2.1`, `1.2.0`, `1.1.10`

</details>

**Latest Version**: `1.2.12`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +bashly.dannyb.co@1.2.12 -- $SHELL -i
```

## Dependencies

This package depends on:

- `ruby-lang.org^3.1`
- `rubygems.org`

## Related Packages

These packages work well with bashly:

- `gnu.org/bash`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bashlydannybco

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/bashly.dannyb.co/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
