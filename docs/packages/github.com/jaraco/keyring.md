# keyring

> Package from pantry: github.com/jaraco/keyring

## Package Information

- **Domain**: `github.com/jaraco/keyring`
- **Name**: `keyring`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jaraco/keyring/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/jaraco/keyring
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `github.com/python-cffi/cffi^1.16`
- `github.com/eliben/pycparser^2.21`
- `cryptography.io^42`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.keyring

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jaraco/keyring/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
