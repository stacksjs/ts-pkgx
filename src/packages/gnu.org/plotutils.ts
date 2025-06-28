/**
 * **plotutils** - Package from pantry: gnu.org/plotutils
 *
 * @domain `gnu.org/plotutils`
 *
 * @install `launchpad install gnu.org/plotutils`
 * @dependencies `libpng.org^1.6`, `libraw.org^0.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgplotutils
 * console.log(pkg.name)        // "plotutils"
 * console.log(pkg.description) // "Package from pantry: gnu.org/plotutils"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/plotutils.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgplotutilsPackage = {
  /**
   * The display name of this package.
   */
  name: 'plotutils' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/plotutils' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/plotutils' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/plotutils' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/plotutils -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/plotutils' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org^1.6',
    'libraw.org^0.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/plotutils/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgplotutilsPackage = typeof gnuorgplotutilsPackage
