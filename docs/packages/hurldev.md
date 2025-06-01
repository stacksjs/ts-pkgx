# hurl

> Run and Test HTTP Requests with plain text and curl

## Package Information

- **Domain**: `hurl.dev`
- **Name**: `hurl`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/hurl.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +hurl.dev -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `hurl`
- `hurlfmt`

## Aliases

This package can also be accessed using these aliases:

- `hurl`

## Available Versions

<details>
<summary>Show all 9 versions</summary>

- `6.1.1`, `6.1.0`, `6.0.0`, `5.0.1`, `5.0.0`
- `4.3.0`, `4.2.0`, `4.1.0`, `4.0.0`

</details>

**Latest Version**: `6.1.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +hurl.dev@6.1.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnome.org/libxml2`
- `curl.se`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.hurldev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/hurl.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
