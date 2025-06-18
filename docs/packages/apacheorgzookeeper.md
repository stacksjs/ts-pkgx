# apache.org/zookeeper

> A package from apache.org/zookeeper

## Package Information

- **Domain**: `apache.org/zookeeper`
- **Name**: `apache.org/zookeeper`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/zookeeper/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +apache.org/zookeeper -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `zkCleanup`
- `zkCli`
- `zkEnv`
- `zkServer-initialize`
- `zkServer`
- `zkSnapshotComparer`
- `zkSnapshotRecursiveSummaryToolkit`
- `zkSnapShotToolkit`
- `zkTxnLogToolkit`

## Aliases

This package can also be accessed using these aliases:

- `zookeeper`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `3.9.3`, `3.9.2`, `3.9.1`

</details>

**Latest Version**: `3.9.3`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +apache.org/zookeeper@3.9.3 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org`
- `openssl.org`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apacheorgzookeeper

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/zookeeper/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
