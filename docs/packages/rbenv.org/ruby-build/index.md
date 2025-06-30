# ruby-build

> Package from pantry: rbenv.org/ruby-build

## Package Information

- **Domain**: `rbenv.org/ruby-build`
- **Name**: `ruby-build`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rbenv.org/ruby-build/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install rbenv.org/ruby-build
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `openssl.org>=1.1`
- `curl.se`
- `gnu.org/autoconf^2.72`
- `freedesktop.org/pkg-config`
- `gnu.org/readline^8.2`
- `pyyaml.org/libyaml^0.2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['ruby-build']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rbenv.org/ruby-build/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
