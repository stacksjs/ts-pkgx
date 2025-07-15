# chruby-exec

> Changes the current Ruby

## Package Information

- **Domain**: `github.com/postmodern/chruby`
- **Name**: `chruby-exec`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/postmodern/chruby/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install chruby-exec
```

## Programs

This package provides the following executable programs:

- `chruby-exec`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `0.3.9`

</details>

**Latest Version**: `0.3.9`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) chruby-exec -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['chruby-exec']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/postmodern/chruby/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
