# open-mpi.org

> Package from pantry: open-mpi.org

## Package Information

- **Domain**: `open-mpi.org`
- **Name**: `open-mpi.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install open-mpi.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `open-mpi.org/hwloc`
- `openpmix.github.io@5`
- `libevent.org`

## Related Packages

These packages work well with open-mpi.org:

- `OMPI_F77FLAGS^$FCFLAGS -I{{prefix}}/include`
- `OMPI_F90FLAGS^$FCFLAGS -I{{prefix}}/include`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.open_mpiorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
