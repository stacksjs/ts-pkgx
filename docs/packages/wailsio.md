# wails.io

> Create beautiful applications using Go

## Package Information

- **Domain**: `wails.io`
- **Name**: `wails.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wails.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install wails
```

## Programs

This package provides the following executable programs:

- `wails`

## Aliases

This package can also be accessed using these aliases:

- `wails`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `2.10.1`, `2.10.0`, `2.9.3`, `2.9.2`, `2.9.1`
- `2.9.0`, `2.8.2`, `2.8.1`, `2.8.0`

</details>

**Latest Version**: `2.10.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +wails.io@2.10.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev^1.18`
- `npmjs.com`
- `linux:gnu.org/gcc`
- `linux:gtk.org/gtk3`
- `linux:freedesktop.org/pkg-config`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.wailsio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wails.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
