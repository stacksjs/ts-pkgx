# code-server

> Access VS Code through the browser

## Package Information

- **Domain**: `coder.com/code-server`
- **Name**: `code-server`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/code-server/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install code-server
```

## Programs

This package provides the following executable programs:

- `code-server`

## Available Versions

<details>
<summary>Show all 38 versions</summary>

- `4.101.1`, `4.101.0`, `4.100.3`, `4.100.2`, `4.100.1`
- `4.100.0`, `4.99.4`, `4.99.3`, `4.99.2`, `4.99.1`
- `4.99.0`, `4.98.2`, `4.98.0`, `4.97.2`, `4.96.4`
- `4.96.2`, `4.96.1`, `4.95.3`, `4.95.2`, `4.95.1`
- `4.93.1`, `4.92.2`, `4.91.1`, `4.91.0`, `4.90.3`
- `4.90.2`, `4.90.1`, `4.90.0`, `4.89.1`, `4.89.0`
- `4.23.1`, `4.23.0`, `4.22.1`, `4.22.0`, `4.21.2`
- `4.21.1`, `4.21.0`, `4.20.1`

</details>

**Latest Version**: `4.101.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) code-server -- $SHELL -i
```

## Dependencies

This package depends on:

- `nodejs.org^22 # since 4.101.0`
- `linux:gnome.org/libsecret^0.21`
- `linux:x.org/x11^1.8`
- `linux:x.org/xkbfile^1.1`
- `linux:kerberos.org^1.21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.code-server

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/coder.com/code-server/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
