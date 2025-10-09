# sonar-scanner

> Scanner CLI for SonarQube (Server, Cloud)

## Package Information

- **Domain**: `sonarqube.org/sonarscanner`
- **Name**: `sonar-scanner`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/sonarqube.org/sonarscanner/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install sonar-scanner
```

## Programs

This package provides the following executable programs:

- `sonar-scanner`
- `sonar-scanner-debug`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `7.3.0.5189`, `7.2.0.5079`, `7.1.0.4889`, `7.0.2.4839`, `7.0.1.4817`
- `7.0.0.4796`, `6.2.1.4610`, `6.2.0.4584`, `6.1.0.4477`, `6.0.0.4432`
- `5.0.2.4997`, `5.0.1.3006`

</details>

**Latest Version**: `7.3.0.5189`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +sonarqube.org/sonarscanner@7.3.0.5189 -- $SHELL -i
```

## Dependencies

This package depends on:

- `openjdk.org^21`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['sonar-scanner']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/sonarqube.org/sonarscanner/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
