# mas

> :package: Mac App Store command line interface

## Package Information

- **Domain**: `githubcommasclimas`
- **Name**: `mas`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) mas
```

## Programs

This package provides the following executable programs:

- `mas`

## Aliases

This package can also be accessed using these aliases:

- `mas`
- `mas-cli/mas`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `2.2.2`, `2.2.1`, `2.2.0`, `2.1.0`, `2.0.0`
- `1.9.0`, `1.8.8`, `1.8.7`

</details>

**Latest Version**: `2.2.2`

### Install Specific Version

```bash
# Install specific version
pkgx mas@2.2.2
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.githubcommasclimas

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mas-cli/mas/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
