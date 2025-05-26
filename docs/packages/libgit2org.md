# git2

> A cross-platform, linkable library implementation of Git that you can use in your application.

## Package Information

- **Domain**: `libgit2org`
- **Name**: `git2`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libgit2.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) git2
```

## Programs

This package provides the following executable programs:

- `git2`

## Aliases

This package can also be accessed using these aliases:

- `git2`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `1.9.0`, `1.8.4`, `1.8.3`, `1.8.2`, `1.8.1`
- `1.8.0`, `1.7.2`, `1.7.1`, `1.7.0`, `1.6.5`
- `1.6.4`

</details>

**Latest Version**: `1.9.0`

### Install Specific Version

```bash
# Install specific version
pkgx git2@1.9.0
```

## Dependencies

This package depends on:

- `libssh2.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libgit2org

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libgit2.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
