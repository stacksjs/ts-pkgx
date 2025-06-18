# mosh

> Remote terminal application

## Package Information

- **Domain**: `mo.sh`
- **Name**: `mosh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mosh.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +mosh.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mosh-client`
- `mosh-server`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.4.0`

</details>

**Latest Version**: `1.4.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +mo.sh@1.4.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `protobuf.dev@26.1.0`
- `invisible-island.net/ncurses@6`
- `zlib.net@1.3`
- `linuxopenssl.org@3`
- `openssl.org@3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.mosh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mosh.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
