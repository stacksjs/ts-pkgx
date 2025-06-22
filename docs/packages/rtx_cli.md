# rtx-cli

> Package from pantry: crates.io/rtx-cli

## Package Information

- **Domain**: `crates.io/rtx-cli`
- **Name**: `rtx-cli`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rtx-cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install crates.io/rtx-cli
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `openssl.org^1.1 # newer RTX after 1.35.2 versions require openssl`
- `libgit2.org^1 # newer mise after 2024.5.12 versions require libgit2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rtx_cli

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/rtx-cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
