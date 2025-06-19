/**
 * **netcdf** - Official GitHub repository for netCDF-C libraries and utilities.
 *
 * @domain `unidata.ucar.edu/netcdf`
 * @programs `nc-config`, `nccopy`, `ncdump`, `ncgen`, `ncgen3`
 * @version `4.9.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +unidata.ucar.edu/netcdf -- $SHELL -i`
 * @dependencies `hdfgroup.org/HDF5`, `sourceware.org/bzip2`, `curl.se`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unidataucaredunetcdf
 * console.log(pkg.name)        // "netcdf"
 * console.log(pkg.description) // "Official GitHub repository for netCDF-C librari..."
 * console.log(pkg.programs)    // ["nc-config", "nccopy", ...]
 * console.log(pkg.versions[0]) // "4.9.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/unidata-ucar-edu/netcdf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const unidataucaredunetcdfPackage = {
  /**
   * The display name of this package.
   */
  name: 'netcdf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'unidata.ucar.edu/netcdf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official GitHub repository for netCDF-C libraries and utilities.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unidata.ucar.edu/netcdf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +unidata.ucar.edu/netcdf -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nc-config',
    'nccopy',
    'ncdump',
    'ncgen',
    'ncgen3',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hdfgroup.org/HDF5',
    'sourceware.org/bzip2',
    'curl.se',
    'gnome.org/libxml2',
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.9.3',
    '4.9.2',
  ] as const,
  aliases: [] as const,
}

export type UnidataucaredunetcdfPackage = typeof unidataucaredunetcdfPackage
