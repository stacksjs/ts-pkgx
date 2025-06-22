# git-grab

> Clone a git repository into a standard location organised by domain and path.

## Package Information

- **Domain**: `crates.io/git-grab`
- **Name**: `git-grab`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-grab/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install git-grab
```

## Programs

This package provides the following executable programs:

- `git-grab`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.0.0`, `2.1.0`, `2.0.0`, `1.0.1`

</details>

**Latest Version**: `3.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +crates.io/git-grab@3.0.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.git-grab

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/git-grab/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
