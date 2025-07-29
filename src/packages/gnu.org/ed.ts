/**
 * **ed** - Package from pantry: gnu.org/ed
 *
 * @domain `gnu.org/ed`
 *
 * @install `launchpad install gnu.org/ed`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorged
 * console.log(pkg.name)        // "ed"
 * console.log(pkg.description) // "Package from pantry: gnu.org/ed"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/ed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgedPackage = {
  /**
   * The display name of this package.
   */
  name: 'ed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/ed' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/ed' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/ed' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/ed -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/ed' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/ed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgedPackage = typeof gnuorgedPackage
