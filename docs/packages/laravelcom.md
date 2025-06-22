# laravel

> The Laravel application installer.

## Package Information

- **Domain**: `laravel.com`
- **Name**: `laravel`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/laravel.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install laravel
```

## Programs

This package provides the following executable programs:

- `laravel`

## Available Versions

<details>
<summary>Show all 17 versions</summary>

- `5.16.0`, `5.15.0`, `5.14.1`, `5.14.0`, `5.13.0`
- `5.12.2`, `5.12.1`, `5.12.0`, `5.11.2`, `5.11.1`
- `5.11.0`, `5.10.0`, `5.9.2`, `5.9.1`, `5.9.0`
- `5.8.5`, `5.8.3`

</details>

**Latest Version**: `5.16.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) laravel -- $SHELL -i
```

## Dependencies

This package depends on:

- `php.net^8.2`
- `getcomposer.org^2.7`
- `linux:info-zip.org/unzip^6`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.laravelcom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/laravel.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
