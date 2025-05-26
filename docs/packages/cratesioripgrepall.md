# rga

> rga: ripgrep, but also search in PDFs, E-Books, Office documents, zip, tar.gz, etc.

## Package Information

- **Domain**: `cratesioripgrepall`
- **Name**: `rga`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep-all/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +crates.io/ripgrep-all -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `rga`
- `rga-fzf`
- `rga-fzf-open`
- `rga-preproc`

## Aliases

This package can also be accessed using these aliases:

- `rga`
- `ripgrep-all`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `0.10.9`, `0.10.8`, `0.10.7`, `0.10.6`

</details>

**Latest Version**: `0.10.9`

### Install Specific Version

```bash
# Install specific version
pkgx rga@0.10.9
```

## Related Packages

These packages work well with rga:

- `crates.io/ripgrep`
- `github.com/junegunn/fzf`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cratesioripgrepall

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep-all/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
