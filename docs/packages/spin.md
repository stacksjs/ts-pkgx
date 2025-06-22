# spin

> Spin is the open source developer tool for building and running serverless applications powered by WebAssembly.

## Package Information

- **Domain**: `fermyon.com/spin`
- **Name**: `spin`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/fermyon.com/spin/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install spin
```

## Programs

This package provides the following executable programs:

- `spin`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `3.3.1`, `3.3.0`, `3.2.0`, `3.1.2`, `3.1.1`
- `3.1.0`, `3.0.0`, `2.7.0`

</details>

**Latest Version**: `3.3.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) spin -- $SHELL -i
```

## Related Packages

These packages work well with spin:

- `rust-lang.org`
- `rust-lang.org/cargo`
- `git-scm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.spin

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/fermyon.com/spin/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
