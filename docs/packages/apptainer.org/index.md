# apptainer.org

> Package from pantry: apptainer.org

## Package Information

- **Domain**: `apptainer.org`
- **Name**: `apptainer.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apptainer.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install apptainer.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `github.com/seccomp/libseccomp@2`
- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['apptainer.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apptainer.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
