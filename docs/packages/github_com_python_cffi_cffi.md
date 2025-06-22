# github.com/python-cffi/cffi

> A Foreign Function Interface package for calling C libraries from Python.

## Package Information

- **Domain**: `github.com/python-cffi/cffi`
- **Name**: `github.com/python-cffi/cffi`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/python-cffi/cffi/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install github.com/python-cffi/cffi
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `1.17.1`, `1.17.0`, `1.16.0`

</details>

**Latest Version**: `1.17.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/python-cffi/cffi@1.17.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3.11`
- `github.com/eliben/pycparser^2.21`
- `sourceware.org/libffi^3.4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_python_cffi_cffi

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/python-cffi/cffi/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
