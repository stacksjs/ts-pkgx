# pipenv.pypa.io

> Python Development Workflow for Humans.

## Package Information

- **Domain**: `pipenvpypa.io`
- **Name**: `pipenv.pypa.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pipenv.pypa.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pipenv
```

## Programs

This package provides the following executable programs:

- `pipenv`

## Aliases

This package can also be accessed using these aliases:

- `pipenv`

## Available Versions

<details>
<summary>Show all 48 versions</summary>

- `3000.0.0`, `2025.0.3`, `2025.0.2`, `2025.0.1`, `2025.0.0`
- `2024.4.1`, `2024.4.0`, `2024.3.1`, `2024.3.0`, `2024.2.0`
- `2024.1.0`, `2024.0.3`, `2024.0.2`, `2024.0.1`, `2024.0.0`
- `2023.12.1`, `2023.12.0`, `2023.11.17`, `2023.11.15`, `2023.11.14`
- `2023.10.24`, `2023.10.3`, `2023.9.8`, `2023.9.7`, `2023.9.1`
- `2023.8.28`, `2023.8.26`, `2023.8.25`, `2023.8.23`, `2023.8.22`
- `2023.8.21`, `2023.8.20`, `2023.8.19`, `2023.7.23`, `2023.7.9`
- `2023.7.4`, `2023.7.3`, `2023.7.1`, `2023.6.26`, `2023.6.18`
- `2023.6.12`, `2023.6.11`, `2023.6.2`, `2023.5.19`, `2023.4.29`
- `2023.4.20`, `2023.2.18`, `2023.2.4`

</details>

**Latest Version**: `3000.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +pipenvpypa.io@3000.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`
- `python.org~3.11 # approx. 3 older versions won’t work with python 3.12`
- `crates.io/semverator`

## Related Packages

These packages work well with pipenv.pypa.io:

- [`pip.pypa.io`](pippypaio.md) - The Python package installer

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pipenvpypaio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pipenv.pypa.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
