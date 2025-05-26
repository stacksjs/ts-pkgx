# erlang.org

> Programming language for highly scalable real-time systems

## Package Information

- **Domain**: `erlangorg`
- **Name**: `erlang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/erlang.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +erlang.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `ct_run`
- `dialyzer`
- `epmd`
- `erl`
- `erlc`
- `escript`
- `run_erl`
- `to_erl`
- `typer`

## Available Versions

<details>
<summary>Show all 72 versions</summary>

- `28.0.0`, `27.3.4`, `27.3.3`, `27.3.2`, `27.3.1`
- `27.3.0`, `27.2.4`, `27.2.3`, `27.2.2`, `27.2.1`
- `27.2.0`, `27.1.3`, `27.1.2`, `27.1.1`, `27.1.0`
- `27.0.1`, `27.0.0`, `26.2.5.9`, `26.2.5.8`, `26.2.5.7`
- `26.2.5.6`, `26.2.5.5`, `26.2.5.4`, `26.2.5.3`, `26.2.5.2`
- `26.2.5.12`, `26.2.5.11`, `26.2.5.10`, `26.2.5.1`, `26.2.5`
- `26.2.4`, `26.2.2`, `26.2.1`, `26.2.0`, `26.1.2`
- `26.1.1`, `26.1.0`, `26.0.2`, `26.0.1`, `26.0.0`
- `25.3.2.9`, `25.3.2.8`, `25.3.2.7`, `25.3.2.6`, `25.3.2.5`
- `25.3.2.4`, `25.3.2.3`, `25.3.2.21`, `25.3.2.20`, `25.3.2.2`
- `25.3.2.19`, `25.3.2.18`, `25.3.2.17`, `25.3.2.16`, `25.3.2.15`
- `25.3.2.14`, `25.3.2.13`, `25.3.2.12`, `25.3.2.11`, `25.3.2.10`
- `25.3.2.1`, `25.3.2`, `25.3.1`, `25.3.0`, `25.2.2`
- `24.3.4.17`, `24.3.4.16`, `24.3.4.15`, `24.3.4.14`, `24.3.4.13`
- `24.3.4.12`, `24.3.4.11`

</details>

**Latest Version**: `28.0.0`

### Install Specific Version

```bash
# Install specific version
pkgx erlang.org@28.0.0
```

## Dependencies

This package depends on:

- `openssl.org^1.1`
- `invisible-island.net/ncurses`
- `linux/x86-64gnu.org/gcc/libstdcxx`
- `gnu.org/gcc/libstdcxx`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.erlangorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/erlang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
