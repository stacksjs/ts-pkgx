/**
 * **binutils** - Package from pantry: gnu.org/binutils
 *
 * @domain `gnu.org/binutils`
 *
 * @install `launchpad install gnu.org/binutils`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgbinutils
 * console.log(pkg.name)        // "binutils"
 * console.log(pkg.description) // "Package from pantry: gnu.org/binutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/binutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgbinutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'binutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/binutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/binutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/binutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/binutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/binutils' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/binutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgbinutilsPackage = typeof gnuorgbinutilsPackage
