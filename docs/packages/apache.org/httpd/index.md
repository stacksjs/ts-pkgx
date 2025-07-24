# httpd

> Package from pantry: apache.org/httpd

## Package Information

- **Domain**: `apache.org/httpd`
- **Name**: `httpd`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/httpd/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apache.org/httpd
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `apache.org/apr>=1.3.0`
- `apache.org/apr-util>=1.3.0`
- `github.com/google/brotli`
- `nghttp2.org`
- `openssl.org`
- `pcre.org/v2`
- `gnome.org/libxml2`
- `zlib.net`
- `libexpat.github.io`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.httpd

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/httpd/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
