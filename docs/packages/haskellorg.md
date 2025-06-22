# haskell.org

> Mirror of the Glasgow Haskell Compiler. Please submit issues and patches to GHC's Gitlab instance (https://gitlab.haskell.org/ghc/ghc). First time contributors are encouraged to get started with the newcomers info (https://gitlab.haskell.org/ghc/ghc/wikis/contributing).

## Package Information

- **Domain**: `haskell.org`
- **Name**: `haskell.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install haskell.org
```

## Programs

This package provides the following executable programs:

- `ghc`
- `ghc-<span v-pre>{{version.marketing}}</span>`
- `ghc-<span v-pre>{{version}}</span>`
- `ghc-pkg`
- `ghc-pkg-<span v-pre>{{version.marketing}}</span>`
- `ghc-pkg-<span v-pre>{{version}}</span>`
- `ghci`
- `ghci-<span v-pre>{{version.marketing}}</span>`
- `ghci-<span v-pre>{{version}}</span>`
- `ghcup`
- `haddock`
- `haddock-<span v-pre>{{version.marketing}}</span>`
- `haddock-<span v-pre>{{version}}</span>`
- `hp2ps`
- `hp2ps-<span v-pre>{{version.marketing}}</span>`
- `hp2ps-<span v-pre>{{version}}</span>`
- `hpc`
- `hpc-<span v-pre>{{version.marketing}}</span>`
- `hpc-<span v-pre>{{version}}</span>`
- `hsc2hs`
- `hsc2hs-<span v-pre>{{version.marketing}}</span>`
- `hsc2hs-<span v-pre>{{version}}</span>`
- `runghc`
- `runghc-<span v-pre>{{version.marketing}}</span>`
- `runghc-<span v-pre>{{version}}</span>`
- `runhaskell`
- `runhaskell-<span v-pre>{{version.marketing}}</span>`
- `runhaskell-<span v-pre>{{version}}</span>`

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
- `linux:github.com/numactl/numactl^2`
- `linux:gnu.org/gcc`

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
