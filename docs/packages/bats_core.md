# bats

> Bash Automated Testing System

## Package Information

- **Domain**: `github.com/bats-core/bats-core`
- **Name**: `bats`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bats-core/bats-core/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install bats
```

## Programs

This package provides the following executable programs:

- `bats`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `1.12.0`, `1.11.1`, `1.11.0`, `1.10.0`

</details>

**Latest Version**: `1.12.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) bats -- $SHELL -i
```

## Dependencies

This package depends on:

- `gnu.org/coreutils^9.4`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bats_core

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/bats-core/bats-core/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
