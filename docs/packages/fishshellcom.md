# fishshell.com

> User-friendly command-line shell for UNIX-like operating systems

## Package Information

- **Domain**: `fishshell.com`
- **Name**: `fishshell.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/fishshell.com/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install +fishshell.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `fish`
- `fish_indent`
- `fish_key_reader`

## Aliases

This package can also be accessed using these aliases:

- `fish`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `4.0.2`, `4.0.1`, `4.0.0`, `3.7.1`, `3.7.0`
- `3.6.4`, `3.6.3`, `3.6.2`, `3.6.1`, `3.6.0`
- `3.5.1`

</details>

**Latest Version**: `4.0.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +fishshell.com@4.0.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gettext`
- `invisible-island.net/ncurses>=6.0`
- `cmake.org>=3.5`
- `freedesktop.org/pkg-config`
- `gnu.org/patch`
- `git-scm.org^2 # needed for fish`
- `rust-lang.org^1.56 # v4`
- `rust-lang.org/cargo`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.fishshellcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/fishshell.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
