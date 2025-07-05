# operator-sdk

> SDK for building Kubernetes applications. Provides high level APIs, useful abstractions, and project scaffolding.

## Package Information

- **Domain**: `operatorframework.io/operator-sdk`
- **Name**: `operator-sdk`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/operatorframework.io/operator-sdk/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install operator-sdk
```

## Programs

This package provides the following executable programs:

- `operator-sdk`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `1.40.0`, `1.39.2`, `1.39.1`, `1.39.0`, `1.38.0`
- `1.37.0`, `1.36.1`, `1.36.0`, `1.35.0`, `1.34.2`
- `1.34.1`, `1.34.0`, `1.33.0`, `1.32.0`

</details>

**Latest Version**: `1.40.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) operator-sdk -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev^1.19`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['operator-sdk']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/operatorframework.io/operator-sdk/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
