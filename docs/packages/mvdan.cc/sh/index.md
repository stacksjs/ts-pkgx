# shfmt

> A shell parser, formatter, and interpreter with bash support; includes shfmt

## Package Information

- **Domain**: `mvdan.cc/sh`
- **Name**: `shfmt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/sh/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install shfmt
```

## Programs

This package provides the following executable programs:

- `shfmt`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.11.0`, `3.10.0`, `3.9.0`, `3.8.0`

</details>

**Latest Version**: `3.11.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) shfmt -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
