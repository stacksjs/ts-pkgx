# charmcraft

> Package from pantry: github.com/canonical/charmcraft

## Package Information

- **Domain**: `github.com/canonical/charmcraft`
- **Name**: `charmcraft`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/charmcraft/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/canonical/charmcraft
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `libgit2.org~1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.charmcraft

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/canonical/charmcraft/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
