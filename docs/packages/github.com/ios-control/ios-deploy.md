# ios-deploy

> Install and debug iPhone apps from the command line, without using Xcode

## Package Information

- **Domain**: `github.com/ios-control/ios-deploy`
- **Name**: `ios-deploy`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ios-control/ios-deploy/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install ios-deploy
```

## Programs

This package provides the following executable programs:

- `ios-deploy`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `1.12.2`

</details>

**Latest Version**: `1.12.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) ios-deploy -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['ios-deploy']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ios-control/ios-deploy/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
