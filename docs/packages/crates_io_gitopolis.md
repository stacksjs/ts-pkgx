# gitopolis

> Manage multiple git repositories

## Package Information

- **Domain**: `crates.io/gitopolis`
- **Name**: `gitopolis`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitopolis/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gitopolis
```

## Programs

This package provides the following executable programs:

- `gitopolis`

## Available Versions

<details>
<summary>Show all 17 versions</summary>

- `1.5.14`, `1.5.13`, `1.5.11`, `1.5.8`, `1.5.7`
- `1.5.4`, `1.5.3`, `1.5.2`, `1.5.1`, `1.5.0`
- `1.4.2`, `1.4.1`, `1.4.0`, `1.3.3`, `1.3.2`
- `1.3.1`, `1.3.0`

</details>

**Latest Version**: `1.5.14`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) gitopolis -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `zlib.net^1`
- `git-scm.org^2`
- `libgit2.org~1.7 # links to libgit2.so.1.7`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.crates_io_gitopolis

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/gitopolis/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
