# gdal.org

> Package from pantry: gdal.org

## Package Information

- **Domain**: `gdal.org`
- **Name**: `gdal.org`
- **Homepage**: Not specified
- **Source**: [View on GitHub](https://github.com/pkgxdev/pantry/tree/main/projects/gdal.org/package.yml)

## Installation

```bash
# Install with launchpad
launchpad install gdal.org
```

## Programs

This package provides the following executable programs:

*No programs specified*

## Dependencies

This package depends on:

- `apache.org/arrow@19`
- `heasarc.gsfc.nasa.gov/cfitsio`
- `epsilon-project.sourceforge.io`
- `libexpat.github.io`
- `gaia-gis.it/fossil/freexl`
- `libgeos.org`
- `giflib.sourceforge.io`
- `hdfgroup.org/HDF5`
- `libjpeg-turbo.org`
- `jpeg.org/jpegxl`
- `github.com/json-c/json-c`
- `libarchive.org`
- `github.com/OSGeo/libgeotiff`
- `github.com/strukturag/libheif`
- `github.com/libkml/libkml`
- `github.com/Esri/lerc`
- `libpng.org`
- `postgresql.org/libpq`
- `gaia-gis.it/libspatialite`
- `simplesystems.org/libtiff`
- `gnome.org/libxml2~2.13 # 2.14 changed the soname`
- `unidata.ucar.edu/netcdf`
- `numpy.org`
- `openexr.com`
- `openjpeg.org`
- `openssl.org`
- `pcre.org/v2`
- `poppler.freedesktop.org`
- `proj.org`
- `python.org~3.11`
- `qhull.org`
- `sqlite.org`
- `unixodbc.org`
- `google.com/webp`
- `xerces.apache.org/xerces-c`
- `tukaani.org/xz`
- `facebook.com/zstd`
- `protobuf.dev`
- `abseil.io`
- `zlib.net`
- `dkrz.de/libaec`
- `github.com/ebiggers/libdeflate`
- `linux:curl.se`
- `linux:github.com/util-linux/util-linux`
- `linux:apache.org/thrift=0.22.0 # since 3.11.1`

## Usage Examples

```typescript
import { pantry } from 'ts-pkgx'

// Access this package
const pkg = pantry['gdal.org']

console.log(`Package: ${pkg.name}`)
console.log(`Description: ${pkg.description}`)
console.log(`Programs: ${pkg.programs.join(', ')}`)
```

## Links

- [Package Source](https://github.com/pkgxdev/pantry/tree/main/projects/gdal.org/package.yml)
- [Homepage](#)
- [Back to Package Catalog](../../package-catalog.md)

---

*This documentation was auto-generated from package data.*
