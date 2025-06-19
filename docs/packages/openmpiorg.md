# open-mpi.org

> Open MPI main development repository

## Package Information

- **Domain**: `open/mpi.org`
- **Name**: `open-mpi.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +open-mpi.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `mpic++`
- `mpiCC`
- `mpicc`
- `mpicxx`
- `mpiexec`
- `mpif77`
- `mpif90`
- `mpifort`
- `mpirun`
- `ompi_info`
- `opal_wrapper`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `5.0.8`, `5.0.7`, `5.0.6`, `5.0.5`, `5.0.4`
- `5.0.3`, `5.0.2`, `5.0.1`, `4.1.8`, `4.1.7`
- `4.1.5`

</details>

**Latest Version**: `5.0.8`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +open/mpi.org@5.0.8 -- $SHELL -i
```

## Dependencies

This package depends on:

- `open-mpi.org/hwloc`
- `openpmix.github.io@5`
- `libevent.org`

## Related Packages

These packages work well with open-mpi.org:

- [`gnu.org/gcc`](gnuorggcc.md) - A package from gnu.org/gcc
- [`gnu.org/inetutils`](gnuorginetutils.md) - A package from gnu.org/inetutils

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.openmpiorg

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
