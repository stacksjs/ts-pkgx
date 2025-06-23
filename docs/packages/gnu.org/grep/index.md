# grep

> A command-line utility for searching plain-text data sets for lines that match a regular expression

## Package Information

- **Domain**: `gnu.org/grep`
- **Name**: `grep`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/grep/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install grep
```

## Programs

This package provides the following executable programs:

- `grep`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `3.12.0`, `3.11.0`, `3.8.0`

</details>

**Latest Version**: `3.12.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) grep -- $SHELL -i
```

## Dependencies

This package depends on:

- `pcre.org/v2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.grep

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/grep/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
