# carapace.sh

> Multi-shell multi-command argument completer

## Package Information

- **Domain**: `carapace.sh`
- **Name**: `carapace.sh`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/carapace.sh/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install carapace
```

## Programs

This package provides the following executable programs:

- `carapace`

## Aliases

This package can also be accessed using these aliases:

- `carapace`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `1.3.2`, `1.3.1`, `1.3.0`, `1.2.1`, `1.2.0`
- `1.1.1`, `1.1.0`, `1.0.7`, `1.0.6`, `1.0.5`
- `1.0.4`

</details>

**Latest Version**: `1.3.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +carapace.sh@1.3.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev~1.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.carapacesh

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/carapace.sh/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
