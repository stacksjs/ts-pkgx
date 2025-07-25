/**
 * **gdal.org** - GDAL is an open source MIT licensed translator library for raster and vector geospatial data formats.
 *
 * @domain `gdal.org`
 * @programs `gdaladdo`, `gdalbuildvrt`, `gdal-config`, `gdal_contour`, `gdal_create`, ... (+23 more)
 * @version `3.11.3` (20 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gdal.org`
 * @dependencies `apache.org/arrow@19`, `heasarc.gsfc.nasa.gov/cfitsio`, `epsilon-project.sourceforge.io`, ... (+42 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gdalorg
 * console.log(pkg.name)        // "gdal.org"
 * console.log(pkg.description) // "GDAL is an open source MIT licensed translator ..."
 * console.log(pkg.programs)    // ["gdaladdo", "gdalbuildvrt", ...]
 * console.log(pkg.versions[0]) // "3.11.3" (latest)
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
  description: 'GDAL is an open source MIT licensed translator library for raster and vector geospatial data formats.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gdal.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gdal.org' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gdaladdo',
    'gdalbuildvrt',
    'gdal-config',
    'gdal_contour',
    'gdal_create',
    'gdaldem',
    'gdalenhance',
    'gdal_grid',
    'gdalinfo',
    'gdallocationinfo',
    'gdalmanage',
    'gdalmdiminfo',
    'gdalmdimtranslate',
    'gdal_rasterize',
    'gdalsrsinfo',
    'gdaltindex',
    'gdaltransform',
    'gdal_translate',
    'gdal_viewshed',
    'gdalwarp',
    'gnmanalyse',
    'gnmmanage',
    'nearblack',
    'ogr2ogr',
    'ogrinfo',
    'ogrlineref',
    'ogrtindex',
    'sozip',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'apache.org/arrow@19',
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
    'gnome.org/libxml2~2.13 # 2.14 changed the soname',
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
    'linux:apache.org/thrift=0.22.0 # since 3.11.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.11.3',
    '3.11.2',
    '3.11.1',
    '3.11.0',
    '3.10.3',
    '3.10.2',
    '3.10.1',
    '3.10.0',
    '3.9.3',
    '3.9.2',
    '3.9.1',
    '3.9.0',
    '3.8.5',
    '3.8.4',
    '3.8.3',
    '3.8.2',
    '3.8.1',
    '3.8.0',
    '3.7.3',
    '3.7.2',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gdal.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gdal.org' as const,
}

export type GdalorgPackage = typeof gdalorgPackage
