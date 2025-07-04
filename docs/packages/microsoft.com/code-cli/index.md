# vscode cli

> Command-line interface built-in Visual Studio Code

## Package Information

- **Domain**: `microsoft.com/code-cli`
- **Name**: `vscode cli`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/code-cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install code
```

## Programs

This package provides the following executable programs:

- `code`

## Aliases

This package can also be accessed using these aliases:

- `code`

## Available Versions

<details>
<summary>Show all 15 versions</summary>

- `1.101.2`, `1.101.1`, `1.101.0`, `1.100.3`, `1.100.2`
- `1.100.1`, `1.100.0`, `1.99.3`, `1.99.2`, `1.99.1`
- `1.99.0`, `1.98.2`, `1.98.1`, `1.98.0`, `1.97.2`

</details>

**Latest Version**: `1.101.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) code -- $SHELL -i
```

## Dependencies

This package depends on:

- `openssl.org@1.1`
- `zlib.net@1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.code

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/code-cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
