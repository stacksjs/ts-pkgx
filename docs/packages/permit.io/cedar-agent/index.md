# cedar-agent

> Cedar-agent is the easiest way to deploy and run Cedar

## Package Information

- **Domain**: `permit.io/cedar-agent`
- **Name**: `cedar-agent`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/permit.io/cedar-agent/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cedar-agent
```

## Programs

This package provides the following executable programs:

- `cedar-agent`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.2.0`, `0.1.4`, `0.1.3`

</details>

**Latest Version**: `0.2.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cedar-agent -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['cedar-agent']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/permit.io/cedar-agent/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
