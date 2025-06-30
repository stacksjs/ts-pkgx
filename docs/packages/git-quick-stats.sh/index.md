# git-quick-stats

> ▁▅▆▃▅ Git quick statistics is a simple and efficient way to access various statistics in git repository.

## Package Information

- **Domain**: `git-quick-stats.sh`
- **Name**: `git-quick-stats`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install git-quick-stats
```

## Programs

This package provides the following executable programs:

- `git-quick-stats`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `2.7.0`, `2.6.2`, `2.6.1`, `2.6.0`, `2.5.8`
- `2.5.7`, `2.5.6`, `2.5.5`, `2.5.4`, `2.5.3`
- `2.5.2`, `2.5.1`, `2.5.0`, `2.4.1`

</details>

**Latest Version**: `2.7.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) git-quick-stats -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org`
- `gnu.org/bash`
- `linux:github.com/util-linux/util-linux`

## Related Packages

These packages work well with git-quick-stats:

- [`gnu.org/coreutils`](../gnu.org/coreutils/index.md)
- [`invisible-island.net/ncurses`](../invisible-island.net/ncurses/index.md) - Package from pantry: invisible-island.net/ncurses

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['git-quick-stats']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/git-quick-stats.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
