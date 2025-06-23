# cf

> Filter to replace numeric timestamps with a formatted date time

## Package Information

- **Domain**: `cloudfoundry.org/cf-cli`
- **Name**: `cf`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/cloudfoundry.org/cf-cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install cf
```

## Programs

This package provides the following executable programs:

- `cf`

## Available Versions

<details>
<summary>Show all 30 versions</summary>

- `8.14.1`, `8.14.0`, `8.13.0`, `8.12.0`, `8.11.0`
- `8.10.0`, `8.9.0`, `8.8.3`, `8.8.2`, `8.8.1`
- `8.8.0`, `8.7.11`, `8.7.10`, `8.7.9`, `8.7.8`
- `8.7.7`, `8.7.6`, `8.7.5`, `8.7.4`, `7.8.0`
- `7.7.15`, `7.7.14`, `7.7.12`, `7.7.11`, `7.7.10`
- `7.7.9`, `7.7.8`, `7.7.7`, `7.7.6`, `7.7.5`

</details>

**Latest Version**: `8.14.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) cf -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.cf

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/cloudfoundry.org/cf-cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
