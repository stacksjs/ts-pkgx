/**
 * **findutils** - Package from pantry: gnu.org/findutils
 *
 * @domain `gnu.org/findutils`
 *
 * @install `launchpad install gnu.org/findutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgfindutils
 * console.log(pkg.name)        // "findutils"
 * console.log(pkg.description) // "Package from pantry: gnu.org/findutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/findutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgfindutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'findutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/findutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/findutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/findutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/findutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/findutils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/findutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgfindutilsPackage = typeof gnuorgfindutilsPackage
