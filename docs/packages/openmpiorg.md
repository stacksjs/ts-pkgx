# open-mpi.org

> Open MPI main development repository

## Package Information

- **Domain**: `openmpiorg`
- **Name**: `open-mpi.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/open-mpi.org/package.yml)

## Installation

```bash
# Install with pkgx
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
<summary>Show all 10 versions</summary>

- `5.0.7`, `5.0.6`, `5.0.5`, `5.0.4`, `5.0.3`
- `5.0.2`, `5.0.1`, `4.1.8`, `4.1.7`, `4.1.5`

</details>

**Latest Version**: `5.0.7`

### Install Specific Version

```bash
# Install specific version
pkgx open-mpi.org@5.0.7
```

## Dependencies

This package depends on:

- `open-mpi.org/hwloc`
- `openpmix.github.io`
- `libevent.org`

## Related Packages

These packages work well with open-mpi.org:

- `gnu.org/gcc`
- `gnu.org/inetutils`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['openmpiorg']

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
