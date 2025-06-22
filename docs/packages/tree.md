# tree

> Display directories as trees (with optional color/HTML output)

## Package Information

- **Domain**: `gitlab.com/OldManProgrammer/unix-tree`
- **Name**: `tree`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/OldManProgrammer/unix-tree/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install tree
```

## Programs

This package provides the following executable programs:

- `tree`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `2.2.1`, `2.2.0`, `2.1.3`, `2.1.2`, `2.1.1`
- `2.1.0`

</details>

**Latest Version**: `2.2.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) tree -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.tree

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/OldManProgrammer/unix-tree/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
