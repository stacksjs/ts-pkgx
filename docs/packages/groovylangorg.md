# groovy-lang.org

> 

## Package Information

- **Domain**: `groovylangorg`
- **Name**: `groovy-lang.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/groovy-lang.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +groovy-lang.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `grape`
- `grape_completion`
- `groovy`
- `groovyc`
- `groovyc_completion`
- `groovy_completion`
- `groovyConsole`
- `groovyConsole_completion`
- `groovydoc`
- `groovydoc_completion`
- `groovysh`
- `groovysh_completion`
- `java2groovy`
- `startGroovy`

## Available Versions

<details>
<summary>Show all 20 versions</summary>

- `4.0.26`, `4.0.25`, `4.0.24`, `4.0.23`, `4.0.22`
- `4.0.21`, `4.0.20`, `4.0.18`, `4.0.17`, `4.0.16`
- `4.0.15`, `4.0.14`, `4.0.13`, `3.0.24`, `3.0.23`
- `3.0.22`, `3.0.21`, `3.0.20`, `3.0.19`, `2.5.23`

</details>

**Latest Version**: `4.0.26`

### Install Specific Version

```bash
# Install specific version
pkgx groovy-lang.org@4.0.26
```

## Dependencies

This package depends on:

- `openjdk.org@17`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['groovylangorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/groovy-lang.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
