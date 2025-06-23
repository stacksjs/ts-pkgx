# gnu.org/libmicrohttpd

> A small C library that is supposed to make it easy to run an HTTP server

## Package Information

- **Domain**: `gnu.org/libmicrohttpd`
- **Name**: `gnu.org/libmicrohttpd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libmicrohttpd/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gnu.org/libmicrohttpd
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.0.1`

</details>

**Latest Version**: `1.0.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +gnu.org/libmicrohttpd@1.0.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/libunistring^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['gnu.org/libmicrohttpd']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libmicrohttpd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
