# tox

> Command line driven CI frontend and development task automation tool.

## Package Information

- **Domain**: `toxwiki`
- **Name**: `tox`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) tox
```

## Programs

This package provides the following executable programs:

- `tox`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `4.26.0`, `4.25.0`, `4.24.2`, `4.24.1`, `4.24.0`
- `4.23.2`, `4.23.1`, `4.23.0`, `4.22.0`, `4.21.2`
- `4.21.1`, `4.21.0`, `4.20.0`, `4.19.0`, `4.18.1`

</details>

**Latest Version**: `4.26.0`

### Install Specific Version

```bash
# Install specific version
pkgx tox@4.26.0
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['toxwiki']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tox.wiki/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
