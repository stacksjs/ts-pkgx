# fastlane

> 🚀 The easiest way to automate building and releasing your iOS and Android apps

## Package Information

- **Domain**: `fastlane.tools`
- **Name**: `fastlane`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/fastlane.tools/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install fastlane
```

## Programs

This package provides the following executable programs:

- `fastlane`

## Available Versions

<details>
<summary>Show all 23 versions</summary>

- `2.228.0`, `2.227.2`, `2.227.1`, `2.227.0`, `2.226.0`
- `2.225.0`, `2.224.0`, `2.223.1`, `2.223.0`, `2.222.0`
- `2.221.1`, `2.221.0`, `2.220.0`, `2.219.0`, `2.218.0`
- `2.217.0`, `2.216.0`, `2.215.1`, `2.215.0`, `2.214.0`
- `2.213.0`, `2.212.2`, `2.212.1`

</details>

**Latest Version**: `2.228.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) fastlane -- $SHELL -i
```

## Dependencies

This package depends on:

- `ruby-lang.org~3.2`
- `rubygems.org`

## Related Packages

These packages work well with fastlane:

- [`cocoapods.org/xcodeproj`](../cocoapods.org/xcodeproj/index.md) - Package not available

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.fastlane

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/fastlane.tools/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
