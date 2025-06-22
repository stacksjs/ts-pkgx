# hadolint

> Dockerfile linter, validate inline bash, written in Haskell

## Package Information

- **Domain**: `github.com/hadolint/hadolint`
- **Name**: `hadolint`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hadolint/hadolint/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install hadolint
```

## Programs

This package provides the following executable programs:

- `hadolint`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.12.0`

</details>

**Latest Version**: `2.12.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) hadolint -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.hadolint

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/hadolint/hadolint/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
