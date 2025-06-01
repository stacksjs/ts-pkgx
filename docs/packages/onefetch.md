# onefetch

> Command-line Git information tool

## Package Information

- **Domain**: `onefetch`
- **Name**: `onefetch`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) onefetch
```

## Programs

This package provides the following executable programs:

- `onefetch`

## Aliases

This package can also be accessed using these aliases:

- `onefetch`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `2.24.0`, `2.23.1`, `2.23.0`, `2.22.0`, `2.21.0`
- `2.20.0`, `2.19.0`, `2.18.1`

</details>

**Latest Version**: `2.24.0`

### Install Specific Version

```bash
# Install specific version
pkgx onefetch@2.24.0
```

## Dependencies

This package depends on:

- `libgit2.org~1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.onefetch

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/onefetch.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
