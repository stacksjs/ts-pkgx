# kubectx.dev

> Tool that can switch between kubectl contexts easily and create aliases

## Package Information

- **Domain**: `kubectx.dev`
- **Name**: `kubectx.dev`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/kubectx.dev/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +kubectx.dev -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `kubectx`
- `kubens`

## Aliases

This package can also be accessed using these aliases:

- `kube`

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `0.9.5`, `0.9.4`

</details>

**Latest Version**: `0.9.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +kubectx.dev@0.9.5 -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/junegunn/fzf`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.kubectxdev

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/kubectx.dev/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
