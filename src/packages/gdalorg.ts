/**
 * **gdal.org** - Package from pantry: gdal.org
 *
 * @domain `gdal.org`
 *
 * @install `launchpad install gdal.org`
 * @dependencies `apache.org/arrow`, `heasarc.gsfc.nasa.gov/cfitsio`, `epsilon-project.sourceforge.io`, ... (+42 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gdalorg
 * console.log(pkg.name)        // "gdal.org"
 * console.log(pkg.description) // "Package from pantry: gdal.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gdal-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gdalorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdal.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gdal.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gdal.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gdal.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gdal.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gdal.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'apache.org/arrow',
    'heasarc.gsfc.nasa.gov/cfitsio',
    'epsilon-project.sourceforge.io',
    'libexpat.github.io',
    'gaia-gis.it/fossil/freexl',
    'libgeos.org',
    'giflib.sourceforge.io',
    'hdfgroup.org/HDF5',
    'libjpeg-turbo.org',
    'jpeg.org/jpegxl',
    'github.com/json-c/json-c',
    'libarchive.org',
    'github.com/OSGeo/libgeotiff',
    'github.com/strukturag/libheif',
    'github.com/libkml/libkml',
    'github.com/Esri/lerc',
    'libpng.org',
    'postgresql.org/libpq',
    'gaia-gis.it/libspatialite',
    'simplesystems.org/libtiff',
    'gnome.org/libxml2',
    'unidata.ucar.edu/netcdf',
    'numpy.org',
    'openexr.com',
    'openjpeg.org',
    'openssl.org',
    'pcre.org/v2',
    'poppler.freedesktop.org',
    'proj.org',
    'python.org~3.11',
    'qhull.org',
    'sqlite.org',
    'unixodbc.org',
    'google.com/webp',
    'xerces.apache.org/xerces-c',
    'tukaani.org/xz',
    'facebook.com/zstd',
    'protobuf.dev',
    'abseil.io',
    'zlib.net',
    'dkrz.de/libaec',
    'github.com/ebiggers/libdeflate',
    'linux:curl.se',
    'linux:github.com/util-linux/util-linux',
    'linux:apache.org/thrift=0.21.0 # since 3.10.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gdal.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GdalorgPackage = typeof gdalorgPackage
