# swift.org

> Package from pantry: swift.org

## Package Information

- **Domain**: `swift.org`
- **Name**: `swift.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install swift.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `linux:gnu.org/gcc`
- `linux:gnu.org/binutils`
- `linux:gnupg.org^2`
- `linux:gnome.org/libxml2`
- `linux:libgit2.org~1.7 # links to libgit2.so.1.7`
- `linux:curl.se`
- `linux:sqlite.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['swift.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
