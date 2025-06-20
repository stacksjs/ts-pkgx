# yarn

> 📦🐈 Active development trunk for Yarn ⚒

## Package Information

- **Domain**: `yarn`
- **Name**: `yarn`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/yarnpkg.com/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +yarnpkg.com -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `yarn`
- `yarnpkg`

## Aliases

This package can also be accessed using these aliases:

- `+yarnpkg.com -- $SHELL -i`
- `yarn`

## Available Versions

<details>
<summary>Show all 39 versions</summary>

- `4.9.1`, `4.9.0`, `4.8.1`, `4.8.0`, `4.7.0`
- `4.6.0`, `4.5.3`, `4.5.2`, `4.5.1`, `4.5.0`
- `4.4.1`, `4.4.0`, `4.3.1`, `4.3.0`, `4.2.2`
- `4.2.1`, `4.2.0`, `4.1.1`, `4.1.0`, `4.0.2`
- `4.0.1`, `4.0.0`, `3.8.7`, `3.8.6`, `3.8.5`
- `3.8.4`, `3.8.3`, `3.8.2`, `3.8.1`, `3.8.0`
- `3.7.0`, `3.6.4`, `3.6.3`, `3.6.2`, `3.6.1`
- `3.6.0`, `3.5.1`, `3.5.0`, `3.4.1`

</details>

**Latest Version**: `4.9.1`

### Install Specific Version

```bash
# Install specific version
pkgx yarn@4.9.1
```

## Dependencies

This package depends on:

- `nodejs.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.yarn

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/yarnpkg.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
