# nginx.org

> Package from pantry: nginx.org

## Package Information

- **Domain**: `nginx.org`
- **Name**: `nginx.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nginx.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install nginx.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `pcre.org^8.45 # switch to pcre.org/pcre2 once it`
- `zlib.net^1.2.13`
- `openssl.org^1.1.1k`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nginxorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nginx.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
