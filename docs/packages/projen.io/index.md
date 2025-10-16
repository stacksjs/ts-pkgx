# projen

> Rapidly build modern applications with advanced configuration management

## Package Information

- **Domain**: `projen.io`
- **Name**: `projen`
- **Homepage**: https://projen.io
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/projen.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install projen.io
```

## Programs

This package provides the following executable programs:

- `projen`

## Available Versions

<details>
<summary>Show all 64 versions</summary>

- `0.98.1`, `0.98.0`, `0.97.2`, `0.97.1`, `0.97.0`
- `0.96.5`, `0.96.4`, `0.96.3`, `0.96.2`, `0.96.1`
- `0.96.0`, `0.95.6`, `0.95.5`, `0.95.4`, `0.95.3`
- `0.95.2`, `0.95.1`, `0.95.0`, `0.94.2`, `0.94.1`
- `0.94.0`, `0.93.3`, `0.93.2`, `0.93.1`, `0.93.0`
- `0.92.12`, `0.92.11`, `0.92.10`, `0.92.9`, `0.92.8`
- `0.92.7`, `0.92.6`, `0.92.5`, `0.92.4`, `0.92.3`
- `0.92.2`, `0.92.1`, `0.92.0`, `0.91.31`, `0.91.30`
- `0.91.29`, `0.91.28`, `0.91.27`, `0.91.26`, `0.91.25`
- `0.91.24`, `0.91.23`, `0.91.22`, `0.91.21`, `0.91.20`
- `0.91.19`, `0.91.18`, `0.91.17`, `0.91.16`, `0.91.15`
- `0.91.14`, `0.91.13`, `0.91.12`, `0.91.11`, `0.91.10`
- `0.91.9`, `0.91.8`, `0.91.7`, `0.91.6`

</details>

**Latest Version**: `0.98.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +projen.io@0.98.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `nodejs.org^22 || ^20 || ^18`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.projen

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/projen.io/package.yml)
- [Homepage](https://projen.io)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
