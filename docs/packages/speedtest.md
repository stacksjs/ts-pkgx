# speedtest-cli

> Command line interface for testing internet bandwidth using speedtest.net

## Package Information

- **Domain**: `github.com/sivel/speedtest-cli`
- **Name**: `speedtest-cli`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sivel/speedtest-cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +github.com/sivel/speedtest-cli -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `speedtest-cli`
- `speedtest`

## Aliases

This package can also be accessed using these aliases:

- `speedtest`

## Available Versions

<details>
<summary>Show all 1 versions</summary>

- `2.1.3`

</details>

**Latest Version**: `2.1.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +github.com/sivel/speedtest-cli@2.1.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `python.org>=3.7<3.12`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.speedtest

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sivel/speedtest-cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
