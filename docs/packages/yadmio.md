# yadm.io

> Yet Another Dotfiles Manager

## Package Information

- **Domain**: `yadm.io`
- **Name**: `yadm.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/yadm.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install yadm.io
```

## Programs

This package provides the following executable programs:

- `yadm`

## Aliases

This package can also be accessed using these aliases:

- `yadm`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.5.0`, `3.4.0`, `3.3.0`, `3.2.2`

</details>

**Latest Version**: `3.5.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +yadm.io@3.5.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org`
- `gnu.org/bash`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.yadmio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/yadm.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
