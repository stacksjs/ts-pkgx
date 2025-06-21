# Package Catalog

This comprehensive catalog lists all 0+ packages available in ts-pkgx, organized by category.

Each package can be accessed using `getPackage(name)` or directly via `pantry.domain`.

## Quick Stats

- **Total Packages**: 0
- **Categories**: 12
- **Last Updated**: 2025-06-21T11:27:23.875Z

## Table of Contents

- [Programming Languages](#programming-languages) (0 packages)
- [JavaScript & Node.js Ecosystem](#javascript-node-js-ecosystem) (0 packages)
- [Package Managers & Build Tools](#package-managers-build-tools) (0 packages)
- [Databases](#databases) (0 packages)
- [DevOps & Infrastructure](#devops-infrastructure) (0 packages)
- [Cloud Platforms & Services](#cloud-platforms-services) (0 packages)
- [Monitoring & Observability](#monitoring-observability) (0 packages)
- [Security & Authentication](#security-authentication) (0 packages)
- [Development Tools](#development-tools) (0 packages)
- [CLI Tools & Utilities](#cli-tools-utilities) (0 packages)
- [Web Servers & Proxies](#web-servers-proxies) (0 packages)
- [Testing & Quality Assurance](#testing-quality-assurance) (0 packages)

## Usage Examples

### Basic Usage

```typescript
import { getPackage, pantry } from 'ts-pkgx'

// Get a package by domain
const nodePackage = pantry.nodejsorg

// Get a package by alias
const nodeByAlias = getPackage('node')

// Access package properties
console.log(`Package: ${nodePackage.name} - ${nodePackage.description}`)
console.log(`Install: ${nodePackage.installCommand}`)
console.log(`Programs: ${nodePackage.programs.join(', ')}`)
```

### Advanced Usage

```typescript
// Find packages by category
const databases = [
  pantry.postgresqlorg,
  pantry.mysqlcom,
  pantry.redisio,
  pantry.mongodbcom
]

// Get all available versions
const nodeVersions = pantry.nodejsorg.versions
console.log(`Node.js versions: ${nodeVersions.slice(0, 5).join(', ')}...`)

// Check dependencies
const nodeDeps = pantry.nodejsorg.dependencies
console.log(`Node.js dependencies: ${nodeDeps.join(', ')}`)
```

### Installation Examples

```bash
# Install using pkgx
pkgx node
pkgx python
pkgx rust

# Install specific versions
pkgx node@20
pkgx python@3.11

# Install multiple packages
pkgx node python rust
```

## Package Information

Each package includes:

- **Name**: Short identifier for the package
- **Domain**: Full domain identifier
- **Description**: What the package does
- **Programs**: Executable programs provided
- **Versions**: Available versions
- **Dependencies**: Required dependencies
- **Companions**: Related packages
- **Install Command**: How to install with pkgx

## Contributing

To add or update packages, see the pkgx [contribution guide](https://docs.pkgx.sh/appendix/packaging/pantry).
