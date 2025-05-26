# phpMyAdmin

>

## Package Information

- **Domain**: `phpmyadminnet`
- **Name**: `phpMyAdmin`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/phpmyadmin.net/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +phpmyadmin.net -- $SHELL -i
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Available Versions

<details>
<summary>Show all 2 versions</summary>

- `5.2.2`, `5.2.1`

</details>

**Latest Version**: `5.2.2`

### Install Specific Version

```bash
# Install specific version
pkgx phpMyAdmin@5.2.2
```

## Dependencies

This package depends on:

- `php.net`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.phpmyadminnet

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/phpmyadmin.net/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
