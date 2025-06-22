# python.org

> Package from pantry: python.org

## Package Information

- **Domain**: `python.org`
- **Name**: `python.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/python.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install python.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `zlib.net@1`
- `sourceware.org/bzip2@1`
- `openssl.org^1.1`
- `sourceware.org/libffi@3`
- `libexpat.github.io@2`
- `bytereef.org/mpdecimal@2`
- `tukaani.org/xz@5`
- `sqlite.org@3`
- `gnu.org/readline@8`
- `invisible-island.net/ncurses@6`
- `tcl-lang.org@8`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pythonorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/python.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
