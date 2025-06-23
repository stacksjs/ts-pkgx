# khronos.org/glslang

> Khronos-reference front end for GLSL/ESSL, partial front end for HLSL, and a SPIR-V generator.

## Package Information

- **Domain**: `khronos.org/glslang`
- **Name**: `khronos.org/glslang`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/glslang/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install khronos.org/glslang
```

## Programs

This package provides the following executable programs:

- `glslang`
- `glslangValidator`
- `spirv-remap`

## Available Versions

<details>
<summary>Show all 12 versions</summary>

- `15.3.0`, `15.2.0`, `15.1.0`, `15.0.0`, `14.3.0`
- `14.2.0`, `14.1.0`, `14.0.0`, `13.1.1`, `13.1.0`
- `13.0.0`, `12.3.1`

</details>

**Latest Version**: `15.3.0`

### Install Specific Version

```bash
# Install specific version
sh <(curl https://pkgx.sh) +khronos.org/glslang@15.3.0 -- $SHELL -i
```

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry.glslang

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/glslang/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
