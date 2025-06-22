# kpt

> Automate Kubernetes Configuration Editing

## Package Information

- **Domain**: `kpt.dev`
- **Name**: `kpt`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install kpt
```

## Programs

This package provides the following executable programs:

- `kpt`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.39.3`

</details>

**Latest Version**: `0.39.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) kpt -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kpt_dev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kpt.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
