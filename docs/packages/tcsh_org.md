# tcsh.org

> Enhanced, fully compatible version of the Berkeley C shell

## Package Information

- **Domain**: `tcsh.org`
- **Name**: `tcsh.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tcsh.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +tcsh.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `csh`
- `tcsh`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `6.24.15`

</details>

**Latest Version**: `6.24.15`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +tcsh.org@6.24.15 -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/besser82/libxcrypt@4`
- `invisible-island.net/ncurses@6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tcsh_org

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tcsh.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
