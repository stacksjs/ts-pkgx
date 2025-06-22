# synth

> The Declarative Data Generator

## Package Information

- **Domain**: `getsynth.com`
- **Name**: `synth`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/getsynth.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install synth
```

## Programs

This package provides the following executable programs:

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
sh <(curl https://pkgx.sh) synth -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.synth

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
