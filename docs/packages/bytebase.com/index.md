# bytebase

> World's most advanced database DevSecOps solution for Developer, Security, DBA and Platform Engineering teams. The GitHub/GitLab for database DevSecOps.

## Package Information

- **Domain**: `bytebase.com`
- **Name**: `bytebase`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/bytebase.com/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install bytebase
```

## Programs

This package provides the following executable programs:

- `bytebase`

## Available Versions

<details>
<summary>Show all 34 versions</summary>

- `3.8.1`, `3.8.0`, `3.7.1`, `3.7.0`, `3.6.2`
- `3.6.1`, `3.6.0`, `3.5.2`, `3.5.1`, `3.5.0`
- `3.4.1`, `3.4.0`, `3.3.1`, `3.3.0`, `3.2.0`
- `3.1.2`, `3.1.1`, `3.1.0`, `3.0.1`, `3.0.0`
- `2.23.1`, `2.23.0`, `2.22.3`, `2.22.2`, `2.22.1`
- `2.22.0`, `2.21.0`, `2.20.0`, `2.19.0`, `2.18.0`
- `2.17.0`, `2.16.0`, `2.15.0`, `2.14.1`

</details>

**Latest Version**: `3.8.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) bytebase -- $SHELL -i
```

## Dependencies

This package depends on:

- `nodejs.org>=23.11`

## Related Packages

These packages work well with bytebase:

- [`postgresql.org`](../postgresql.org/index.md) - Mirror of the official PostgreSQL GIT repository. Note that this is just a *mirror* - we don't work with pull requests on github. To contribute, please see https://wiki.postgresql.org/wiki/Submitting_a_Patch

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.bytebase

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/bytebase.com/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
