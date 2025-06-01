# git-cliff

> A highly customizable Changelog Generator that follows Conventional Commit specifications ⛰️

## Package Information

- **Domain**: `git/cliff.org`
- **Name**: `git-cliff`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/git-cliff.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) git-cliff
```

## Programs

This package provides the following executable programs:

- `git-cliff`

## Aliases

This package can also be accessed using these aliases:

- `git-cliff`

## Available Versions

<details>
<summary>Show all 21 versions</summary>

- `2.8.0`, `2.7.0`, `2.6.1`, `2.6.0`, `2.5.0`
- `2.4.0`, `2.3.0`, `2.2.2`, `2.2.1`, `2.2.0`
- `2.1.2`, `2.1.1`, `2.0.4`, `2.0.3`, `2.0.2`
- `2.0.1`, `2.0.0`, `1.4.0`, `1.3.1`, `1.3.0`
- `1.2.0`

</details>

**Latest Version**: `2.8.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +git/cliff.org@2.8.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libgit2.org~1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gitclifforg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/git-cliff.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
