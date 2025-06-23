# make

> A build automation tool that builds executable programs and libraries from source code

## Package Information

- **Domain**: `gnu.org/make`
- **Name**: `make`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/make/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install make
```

## Programs

This package provides the following executable programs:

- `make`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `4.3.0`

</details>

**Latest Version**: `4.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) make -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.make

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/make/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
