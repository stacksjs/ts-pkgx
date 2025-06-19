# apache.org/jmeter

> A package from apache.org/jmeter

## Package Information

- **Domain**: `apache.org/jmeter`
- **Name**: `apache.org/jmeter`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/jmeter/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) +apache.org/jmeter -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `jmeter`
- `jmeter-server`
- `mirror-server`

## Aliases

This package can also be accessed using these aliases:

- `jmeter`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `5.6.3`, `5.6.2`, `5.6.1`

</details>

**Latest Version**: `5.6.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +apache.org/jmeter@5.6.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apacheorgjmeter

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/jmeter/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
