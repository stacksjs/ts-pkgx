# tmate.io

> Instant Terminal Sharing

## Package Information

- **Domain**: `tmate.io`
- **Name**: `tmate.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/tmate.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tmate
```

## Programs

This package provides the following executable programs:

- `tmate`

## Aliases

This package can also be accessed using these aliases:

- `tmate`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.4.0`

</details>

**Latest Version**: `2.4.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +tmate.io@2.4.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `libevent.org^2.0`
- `invisible-island.net/ncurses@6`
- `msgpack.org@6`
- `libssh.org@0`
- `gnu.org/bison`
- `gnu.org/autoconf`
- `gnu.org/automake`
- `freedesktop.org/pkg-config`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tmateio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/tmate.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
