# code-server

> Package from pantry: coder.com/code-server

## Package Information

- **Domain**: `coder.com/code-server`
- **Name**: `code-server`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/code-server/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install coder.com/code-server
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `nodejs.org^22 # since 4.101.0`
- `linux:gnome.org/libsecret^0.21`
- `linux:x.org/x11^1.8`
- `linux:x.org/xkbfile^1.1`
- `linux:kerberos.org^1.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['code-server']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/code-server/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
