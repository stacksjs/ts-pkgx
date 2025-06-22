# bash-completion

> A package from ba.sh/completion

## Package Information

- **Domain**: `ba.sh/completion`
- **Name**: `bash-completion`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/bash-completion/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ba.sh/completion
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.11.0`

</details>

**Latest Version**: `2.11.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +ba.sh/completion@2.11.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bashcompletion

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/debian.org/bash-completion/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
