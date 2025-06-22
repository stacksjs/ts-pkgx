# p11-kit

> Package from pantry: freedesktop.org/p11-kit

## Package Information

- **Domain**: `freedesktop.org/p11-kit`
- **Name**: `p11-kit`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/p11-kit/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install freedesktop.org/p11-kit
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `sourceware.org/libffi^3`
- `curl.se/ca-certs`
- `gnu.org/libtasn1^4`
- `gnu.org/gettext`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.p11_kit

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/p11-kit/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
