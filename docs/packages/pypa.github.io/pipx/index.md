# pipx

> Execute binaries from Python packages in isolated environments

## Package Information

- **Domain**: `pypa.github.io/pipx`
- **Name**: `pipx`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pypa.github.io/pipx/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pipx
```

## Programs

This package provides the following executable programs:

- `pipx`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `1.7.1`, `1.7.0`, `1.6.0`, `1.5.0`, `1.4.3`
- `1.4.2`, `1.4.1`, `1.4.0`, `1.3.3`, `1.3.2`
- `1.3.1`, `1.3.0`, `1.2.1`, `1.2.0`, `1.1.0`

</details>

**Latest Version**: `1.7.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pipx -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pipx

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pypa.github.io/pipx/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
