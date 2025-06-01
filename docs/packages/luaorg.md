# lua

> Powerful, lightweight programming language

## Package Information

- **Domain**: `lua.org`
- **Name**: `lua`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lua.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +lua.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `lua`
- `luac`

## Aliases

This package can also be accessed using these aliases:

- `lua`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `5.4.7`, `5.4.6`, `5.4.4`

</details>

**Latest Version**: `5.4.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +lua.org@5.4.7 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/readline`

## Related Packages

These packages work well with lua:

- [`luarocks.org`](luarocksorg.md) - LuaRocks is the package manager for the Lua programming language.

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.luaorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/lua.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
