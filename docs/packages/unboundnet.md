# unbound

> Unbound is a validating, recursive, and caching DNS resolver.

## Package Information

- **Domain**: `unboundnet`
- **Name**: `unbound`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/unbound.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +unbound.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `unbound`
- `unbound-anchor`
- `unbound-checkconf`
- `unbound-control`
- `unbound-control-setup`
- `unbound-host`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `1.23.0`, `1.22.0`, `1.21.1`, `1.21.0`, `1.20.0`
- `1.19.3`, `1.19.2`, `1.19.1`, `1.19.0`, `1.18.0`
- `1.17.1`

</details>

**Latest Version**: `1.23.0`

### Install Specific Version

```bash
# Install specific version
pkgx unbound@1.23.0
```

## Dependencies

This package depends on:

- `openssl.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['unboundnet']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/unbound.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
