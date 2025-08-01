# python

> The Python programming language

## Package Information

- **Domain**: `python.org`
- **Name**: `python`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/python.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install py
```

## Programs

This package provides the following executable programs:

- `python`
- `python3`
- `python3.13`

## Aliases

This package can also be accessed using these aliases:

- `py`

## Available Versions

<details>
<summary>Show all 151 versions</summary>

- `3.13.5`, `3.13.4`, `3.13.3`, `3.13.2`, `3.13.1`
- `3.13.0`, `3.12.11`, `3.12.10`, `3.12.9`, `3.12.8`
- `3.12.7`, `3.12.6`, `3.12.5`, `3.12.4`, `3.12.3`
- `3.12.2`, `3.12.1`, `3.12.0`, `3.11.13`, `3.11.12`
- `3.11.11`, `3.11.10`, `3.11.9`, `3.11.8`, `3.11.7`
- `3.11.6`, `3.11.5`, `3.11.4`, `3.11.3`, `3.11.2`
- `3.11.1`, `3.11.0`, `3.10.18`, `3.10.17`, `3.10.16`
- `3.10.15`, `3.10.14`, `3.10.13`, `3.10.12`, `3.10.11`
- `3.10.10`, `3.10.8`, `3.10.7`, `3.10.6`, `3.10.5`
- `3.10.4`, `3.10.3`, `3.10.2`, `3.10.1`, `3.10.0`
- `3.9.23`, `3.9.22`, `3.9.21`, `3.9.20`, `3.9.19`
- `3.9.18`, `3.9.17`, `3.9.16`, `3.9.15`, `3.9.14`
- `3.9.13`, `3.9.12`, `3.9.11`, `3.9.10`, `3.9.9`
- `3.9.8`, `3.9.7`, `3.9.6`, `3.9.5`, `3.9.4`
- `3.9.3`, `3.9.2`, `3.9.1`, `3.9.0`, `3.8.20`
- `3.8.19`, `3.8.18`, `3.8.17`, `3.8.16`, `3.8.15`
- `3.8.14`, `3.8.13`, `3.8.12`, `3.8.11`, `3.8.10`
- `3.8.9`, `3.8.8`, `3.8.7`, `3.8.6`, `3.8.5`
- `3.8.4`, `3.8.3`, `3.8.2`, `3.8.1`, `3.8.0`
- `3.7.17`, `3.7.16`, `3.7.15`, `3.7.14`, `3.7.13`
- `3.7.12`, `3.7.11`, `3.7.10`, `3.7.9`, `3.7.8`
- `3.7.7`, `3.7.6`, `3.7.5`, `3.7.4`, `3.7.3`
- `3.7.2`, `3.7.1`, `3.7.0`, `3.6.15`, `3.6.14`
- `3.6.13`, `3.6.12`, `3.6.11`, `3.6.10`, `3.6.9`
- `3.6.8`, `3.6.7`, `3.6.6`, `3.6.5`, `3.6.4`
- `3.6.3`, `3.6.2`, `3.6.1`, `3.6.0`, `3.5.10`
- `3.5.9`, `3.5.8`, `3.5.7`, `3.5.6`, `3.5.5`
- `3.5.4`, `3.5.3`, `3.5.2`, `3.5.1`, `3.5.0`
- `3.4.10`, `3.4.9`, `3.4.8`, `3.4.7`, `3.4.6`
- `3.4.5`, `3.4.4`, `3.4.3`, `3.4.2`, `3.3.0`
- `2.7.18`

</details>

**Latest Version**: `3.13.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +python.org@3.13.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `zlib.net@1`
- `sourceware.org/bzip2@1`
- `openssl.org^1.1`
- `sourceware.org/libffi@3`
- `libexpat.github.io@2`
- `bytereef.org/mpdecimal@2`
- `tukaani.org/xz@5`
- `sqlite.org@3`
- `gnu.org/readline@8`
- `invisible-island.net/ncurses@6`
- `tcl-lang.org@8`

## Related Packages

These packages work well with python:

- [`pip.pypa.io`](../pip.pypa.io/index.md) - The Python package installer

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.py

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/python.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
