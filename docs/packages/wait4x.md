# wait4x

> Wait4X allows you to wait for a port or a service to enter the requested state.

## Package Information

- **Domain**: `wait4x`
- **Name**: `wait4x`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/wait4x.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) wait4x
```

## Programs

This package provides the following executable programs:

- `wait4x`

## Aliases

This package can also be accessed using these aliases:

- `wait4x`

## Available Versions

<details>
<summary>Show all 7 versions</summary>

- `3.3.1`, `3.3.0`, `3.2.0`, `3.1.0`, `3.0.0`
- `2.14.3`, `2.14.2`

</details>

**Latest Version**: `3.3.1`

### Install Specific Version

```bash
# Install specific version
pkgx wait4x@3.3.1
```

## Related Packages

These packages work well with wait4x:

- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.wait4x

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/wait4x.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
