# git-scm.org

> Package from pantry: git-scm.org

## Package Information

- **Domain**: `git-scm.org`
- **Name**: `git-scm.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/git-scm.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install git-scm.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `zlib.net@1`
- `gnu.org/gettext^0.21`
- `curl.se>=5`
- `curl.se/ca-certs`
- `perl.org`
- `libexpat.github.io~2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['git-scm.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/git-scm.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
