# libwebsockets.org

> canonical libwebsockets.org networking library

## Package Information

- **Domain**: `libwebsocketsorg`
- **Name**: `libwebsockets.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/libwebsockets.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +libwebsockets.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Aliases

This package can also be accessed using these aliases:

- `+libwebsockets.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `4.3.5`, `4.3.4`, `4.3.3`, `4.3.2`

</details>

**Latest Version**: `4.3.5`

### Install Specific Version

```bash
# Install specific version
pkgx libwebsockets.org@4.3.5
```

## Dependencies

This package depends on:

- `libuv.org@1`
- `libevent.org@2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.libwebsocketsorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/libwebsockets.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
