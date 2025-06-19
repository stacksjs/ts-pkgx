/**
 * **HDF5** - pkgx package
 *
 * @domain `hdfgroup.org/HDF5`
 * @programs `h5c++`, `h5cc`, `h5clear`, `h5copy`, `h5debug`, ... (+16 more)
 * @version `1.14.6` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +hdfgroup.org/HDF5 -- $SHELL -i`
 * @dependencies `dkrz.de/libaec@1`, `linux:zlib.net@1` (includes OS-specific dependencies with `os:package` format)
 * @companions `gnu.org/gcc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hdfgrouporghdf5
 * console.log(pkg.name)        // "HDF5"
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
  name: 'HDF5' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hdfgroup.org/HDF5' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hdfgroup.org/HDF5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +hdfgroup.org/HDF5 -- $SHELL -i' as const,
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
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'dkrz.de/libaec@1',
    'linux:zlib.net@1',
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
  aliases: [] as const,
}

export type Hdfgrouporghdf5Package = typeof hdfgrouporghdf5Package
