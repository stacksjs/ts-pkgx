# haskell.org

> Package from pantry: haskell.org

## Package Information

- **Domain**: `haskell.org`
- **Name**: `haskell.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install haskell.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `gnu.org/gmp@6`
- `invisible-island.net/ncurses@6`
- `sourceware.org/libffi@3`
- `linux:github.com/numactl/numactl^2`
- `linux:gnu.org/gcc`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['haskell.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
