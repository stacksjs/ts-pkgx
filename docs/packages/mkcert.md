# mkcert

> A simple zero-config tool to make locally trusted development certificates with any names you'd like.

## Package Information

- **Domain**: `mkcert`
- **Name**: `mkcert`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mkcert.dev/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) mkcert
```

## Programs

This package provides the following executable programs:

- `mkcert`

## Aliases

This package can also be accessed using these aliases:

- `mkcert`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.4.4`

</details>

**Latest Version**: `1.4.4`

### Install Specific Version

```bash
# Install specific version
pkgx mkcert@1.4.4
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mkcert

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mkcert.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
