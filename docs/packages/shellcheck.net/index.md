# shellcheck

> ShellCheck, a static analysis tool for shell scripts

## Package Information

- **Domain**: `shellcheck.net`
- **Name**: `shellcheck`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/shellcheck.net/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install shellcheck
```

## Programs

This package provides the following executable programs:

- `shellcheck`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.10.0`, `0.9.0`, `0.8.0`

</details>

**Latest Version**: `0.10.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) shellcheck -- $SHELL -i
```

## Dependencies

This package depends on:

- `sourceware.org/libffi@3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.shellcheck

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/shellcheck.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
