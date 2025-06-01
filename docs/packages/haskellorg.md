# haskell.org

> Mirror of the Glasgow Haskell Compiler. Please submit issues and patches to GHC's Gitlab instance (https://gitlab.haskell.org/ghc/ghc). First time contributors are encouraged to get started with the newcomers info (https://gitlab.haskell.org/ghc/ghc/wikis/contributing).

## Package Information

- **Domain**: `haskell.org`
- **Name**: `haskell.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +haskell.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `ghc`
- `ghc-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `ghc-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `ghc-pkg`
- `ghc-pkg-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `ghc-pkg-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `ghci`
- `ghci-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `ghci-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `ghcup`
- `haddock`
- `haddock-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `haddock-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `hp2ps`
- `hp2ps-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `hp2ps-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `hpc`
- `hpc-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `hpc-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `hsc2hs`
- `hsc2hs-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `hsc2hs-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `runghc`
- `runghc-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `runghc-&lbrace;&lbrace;version&rbrace;&rbrace;`
- `runhaskell`
- `runhaskell-&lbrace;&lbrace;version.marketing&rbrace;&rbrace;`
- `runhaskell-&lbrace;&lbrace;version&rbrace;&rbrace;`

## Available Versions

<details>
<summary>Show all 19 versions</summary>

- `9.12.2`, `9.12.1`, `9.10.2`, `9.10.1`, `9.8.4`
- `9.8.2`, `9.8.1`, `9.6.7`, `9.6.6`, `9.6.5`
- `9.6.4`, `9.6.3`, `9.6.2`, `9.4.8`, `9.4.7`
- `9.4.4`, `9.2.8`, `9.0.2`, `8.10.7`

</details>

**Latest Version**: `9.12.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +haskell.org@9.12.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/gmp@6`
- `invisible-island.net/ncurses@6`
- `sourceware.org/libffi@3`
- `linuxgithub.com/numactl/numactl^2gnu.org/gcc`
- `github.com/numactl/numactl^2`
- `gnu.org/gcc`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.haskellorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
