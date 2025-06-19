# nomadproject.io

> Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations.

## Package Information

- **Domain**: `nomadproject.io`
- **Name**: `nomadproject.io`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/nomadproject.io/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install nomad
```

## Programs

This package provides the following executable programs:

- `nomad`

## Aliases

This package can also be accessed using these aliases:

- `nomad`

## Available Versions

<details>
<summary>Show all 14 versions</summary>

- `1.10.2`, `1.10.1`, `1.10.0`, `1.9.7`, `1.9.6`
- `1.9.5`, `1.9.4`, `1.9.3`, `1.9.2`, `1.9.1`
- `1.9.0`, `1.8.4`, `1.8.3`, `1.8.2`

</details>

**Latest Version**: `1.10.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +nomadproject.io@1.10.2 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nomadprojectio

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/nomadproject.io/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
