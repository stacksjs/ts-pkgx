# rubocop

> A Ruby static code analyzer and formatter, based on the community Ruby style guide.

## Package Information

- **Domain**: `rubocop.org`
- **Name**: `rubocop`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rubocop.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) rubocop
```

## Programs

This package provides the following executable programs:

- `rubocop`

## Aliases

This package can also be accessed using these aliases:

- `rubocop`

## Available Versions

<details>
<summary>Show all 24 versions</summary>

- `1.75.8`, `1.75.7`, `1.75.6`, `1.75.5`, `1.75.4`
- `1.75.3`, `1.75.2`, `1.75.1`, `1.75.0`, `1.74.0`
- `1.73.2`, `1.73.1`, `1.73.0`, `1.72.2`, `1.72.1`
- `1.72.0`, `1.71.2`, `1.71.1`, `1.71.0`, `1.70.0`
- `1.69.2`, `1.69.1`, `1.69.0`, `1.68.0`

</details>

**Latest Version**: `1.75.8`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +rubocop.org@1.75.8 -- $SHELL -i
```

## Dependencies

This package depends on:

- `ruby-lang.org>=3.1<3.3.7`
- `rubygems.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rubocoporg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rubocop.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
