/**
 * **matio.sourceforge.io** - Package from pantry: matio.sourceforge.io
 *
 * @domain `matio.sourceforge.io`
 *
 * @install `launchpad install matio.sourceforge.io`
 * @dependencies `hdfgroup.org/HDF5`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.matiosourceforgeio
 * console.log(pkg.name)        // "matio.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: matio.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/matio-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const matiosourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'matio.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'matio.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: matio.sourceforge.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install matio.sourceforge.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +matio.sourceforge.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install matio.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'hdfgroup.org/HDF5',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/matio.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MatiosourceforgeioPackage = typeof matiosourceforgeioPackage
