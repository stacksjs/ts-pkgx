# nlnetlabs.nl/ldns

> LDNS is a DNS library that facilitates DNS tool programming

## Package Information

- **Domain**: `nlnetlabs.nl/ldns`
- **Name**: `nlnetlabs.nl/ldns`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nlnetlabs.nl/ldns/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +nlnetlabs.nl/ldns -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `drill`
- `ldns-config`

## Aliases

This package can also be accessed using these aliases:

- `ldns`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `1.8.4`, `1.8.3`

</details>

**Latest Version**: `1.8.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +nlnetlabs.nl/ldns@1.8.4 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nlnetlabsnlldns

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nlnetlabs.nl/ldns/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
