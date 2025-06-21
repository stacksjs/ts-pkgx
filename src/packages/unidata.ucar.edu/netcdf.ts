/**
 * **netcdf** - Package from pantry: unidata.ucar.edu/netcdf
 *
 * @domain `unidata.ucar.edu/netcdf`
 *
 * @install `launchpad install unidata.ucar.edu/netcdf`
 * @dependencies `hdfgroup.org/HDF5`, `sourceware.org/bzip2`, `curl.se`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.unidataucaredunetcdf
 * console.log(pkg.name)        // "netcdf"
 * console.log(pkg.description) // "Package from pantry: unidata.ucar.edu/netcdf"
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
  description: 'Package from pantry: unidata.ucar.edu/netcdf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install unidata.ucar.edu/netcdf' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/unidata.ucar.edu/netcdf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UnidataucaredunetcdfPackage = typeof unidataucaredunetcdfPackage
