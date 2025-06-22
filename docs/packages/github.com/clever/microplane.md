# mp

> A CLI tool to make git changes across many repos, especially useful with Microservices.

## Package Information

- **Domain**: `github.com/clever/microplane`
- **Name**: `mp`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/clever/microplane/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install mp
```

## Programs

This package provides the following executable programs:

- `mp`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `0.0.36`, `0.0.35`, `0.0.34`

</details>

**Latest Version**: `0.0.36`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) mp -- $SHELL -i
```

## Dependencies

This package depends on:

- `git-scm.org^2`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.microplane

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/clever/microplane/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
