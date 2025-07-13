# linux-pam.org

> Package from pantry: linux-pam.org

## Package Information

- **Domain**: `linux-pam.org`
- **Name**: `linux-pam.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/linux-pam.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install linux-pam.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `github.com/thkukuk/libnsl`
- `sourceforge.net/libtirpc`
- `github.com/besser82/libxcrypt`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['linux-pam.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/linux-pam.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
