# git-sizer

> Compute various size metrics for a Git repository, flagging those that might cause problems

## Package Information

- **Domain**: `github.com/github/git-sizer`
- **Name**: `git-sizer`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/github/git-sizer/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install git-sizer
```

## Programs

This package provides the following executable programs:

- `git-sizer`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.5.0`

</details>

**Latest Version**: `1.5.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) git-sizer -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['git-sizer']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/github/git-sizer/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
