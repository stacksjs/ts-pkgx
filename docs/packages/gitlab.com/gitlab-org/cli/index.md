# glab

> Open-source GitLab command-line tool

## Package Information

- **Domain**: `gitlab.com/gitlab-org/cli`
- **Name**: `glab`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/gitlab-org/cli/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install glab
```

## Programs

This package provides the following executable programs:

- `glab`

## Available Versions

<details>
<summary>Show all 45 versions</summary>

- `1.60.2`, `1.60.1`, `1.60.0`, `1.59.2`, `1.59.1`
- `1.59.0`, `1.58.0`, `1.57.0`, `1.56.0`, `1.55.0`
- `1.54.0`, `1.53.0`, `1.52.0`, `1.51.0`, `1.50.0`
- `1.49.0`, `1.48.0`, `1.47.0`, `1.46.1`, `1.46.0`
- `1.45.0`, `1.44.1`, `1.44.0`, `1.43.0`, `1.42.0`
- `1.41.0`, `1.40.0`, `1.39.0`, `1.38.0`, `1.37.0`
- `1.36.0`, `1.35.0`, `1.34.0`, `1.33.0`, `1.32.0`
- `1.31.0`, `1.30.0`, `1.29.4`, `1.29.3`, `1.29.2`
- `1.29.1`, `1.29.0`, `1.26.0`, `1.25.2`, `1.25.1`

</details>

**Latest Version**: `1.60.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) glab -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.glab

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gitlab.com/gitlab-org/cli/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
