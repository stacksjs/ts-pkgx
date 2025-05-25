# composer

> Dependency Manager for PHP

## Package Information

- **Domain**: `getcomposerorg`
- **Name**: `composer`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/getcomposer.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +getcomposer.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `composer`
- `composer.phar`

## Aliases

This package can also be accessed using these aliases:

- `composer`

## Available Versions

<details>
<summary>Show all 30 versions</summary>

- `2.8.9`, `2.8.8`, `2.8.7`, `2.8.6`, `2.8.5`
- `2.8.4`, `2.8.3`, `2.8.2`, `2.8.1`, `2.8.0`
- `2.7.9`, `2.7.8`, `2.7.7`, `2.7.6`, `2.7.5`
- `2.7.4`, `2.7.3`, `2.7.2`, `2.7.1`, `2.7.0`
- `2.6.6`, `2.6.5`, `2.6.4`, `2.6.3`, `2.6.2`
- `2.6.1`, `2.6.0`, `2.5.8`, `2.2.24`, `2.2.23`

</details>

**Latest Version**: `2.8.9`

### Install Specific Version

```bash
# Install specific version
pkgx composer@2.8.9
```

## Dependencies

This package depends on:

- `php.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['getcomposerorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/getcomposer.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
