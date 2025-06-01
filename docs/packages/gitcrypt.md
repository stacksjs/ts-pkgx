# git-crypt

> Enable transparent encryption/decryption of files in a git repo

## Package Information

- **Domain**: `gitcrypt`
- **Name**: `git-crypt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/agwa.name/git-crypt/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) git-crypt
```

## Programs

This package provides the following executable programs:

- `git-crypt`

## Aliases

This package can also be accessed using these aliases:

- `git-crypt`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.7.0`

</details>

**Latest Version**: `0.7.0`

### Install Specific Version

```bash
# Install specific version
pkgx git-crypt@0.7.0
```

## Dependencies

This package depends on:

- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gitcrypt

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/agwa.name/git-crypt/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
