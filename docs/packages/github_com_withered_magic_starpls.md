# starpls

> An LSP implementation for Starlark, the configuration language used by Bazel and Buck2.

## Package Information

- **Domain**: `github.com/withered-magic/starpls`
- **Name**: `starpls`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/withered-magic/starpls/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install starpls
```

## Programs

This package provides the following executable programs:

- `starpls`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.1.21`

</details>

**Latest Version**: `0.1.21`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) starpls -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.github_com_withered_magic_starpls

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/withered-magic/starpls/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
