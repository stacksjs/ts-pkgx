# openjdk.org

> Development kit for the Java programming language

## Package Information

- **Domain**: `openjdkorg`
- **Name**: `openjdk.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/openjdk.org/package.yml)

## Installation

```bash
# Install with pkgx
sh <(curl https://pkgx.sh) +openjdk.org -- $SHELL -i
```

## Programs

This package provides the following executable programs:

- `jar`
- `jarsigner`
- `java`
- `javac`
- `javadoc`
- `javap`
- `jcmd`
- `jconsole`
- `jdb`
- `jdeprscan`
- `jdeps`
- `jfr`
- `jhsdb`
- `jimage`
- `jinfo`
- `jlink`
- `jmap`
- `jmod`
- `jps`
- `jrunscript`
- `jshell`
- `jstack`
- `jstat`
- `jstatd`
- `keytool`
- `rmiregistry`
- `serialver`

## Available Versions

<details>
<summary>Show all 6 versions</summary>

- `21.0.7.4`, `21.0.6.6`, `21.0.3.6`, `17.0.11.4`, `17.0.10.6`
- `11.0.23.6`

</details>

**Latest Version**: `21.0.7.4`

### Install Specific Version

```bash
# Install specific version
pkgx openjdk.org@21.0.7.4
```

## Dependencies

This package depends on:

- `giflib.sourceforge.io`
- `harfbuzz.org^8`
- `libjpeg-turbo.org`
- `libpng.org`
- `littlecms.com`
- `openprinting.github.io/cups`
- `info-zip.org/unzip`
- `zlib.net`
- `libzip.org`
- `linuxalsa-project.org/alsa-libfreedesktop.org/fontconfigfreetype.orgx.org/x11x.org/extsx.org/xrandrx.org/xrenderx.org/xtx.org/xtstinfo-zip.org/zipdarwinsys.com/file`
- `alsa-project.org/alsa-lib`
- `freedesktop.org/fontconfig`
- `freetype.org`
- `x.org/x11`
- `x.org/exts`
- `x.org/xrandr`
- `x.org/xrender`
- `x.org/xt`
- `x.org/xtst`
- `info-zip.org/zip`
- `darwinsys.com/file`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['openjdkorg']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/openjdk.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../package-catalog.md)

---

*This documentation was auto-generated from package data.*
