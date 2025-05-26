# watchexec

> Executes commands in response to file modifications

## Package Information

- **Domain**: `watchexecgithubio`
- **Name**: `watchexec`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/watchexec.github.io/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) watchexec
```

## Programs

This package provides the following executable programs:

- `watchexec`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `2.3.2`, `2.3.1`, `2.3.0`, `2.2.1`, `2.2.0`
- `2.1.2`

</details>

**Latest Version**: `2.3.2`

### Install Specific Version

```bash
# Install specific version
pkgx watchexec@2.3.2
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.watchexecgithubio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/watchexec.github.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
