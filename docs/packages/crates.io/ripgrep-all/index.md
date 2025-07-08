# rga

> rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc.

## Package Information

- **Domain**: `crates.io/ripgrep-all`
- **Name**: `rga`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep-all/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install rga
```

## Programs

This package provides the following executable programs:

- `rga`
- `rga-fzf`
- `rga-fzf-open`
- `rga-preproc`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.10.9`, `0.10.8`, `0.10.7`, `0.10.6`

</details>

**Latest Version**: `0.10.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +crates.io/ripgrep-all@0.10.9 -- $SHELL -i
```

## Related Packages

These packages work well with rga:

- [`crates.io/ripgrep`](../ripgrep/index.md) - ripgrep recursively searches directories for a regex pattern while respecting your gitignore
- [`github.com/junegunn/fzf`](../../github.com/junegunn/fzf.md) - Package from pantry: github.com/junegunn/fzf

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.rga

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep-all/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
