# wget

> Internet file retriever

## Package Information

- **Domain**: `gnu.org/wget`
- **Name**: `wget`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/wget/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install wget
```

## Programs

This package provides the following executable programs:

- `wget`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.25.0`, `1.24.5`, `1.21.4`, `1.21.3`

</details>

**Latest Version**: `1.25.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) wget -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.wget

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/wget/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
