# git-quick-stats

> ▁▅▆▃▅ Git quick statistics is a simple and efficient way to access various statistics in git repository.

## Package Information

- **Domain**: `git/quick-stats.sh`
- **Name**: `git-quick-stats`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) git-quick-stats
```

## Programs

This package provides the following executable programs:

- `git-quick-stats`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `2.6.2`, `2.6.1`, `2.6.0`, `2.5.8`, `2.5.7`
- `2.5.6`, `2.5.5`, `2.5.4`, `2.5.3`, `2.5.2`
- `2.5.1`, `2.5.0`, `2.4.1`

</details>

**Latest Version**: `2.6.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +git/quick-stats.sh@2.6.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org`
- `gnu.org/bash`
- `linuxgithub.com/util-linux/util-linux`
- `github.com/util-linux/util-linux`

## Related Packages

These packages work well with git-quick-stats:

- [`gnu.org/coreutils`](gnuorgcoreutils.md) - A package from gnu.org/coreutils

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.gitquickstatssh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
