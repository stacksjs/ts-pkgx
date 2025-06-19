# swift.org

> The Swift Programming Language

## Package Information

- **Domain**: `swift.org`
- **Name**: `swift.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install +swift.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `docc`
- `dsymutil`
- `sourcekit-lsp`
- `swift-api-checker.py`
- `swift-build-sdk-interfaces`
- `swift-build-tool`
- `swift-demangle`
- `swift-driver`
- `swift-format`
- `swift-frontend`
- `swift-help`
- `swift-package`
- `swift-plugin-server`
- `swift-stdlib-tool`
- `swift`
- `swift-api-digester`
- `swift-api-extract`
- `swift-autolink-extract`
- `swift-build`
- `swift-experimental-sdk`
- `swift-package-collection`
- `swift-package-registry`
- `swift-run`
- `swift-symbolgraph-extract`
- `swift-test`
- `swiftc`

## Aliases

This package can also be accessed using these aliases:

- `swift`

## Available Versions

<details>
<summary>Show all 10 versions</summary>

- `6.1.2`, `6.1.1`, `6.1.0`, `6.0.3`, `6.0.2`
- `6.0.1`, `6.0.0`, `5.10.1`, `5.10.0`, `5.9.2`

</details>

**Latest Version**: `6.1.2`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +swift.org@6.1.2 -- $SHELL -i
```

## Dependencies

This package depends on:

- `linux:gnu.org/gcc`
- `linux:gnu.org/binutils`
- `linux:gnupg.org^2`
- `linux:gnome.org/libxml2`
- `linux:libgit2.org~1.7 # links to libgit2.so.1.7`
- `linux:curl.se`
- `linux:sqlite.org^3`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.swiftorg

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
