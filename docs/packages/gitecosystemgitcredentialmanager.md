# git-credential-manager

> Secure, cross-platform Git credential storage with authentication to GitHub, Azure Repos, and other popular Git hosting services.

## Package Information

- **Domain**: `gitecosystemgitcredentialmanager`
- **Name**: `git-credential-manager`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-ecosystem/git-credential-manager/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) git-credential-manager
```

## Programs

This package provides the following executable programs:

- `git-credential-manager`

## Aliases

This package can also be accessed using these aliases:

- `git-credential-manager`
- `git-ecosystem/git-credential-manager`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.6.1`

</details>

**Latest Version**: `2.6.1`

### Install Specific Version

```bash
# Install specific version
pkgx git-credential-manager@2.6.1
```

## Dependencies

This package depends on:

- `openssl.org^1.1.1`
- `unicode.org^71`
- `zlib.net^1.3`
- `dotnet.microsoft.com^8.0`

## Related Packages

These packages work well with git-credential-manager:

- `git-scm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gitecosystemgitcredentialmanager

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/git-ecosystem/git-credential-manager/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
