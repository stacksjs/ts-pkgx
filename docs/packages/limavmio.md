# lima-vm.io

> Linux virtual machines, with a focus on running containers

## Package Information

- **Domain**: `limavmio`
- **Name**: `lima-vm.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/lima-vm.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +lima-vm.io -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `apptainer.lima`
- `docker.lima`
- `kubectl.lima`
- `lima`
- `limactl`
- `nerdctl.lima`
- `podman.lima`

## Available Versions

<details>
<summary>Show all 25 versions</summary>

- `1.1.1`, `1.1.0`, `1.0.7`, `1.0.6`, `1.0.5`
- `1.0.4`, `1.0.3`, `1.0.2`, `1.0.1`, `1.0.0`
- `0.23.2`, `0.23.1`, `0.23.0`, `0.22.0`, `0.21.0`
- `0.20.2`, `0.20.1`, `0.20.0`, `0.19.1`, `0.19.0`
- `0.18.0`, `0.17.2`, `0.17.1`, `0.17.0`, `0.16.0`

</details>

**Latest Version**: `1.1.1`

### Install Specific Version

```bash
# Install specific version
pkgx lima-vm.io@1.1.1
```

## Dependencies

This package depends on:

- `qemu.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.limavmio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/lima-vm.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
