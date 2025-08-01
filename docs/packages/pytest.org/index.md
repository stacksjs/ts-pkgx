# pytest

> The pytest framework makes it easy to write small tests, yet scales to support complex functional testing

## Package Information

- **Domain**: `pytest.org`
- **Name**: `pytest`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install pytest
```

## Programs

This package provides the following executable programs:

- `pytest`

## Available Versions

<details>
<summary>Show all 27 versions</summary>

- `8.4.1`, `8.4.0`, `8.3.5`, `8.3.4`, `8.3.3`
- `8.3.2`, `8.3.1`, `8.3.0`, `8.2.2`, `8.2.1`
- `8.2.0`, `8.1.2`, `8.1.1`, `8.1.0`, `8.0.2`
- `8.0.1`, `8.0.0`, `7.4.4`, `7.4.3`, `7.4.2`
- `7.4.1`, `7.4.0`, `7.3.2`, `7.3.1`, `7.3.0`
- `7.2.2`, `7.1.0`

</details>

**Latest Version**: `8.4.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) pytest -- $SHELL -i
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.pytest

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/pytest.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
