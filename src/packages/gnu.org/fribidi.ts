/**
 * **fribidi** - Package from pantry: gnu.org/fribidi
 *
 * @domain `gnu.org/fribidi`
 *
 * @install `launchpad install gnu.org/fribidi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgfribidi
 * console.log(pkg.name)        // "fribidi"
 * console.log(pkg.description) // "Package from pantry: gnu.org/fribidi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/fribidi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgfribidiPackage = {
  /**
   * The display name of this package.
   */
  name: 'fribidi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/fribidi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/fribidi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/fribidi' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/fribidi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/fribidi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/fribidi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgfribidiPackage = typeof gnuorgfribidiPackage
