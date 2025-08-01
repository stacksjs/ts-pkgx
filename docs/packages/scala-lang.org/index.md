# scala-lang.org

> The Scala 3 compiler, also known as Dotty.

## Package Information

- **Domain**: `scala-lang.org`
- **Name**: `scala-lang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/scala-lang.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install scala-lang.org
```

## Programs

This package provides the following executable programs:

- `scalac`
- `scala`
- `scala-cli`
- `sbtn`
- `amm`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `3.7.2`, `3.7.1`, `3.7.0`, `3.6.4`, `3.6.3`
- `3.6.2`, `3.5.2`, `3.5.1`, `3.3.6`, `3.3.5`

</details>

**Latest Version**: `3.7.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +scala-lang.org@3.7.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['scala-lang.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/scala-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
