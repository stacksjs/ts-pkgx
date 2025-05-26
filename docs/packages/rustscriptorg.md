# rust-script

> Run Rust files and expressions as scripts without any setup or compilation step.

## Package Information

- **Domain**: `rustscriptorg`
- **Name**: `rust-script`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rust-script.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) rust-script
```

## Programs

This package provides the following executable programs:

- `rust-script`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.35.0`, `0.34.0`

</details>

**Latest Version**: `0.35.0`

### Install Specific Version

```bash
# Install specific version
pkgx rust-script@0.35.0
```

## Related Packages

These packages work well with rust-script:

- `rust-lang.org`
- `rust-lang.org/cargo`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rustscriptorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rust-script.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
