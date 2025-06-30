/**
 * **mpfr** - Package from pantry: gnu.org/mpfr
 *
 * @domain `gnu.org/mpfr`
 *
 * @install `launchpad install gnu.org/mpfr`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgmpfr
 * console.log(pkg.name)        // "mpfr"
 * console.log(pkg.description) // "Package from pantry: gnu.org/mpfr"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/mpfr.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgmpfrPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpfr' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/mpfr' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/mpfr' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/mpfr' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/mpfr -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/mpfr' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/mpfr/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgmpfrPackage = typeof gnuorgmpfrPackage
