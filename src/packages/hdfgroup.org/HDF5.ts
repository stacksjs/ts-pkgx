/**
 * **HDF5** - Package from pantry: hdfgroup.org/HDF5
 *
 * @domain `hdfgroup.org/HDF5`
 *
 * @install `launchpad install hdfgroup.org/HDF5`
 * @dependencies `dkrz.de/libaec@1`, `linux:zlib.net@1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hdfgrouporghdf5
 * console.log(pkg.name)        // "HDF5"
 * console.log(pkg.description) // "Package from pantry: hdfgroup.org/HDF5"
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
  description: 'Package from pantry: hdfgroup.org/HDF5' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hdfgroup.org/HDF5' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hdfgroup.org/HDF5 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hdfgroup.org/HDF5' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'dkrz.de/libaec@1',
    'linux:zlib.net@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hdfgroup.org/HDF5/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Hdfgrouporghdf5Package = typeof hdfgrouporghdf5Package
