/**
 * **hdfgroup.org/hdf5** - pkgx package
 *
 * @domain `hdfgroup.org/HDF5`
 * @programs `h5c++`, `h5cc`, `h5clear`, `h5copy`, `h5debug`, ... (+16 more)
 * @version `1.14.6` (3 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/hdfgroup-org/HDF5.md
 *
 * @install `sh <(curl https://pkgx.sh) +hdfgroup.org/HDF5 -- $SHELL -i`
 * @aliases `hdfgroup.org/hdf5`, `HDF5`
 * @dependencies `dkrz.de/libaec@1`, `linuxzlib.net@1`, `zlib.net@1`
 * @companions `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.hdfgrouporghdf5
 * // Or access via domain
 * const samePkg = pantry.hdfgrouporghdf5
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hdfgroup.org/HDF5"
 * console.log(pkg.programs)    // ["h5c++", "h5cc", ...]
 * console.log(pkg.versions[0]) // "1.14.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hdfgroup-org/HDF5.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hdfgrouporghdf5Package = {
  /**
   * The display name of this package.
   */
  name: 'hdfgroup.org/HDF5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hdfgroup.org/HDF5' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from hdfgroup.org/HDF5' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hdfgroup.org/HDF5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +hdfgroup.org/HDF5 -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'h5c++',
    'h5cc',
    'h5clear',
    'h5copy',
    'h5debug',
    'h5delete',
    'h5diff',
    'h5dump',
    'h5fc',
    'h5format_convert',
    'h5import',
    'h5jam',
    'h5ls',
    'h5mkgrp',
    'h5perf_serial',
    'h5redeploy',
    'h5repack',
    'h5repart',
    'h5stat',
    'h5unjam',
    'h5watch',
  ] as const,
  /**
   * Related packages that work well with this package.
   * Consider installing these for enhanced functionality.
   */
  companions: [
    'gnu.org/gcc',
  ] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'dkrz.de/libaec@1',
    'linuxzlib.net@1',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.14.6',
    '1.14.5',
    '1.14.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'hdfgroup.org/hdf5',
    'HDF5',
  ] as const,
  fullPath: 'hdfgroup.org/HDF5' as const,
}

export type Hdfgrouporghdf5Package = typeof hdfgrouporghdf5Package
