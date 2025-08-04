# mise.jdx.dev

> Package from pantry: mise.jdx.dev

## Package Information

- **Domain**: `mise.jdx.dev`
- **Name**: `mise.jdx.dev`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mise.jdx.dev/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mise.jdx.dev
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `openssl.org^1.1 # newer mise after 1.35.2 versions require openssl`
- `libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['mise.jdx.dev']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mise.jdx.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
