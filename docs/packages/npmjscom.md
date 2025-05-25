# npmjs.com

> the package manager for JavaScript

## Package Information

- **Domain**: `npmjscom`
- **Name**: `npmjs.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/npmjs.com/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +npmjs.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `npm`
- `npx`

## Available Versions

<details>
<summary>Show all 59 versions</summary>

- `11.4.1`, `11.4.0`, `11.3.0`, `11.2.0`, `11.1.0`
- `11.0.0`, `10.9.2`, `10.9.1`, `10.9.0`, `10.8.3`
- `10.8.2`, `10.8.1`, `10.8.0`, `10.7.0`, `10.6.0`
- `10.5.2`, `10.5.1`, `10.5.0`, `10.4.0`, `10.3.0`
- `10.2.5`, `10.2.4`, `10.2.3`, `10.2.2`, `10.2.1`
- `10.2.0`, `10.1.0`, `10.0.0`, `9.9.4`, `9.9.3`
- `9.9.2`, `9.9.1`, `9.9.0`, `9.8.1`, `9.8.0`
- `9.7.2`, `9.7.1`, `9.7.0`, `9.6.7`, `9.6.6`
- `9.6.5`, `9.6.4`, `9.6.3`, `9.6.2`, `9.6.1`
- `9.6.0`, `9.5.1`, `9.5.0`, `9.4.2`, `9.4.1`
- `9.4.0`, `9.3.1`, `9.3.0`, `9.2.0`, `9.1.3`
- `9.1.2`, `9.0.1`, `8.19.4`, `8.19.3`

</details>

**Latest Version**: `11.4.1`

### Install Specific Version

```bash
# Install specific version
pkgx npmjs.com@11.4.1
```

## Dependencies

This package depends on:

- `nodejs.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['npmjscom']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/npmjs.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
