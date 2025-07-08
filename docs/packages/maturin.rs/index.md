# maturin

> Build and publish crates with pyo3, cffi and uniffi bindings as well as rust binaries as python packages

## Package Information

- **Domain**: `maturin.rs`
- **Name**: `maturin`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/maturin.rs/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install maturin
```

## Programs

This package provides the following executable programs:

- `maturin`

## Available Versions

<details>
<summary>Show all 22 versions</summary>

- `1.9.1`, `1.9.0`, `1.8.7`, `1.8.6`, `1.8.5`
- `1.8.3`, `1.8.2`, `1.8.1`, `1.8.0`, `1.7.8`
- `1.7.7`, `1.7.6`, `1.7.5`, `1.7.4`, `1.7.3`
- `1.7.2`, `1.7.1`, `1.7.0`, `1.6.0`, `1.5.1`
- `1.5.0`, `1.4.0`

</details>

**Latest Version**: `1.9.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) maturin -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.maturin

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/maturin.rs/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
