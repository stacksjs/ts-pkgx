# loki

> Horizontally-scalable, highly-available log aggregation system

## Package Information

- **Domain**: `grafana.com/loki`
- **Name**: `loki`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/grafana.com/loki/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install loki
```

## Programs

This package provides the following executable programs:

- `loki`

## Available Versions

<details>
<summary>Show all 25 versions</summary>

- `3.5.4`, `3.5.3`, `3.5.2`, `3.5.1`, `3.5.0`
- `3.4.6`, `3.4.5`, `3.4.4`, `3.4.3`, `3.4.2`
- `3.4.1`, `3.4.0`, `3.3.4`, `3.3.3`, `3.3.2`
- `3.3.1`, `3.3.0`, `3.2.2`, `3.2.1`, `3.2.0`
- `2.9.15`, `2.9.14`, `2.9.13`, `2.9.12`, `2.9.11`

</details>

**Latest Version**: `3.5.4`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) loki -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.loki

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/grafana.com/loki/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
