# acorn-cli

> A simple application deployment framework built on Kubernetes

## Package Information

- **Domain**: `acorn.io/acorn-cli`
- **Name**: `acorn-cli`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/acorn.io/acorn-cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install acorn
```

## Programs

This package provides the following executable programs:

- `acorn`

## Aliases

This package can also be accessed using these aliases:

- `acorn`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.10.1`, `0.10.0`, `0.9.2`

</details>

**Latest Version**: `0.10.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) acorn -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.acorn

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/acorn.io/acorn-cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
