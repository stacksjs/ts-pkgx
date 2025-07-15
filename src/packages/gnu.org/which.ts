/**
 * **which** - Package from pantry: gnu.org/which
 *
 * @domain `gnu.org/which`
 *
 * @install `launchpad install gnu.org/which`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgwhich
 * console.log(pkg.name)        // "which"
 * console.log(pkg.description) // "Package from pantry: gnu.org/which"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/which.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgwhichPackage = {
  /**
   * The display name of this package.
   */
  name: 'which' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/which' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/which' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/which' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/which -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/which' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/which/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgwhichPackage = typeof gnuorgwhichPackage
