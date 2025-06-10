# sphinx

> Tool to create intelligent and beautiful documentation

## Package Information

- **Domain**: `sphinx/doc.org`
- **Name**: `sphinx`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sphinx-doc.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +sphinx-doc.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `sphinx-apidoc`
- `sphinx-autogen`
- `sphinx-build`
- `sphinx-quickstart`

## Available Versions

<details>
<summary>Show all 42 versions</summary>

- `8.2.3`, `8.2.2`, `8.2.1`, `8.2.0`, `8.1.3`
- `8.1.2`, `8.1.1`, `8.1.0`, `8.0.2`, `8.0.1`
- `8.0.0`, `7.4.7`, `7.4.6`, `7.4.5`, `7.4.4`
- `7.4.3`, `7.4.2`, `7.4.1`, `7.4.0`, `7.3.7`
- `7.3.6`, `7.3.5`, `7.3.4`, `7.3.3`, `7.3.2`
- `7.3.1`, `7.3.0`, `7.2.6`, `7.2.5`, `7.2.4`
- `7.2.3`, `7.2.2`, `7.2.1`, `7.2.0`, `7.1.2`
- `7.1.1`, `7.1.0`, `7.0.1`, `7.0.0`, `6.2.1`
- `6.2.0`, `6.1.3`

</details>

**Latest Version**: `8.2.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sphinx/doc.org@8.2.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3.8<3.12`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.sphinxdocorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sphinx-doc.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
