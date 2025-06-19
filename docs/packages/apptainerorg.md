# apptainer.org

> Application container and unprivileged sandbox platform for Linux

## Package Information

- **Domain**: `apptainer.org`
- **Name**: `apptainer.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/apptainer.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +apptainer.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `apptainer`
- `run-singularity`
- `singularity`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `1.4.1`, `1.4.0`, `1.3.6`, `1.3.5`, `1.3.4`
- `1.3.3`

</details>

**Latest Version**: `1.4.1`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +apptainer.org@1.4.1 -- $SHELL -i
```

## Dependencies

This package depends on:

- `github.com/seccomp/libseccomp@2`
- `curl.se/ca-certs`
- `go.dev~1.21`
- `gnu.org/gcc`

## Related Packages

These packages work well with apptainer.org:

- `github.com/plougher/squashfs-tools`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.apptainerorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/apptainer.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
