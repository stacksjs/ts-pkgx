# zsh.sourceforge.io

> UNIX shell (command interpreter)

## Package Information

- **Domain**: `zshsourceforge.io`
- **Name**: `zsh.sourceforge.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/zsh.sourceforge.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install zsh
```

## Programs

This package provides the following executable programs:

- `zsh`

## Aliases

This package can also be accessed using these aliases:

- `zsh`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `5.9.0`

</details>

**Latest Version**: `5.9.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +zshsourceforge.io@5.9.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `invisible-island.net/ncurses`
- `pcre.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.zshsourceforgeio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/zsh.sourceforge.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
