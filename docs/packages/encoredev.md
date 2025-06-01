# encore.dev

> Open Source Development Platform for building robust type-safe distributed systems with declarative infrastructure

## Package Information

- **Domain**: `encoredev`
- **Name**: `encore.dev`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +encore.dev -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `encore`
- `git-remote-encore`

## Aliases

This package can also be accessed using these aliases:

- `+encore.dev -- $SHELL -i`

## Available Versions

<details>
<summary>Show all 52 versions</summary>

- `1.48.0`, `1.47.0`, `1.46.22`, `1.46.21`, `1.46.20`
- `1.46.19`, `1.46.18`, `1.46.17`, `1.46.16`, `1.46.15`
- `1.46.14`, `1.46.13`, `1.46.12`, `1.46.11`, `1.46.10`
- `1.46.9`, `1.46.8`, `1.46.7`, `1.46.6`, `1.46.5`
- `1.46.4`, `1.46.2`, `1.46.1`, `1.46.0`, `1.45.6`
- `1.45.1`, `1.44.9`, `1.44.4`, `1.44.0`, `1.43.9`
- `1.43.7`, `1.43.3`, `1.42.3`, `1.42.1`, `1.41.9`
- `1.41.7`, `1.41.4`, `1.41.3`, `1.41.1`, `1.40.0`
- `1.39.0`, `1.38.0`, `1.37.0`, `1.35.3`, `1.34.7`
- `1.31.0`, `1.30.0`, `1.29.2`, `1.28.0`, `1.27.0`
- `1.26.0`, `1.25.0`

</details>

**Latest Version**: `1.48.0`

### Install Specific Version

```bash
# Install specific version
pkgx encore.dev@1.48.0
```

## Dependencies

This package depends on:

- `encore.dev/go^1.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.encoredev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
