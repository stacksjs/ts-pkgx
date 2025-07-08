/**
 * **inetutils** - Package from pantry: gnu.org/inetutils
 *
 * @domain `gnu.org/inetutils`
 *
 * @install `launchpad install gnu.org/inetutils`
 * @dependencies `gnu.org/libidn2`, `invisible-island.net/ncurses`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorginetutils
 * console.log(pkg.name)        // "inetutils"
 * console.log(pkg.description) // "Package from pantry: gnu.org/inetutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/inetutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorginetutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'inetutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/inetutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/inetutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/inetutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/inetutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/inetutils' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libidn2',
    'invisible-island.net/ncurses',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/inetutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorginetutilsPackage = typeof gnuorginetutilsPackage
