# luarocks

> LuaRocks is the package manager for the Lua programming language.

## Package Information

- **Domain**: `luarocks`
- **Name**: `luarocks`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/luarocks.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +luarocks.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `luarocks`
- `luarocks-admin`

## Aliases

This package can also be accessed using these aliases:

- `+luarocks.org -- $SHELL -i`
- `luarocks`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.11.1`, `3.11.0`, `3.10.0`, `3.9.2`

</details>

**Latest Version**: `3.11.1`

### Install Specific Version

```bash
# Install specific version
pkgx luarocks@3.11.1
```

## Dependencies

This package depends on:

- `lua.org`
- `info-zip.org/unzip`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.luarocks

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/luarocks.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
