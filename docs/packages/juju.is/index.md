# juju

> Orchestration engine that enables the deployment, integration and lifecycle management of applications at any scale, on any infrastructure (Kubernetes or otherwise).

## Package Information

- **Domain**: `juju.is`
- **Name**: `juju`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/juju.is/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install juju
```

## Programs

This package provides the following executable programs:

- `juju`

## Available Versions

<details>
<summary>Show all 17 versions</summary>

- `3.6.7`, `3.6.6`, `3.6.5`, `3.6.4`, `3.6.3`
- `3.6.2`, `3.6.1`, `3.6.0`, `3.5.7`, `3.5.6`
- `3.5.5`, `3.5.4`, `3.5.3`, `3.4.6`, `3.3.7`
- `3.1.10`, `2.9.51`

</details>

**Latest Version**: `3.6.7`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) juju -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.juju

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/juju.is/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
