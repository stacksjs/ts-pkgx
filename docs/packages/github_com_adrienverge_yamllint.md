# yamllint

> A linter for YAML files.

## Package Information

- **Domain**: `github.com/adrienverge/yamllint`
- **Name**: `yamllint`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adrienverge/yamllint/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install yamllint
```

## Programs

This package provides the following executable programs:

- `yamllint`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `1.37.1`, `1.37.0`, `1.36.2`, `1.36.1`, `1.36.0`
- `1.35.1`, `1.35.0`, `1.34.0`, `1.33.0`, `1.32.0`

</details>

**Latest Version**: `1.37.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) yamllint -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org~3.11`
- `pyyaml.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_adrienverge_yamllint

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adrienverge/yamllint/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
