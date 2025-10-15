# terraform-docs

> Generate documentation from Terraform modules in various output formats

## Package Information

- **Domain**: `terraform-docs.io`
- **Name**: `terraform-docs`
- **Homepage**: https://terraform-docs.io
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/terraform-docs.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install terraform-docs.io
```

## Programs

This package provides the following executable programs:

- `terraform-docs`

## Available Versions

<details>
<summary>Show all 5 versions</summary>

- `0.20.0`, `0.19.0`, `0.18.0`, `0.17.0`, `0.16.0`

</details>

**Latest Version**: `0.20.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +terraform-docs.io@0.20.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev@^1.16`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['terraform-docs']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/terraform-docs.io/package.yml)
- [Homepage](https://terraform-docs.io)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
