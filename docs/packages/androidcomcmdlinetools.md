# android.com/cmdline-tools

> A package from android.com/cmdline-tools

## Package Information

- **Domain**: `android.com/cmdline-tools`
- **Name**: `android.com/cmdline-tools`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/android.com/cmdline-tools/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +android.com/cmdline-tools -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `apkanalyzer`
- `avdmanager`
- `lint`
- `profgen`
- `resourceshrinker`
- `retrace`
- `screenshot2`
- `sdkmanager`

## Aliases

This package can also be accessed using these aliases:

- `cmdline-tools`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `13114758.0.0`, `11076708.0.0`

</details>

**Latest Version**: `13114758.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +android.com/cmdline-tools@13114758.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org>=17`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.androidcomcmdlinetools

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/android.com/cmdline-tools/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
