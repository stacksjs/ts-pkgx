# sam

> CLI tool to build, test, debug, and deploy Serverless applications using AWS SAM

## Package Information

- **Domain**: `awsamazoncomsam`
- **Name**: `sam`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/sam/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) sam
```

## Programs

This package provides the following executable programs:

- `sam`

## Aliases

This package can also be accessed using these aliases:

- `sam`

## Available Versions

<details>
<summary>Show all 29 versions</summary>

- `1.139.0`, `1.138.0`, `1.137.1`, `1.137.0`, `1.136.0`
- `1.135.0`, `1.134.0`, `1.133.0`, `1.132.0`, `1.131.0`
- `1.130.0`, `1.129.0`, `1.128.0`, `1.127.0`, `1.126.0`
- `1.125.0`, `1.124.0`, `1.123.0`, `1.122.0`, `1.121.0`
- `1.120.0`, `1.119.0`, `1.118.0`, `1.117.0`, `1.116.0`
- `1.115.0`, `1.114.0`, `1.113.0`, `1.112.0`

</details>

**Latest Version**: `1.139.0`

### Install Specific Version

```bash
# Install specific version
pkgx sam@1.139.0
```

## Dependencies

This package depends on:

- `pkgx.sh^1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.awsamazoncomsam

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/aws.amazon.com/sam/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
