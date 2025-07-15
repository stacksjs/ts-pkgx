# encore-go

> Encore's rolling fork of Go with added automatic tracing & instrumentation

## Package Information

- **Domain**: `encore.dev/go`
- **Name**: `encore-go`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/go/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install encore-go
```

## Programs

This package provides the following executable programs:

- `encore-go`

## Available Versions

<details>
<summary>Show all 8 versions</summary>

- `1.23.0`, `1.22.5`, `1.22.0`, `1.21.6`, `1.21.5`
- `1.21.4`, `1.21.3`, `1.21.1`

</details>

**Latest Version**: `1.23.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) encore-go -- $SHELL -i
```

## Dependencies

This package depends on:

- `curl.se/ca-certs`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['encore-go']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/go/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
