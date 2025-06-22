# nuclei

> Nuclei is a fast, customizable vulnerability scanner powered by the global security community and built on a simple YAML-based DSL, enabling collaboration to tackle trending vulnerabilities on the internet. It helps you find vulnerabilities in your applications, APIs, networks, DNS, and cloud configurations.

## Package Information

- **Domain**: `projectdiscovery.io/nuclei`
- **Name**: `nuclei`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/projectdiscovery.io/nuclei/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install nuclei
```

## Programs

This package provides the following executable programs:

- `nuclei`

## Available Versions

<details>
<summary>Show all 4 versions</summary>

- `3.4.5`, `3.4.4`, `3.4.3`, `3.4.2`

</details>

**Latest Version**: `3.4.5`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) nuclei -- $SHELL -i
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
