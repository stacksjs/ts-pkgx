# opensearch.org

> 🔎 Open source distributed and RESTful search engine.

## Package Information

- **Domain**: `opensearch.org`
- **Name**: `opensearch.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/opensearch.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +opensearch.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `opensearch`
- `opensearch-keystore`
- `opensearch-plugin`
- `opensearch-shard`

## Aliases

This package can also be accessed using these aliases:

- `opensearch`

## Available Versions

<details>
<summary>Show all 11 versions</summary>

- `3.0.0`, `2.19.1`, `2.18.0`, `2.17.1`, `2.17.0`
- `2.16.0`, `2.15.0`, `2.14.0`, `2.13.0`, `2.12.0`
- `2.11.1`

</details>

**Latest Version**: `3.0.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +opensearch.org@3.0.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org^21 # since v3`
- `openmp.llvm.org^17`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.opensearchorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/opensearch.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
