# nuclei

> Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tackle trending vulnerabilities on the internet. It helps you find vulnerabilities in your applications, APIs, networks, DNS, and cloud configurations.

## Package Information

- **Domain**: `nuclei`
- **Name**: `nuclei`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/projectdiscovery.io/nuclei/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) nuclei
```

## Programs

This package provides the following executable programs:

- `nuclei`

## Aliases

This package can also be accessed using these aliases:

- `nuclei`

## Available Versions

<details>
<summary>Show all 3 versions</summary>

- `3.4.4`, `3.4.3`, `3.4.2`

</details>

**Latest Version**: `3.4.4`

### Install Specific Version

```bash
# Install specific version
pkgx nuclei@3.4.4
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.nuclei

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/projectdiscovery.io/nuclei/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
