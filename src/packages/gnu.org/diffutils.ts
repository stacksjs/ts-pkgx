/**
 * **diffutils** - Package from pantry: gnu.org/diffutils
 *
 * @domain `gnu.org/diffutils`
 *
 * @install `launchpad install gnu.org/diffutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgdiffutils
 * console.log(pkg.name)        // "diffutils"
 * console.log(pkg.description) // "Package from pantry: gnu.org/diffutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/diffutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgdiffutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'diffutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/diffutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/diffutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/diffutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/diffutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/diffutils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/diffutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgdiffutilsPackage = typeof gnuorgdiffutilsPackage
