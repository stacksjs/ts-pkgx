# luajit

> Mirror of the LuaJIT git repository

## Package Information

- **Domain**: `luajit`
- **Name**: `luajit`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/luajit.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +luajit.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `luajit`
- `luajit-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;.`

## Aliases

This package can also be accessed using these aliases:

- `+luajit.org -- $SHELL -i`
- `luajit`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.1.0`

</details>

**Latest Version**: `2.1.0`

### Install Specific Version

```bash
# Install specific version
pkgx luajit@2.1.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.luajit

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/luajit.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
