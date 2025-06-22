# sip

> Tool to create Python bindings for C and C++ libraries

## Package Information

- **Domain**: `riverbankcomputing.com/sip`
- **Name**: `sip`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/riverbankcomputing.com/sip/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +riverbankcomputing.com/sip -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `sip-install`
- `sip-build`
- `sip-distinfo`
- `sip-module`
- `sip-sdist`
- `sip-wheel`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `6.8.3`, `6.8.2`, `6.8.1`, `6.8.0`, `6.7.11`
- `6.7.0`

</details>

**Latest Version**: `6.8.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +riverbankcomputing.com/sip@6.8.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org~3.11`
- `llvm.org<17 # needs gcc to sip-install`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.riverbankcomputing_com_sip

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/riverbankcomputing.com/sip/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
