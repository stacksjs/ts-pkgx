# seaweedfs.com

> SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.

## Package Information

- **Domain**: `seaweedfs.com`
- **Name**: `seaweedfs.com`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/seaweedfs.com/package.yml)

## Installation

```bash
# Install with pkgx
launchpad install weed
```

## Programs

This package provides the following executable programs:

- `weed`

## Aliases

This package can also be accessed using these aliases:

- `weed`
- `SeaweedFS`

## Available Versions

<details>
<summary>Show all 13 versions</summary>

- `3.91.0`, `3.90.0`, `3.89.0`, `3.88.0`, `3.87.0`
- `3.86.0`, `3.85.0`, `3.84.0`, `3.83.0`, `3.82.0`
- `3.81.0`, `3.80.0`, `3.79.0`

</details>

**Latest Version**: `3.91.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +seaweedfs.com@3.91.0 -- $SHELL -i
```

## Dependencies

This package depends on:

- `go.dev=1.22.0`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.seaweedfscom

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/seaweedfs.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
