# cargo

> The Rust package manager

## Package Information

- **Domain**: `rust-lang.org/cargo`
- **Name**: `cargo`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/cargo/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cargo
```

## Programs

This package provides the following executable programs:

- `cargo`

## Available Versions

<details>
<summary>Show all 26 versions</summary>

- `0.88.0`, `0.87.0`, `0.86.0`, `0.85.0`, `0.84.0`
- `0.83.0`, `0.82.0`, `0.81.0`, `0.80.0`, `0.79.0`
- `0.78.1`, `0.78.0`, `0.77.0`, `0.76.0`, `0.75.0`
- `0.74.0`, `0.73.1`, `0.72.1`, `0.72.0`, `0.71.0`
- `0.70.1`, `0.70.0`, `0.69.1`, `0.69.0`, `0.66.0`
- `0.65.0`

</details>

**Latest Version**: `0.88.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +rust-lang.org/cargo@0.88.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net^1`
- `libgit2.org~1.7 # links to libgit2.so.1.7`
- `curl.se/ca-certs`
- `linux:llvm.org`
- `linux:curl.se`

## Related Packages

These packages work well with cargo:

- `git-scm.org`
- `rust-lang.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cargo

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/rust-lang.org/cargo/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
