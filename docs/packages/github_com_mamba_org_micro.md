# micromamba

> The Fast Cross-Platform Package Manager

## Package Information

- **Domain**: `github.com/mamba-org/micro`
- **Name**: `micromamba`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/micro/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install micromamba
```

## Programs

This package provides the following executable programs:

- `micromamba`

## Available Versions

<details>
<summary>Show all 25 versions</summary>

- `2.3.0`, `2.2.0`, `2.1.1`, `2.1.0`, `2.0.8`
- `2.0.7`, `2.0.6`, `2.0.5`, `2.0.4`, `2.0.3`
- `2.0.2`, `2.0.1`, `2.0.0`, `1.5.12`, `1.5.11`
- `1.5.10`, `1.5.9`, `1.5.8`, `1.5.7`, `1.5.6`
- `1.5.5`, `1.5.3`, `1.5.1`, `1.5.0`, `1.4.9`

</details>

**Latest Version**: `2.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) micromamba -- $SHELL -i
```

## Dependencies

This package depends on:

- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_mamba_org_micro

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/micro/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
