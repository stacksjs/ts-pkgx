# SeaweedFS

> SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.

## Package Information

- **Domain**: `seaweedfs`
- **Name**: `SeaweedFS`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/seaweedfs.com/package.yml)

## Installation

```bash
# Install with launchpad
sh <(curl https://pkgx.sh) weed
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
<summary>Show all 10 versions</summary>

- `3.88.0`, `3.87.0`, `3.86.0`, `3.85.0`, `3.84.0`
- `3.83.0`, `3.82.0`, `3.81.0`, `3.80.0`, `3.79.0`

</details>

**Latest Version**: `3.88.0`

### Install Specific Version

```bash
# Install specific version
pkgx SeaweedFS@3.88.0
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.seaweedfs

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
