# dog

> A command-line DNS client.

## Package Information

- **Domain**: `dns.lookup.dog`
- **Name**: `dog`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/dns.lookup.dog/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) dog
```

## Programs

This package provides the following executable programs:

- `dog`

## Aliases

This package can also be accessed using these aliases:

- `dog`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.1.0`

</details>

**Latest Version**: `0.1.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +dns.lookup.dog@0.1.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.dnslookupdog

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/dns.lookup.dog/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
