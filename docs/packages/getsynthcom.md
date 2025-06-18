# getsynth.com

> The Declarative Data Generator

## Package Information

- **Domain**: `getsynth.com`
- **Name**: `getsynth.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/getsynth.com/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install synth
```

## Programs

This package provides the following executable programs:

- `synth`

## Aliases

This package can also be accessed using these aliases:

- `synth`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.6.9`

</details>

**Latest Version**: `0.6.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +getsynth.com@0.6.9 -- $SHELL -i
```

## Dependencies

This package depends on:

- `rust-lang.org^1.65`
- `rust-lang.org/cargo`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.getsynthcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/getsynth.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
