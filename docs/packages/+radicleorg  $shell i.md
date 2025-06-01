# radicle.org

> Radicle CLI

## Package Information

- **Domain**: `+radicleorg  $shell i`
- **Name**: `radicle.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/radicle.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +radicle.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `rad`
- `git-remote-rad`
- `rad-account`
- `rad-auth`
- `rad-checkout`
- `rad-clone`
- `rad-edit`
- `rad-ens`
- `rad-gov`
- `rad-help`
- `rad-init`
- `rad-inspect`
- `rad-issue`
- `rad-ls`
- `rad-merge`
- `rad-patch`
- `rad-path`
- `rad-pull`
- `rad-push`
- `rad-remote`
- `rad-reward`
- `rad-rm`
- `rad-self`
- `rad-sync`
- `rad-track`
- `rad-untrack`

## Aliases

This package can also be accessed using these aliases:

- `+radicle.org -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.6.1`

</details>

**Latest Version**: `0.6.1`

### Install Specific Version

```bash
# Install specific version
pkgx radicle.org@0.6.1
```

## Dependencies

This package depends on:

- `openssl.org^1.1.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.+radicleorg  $shell i

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/radicle.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
