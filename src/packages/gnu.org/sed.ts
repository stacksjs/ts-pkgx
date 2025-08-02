/**
 * **sed** - Package from pantry: gnu.org/sed
 *
 * @domain `gnu.org/sed`
 *
 * @install `launchpad install gnu.org/sed`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgsed
 * console.log(pkg.name)        // "sed"
 * console.log(pkg.description) // "Package from pantry: gnu.org/sed"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/sed.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgsedPackage = {
  /**
   * The display name of this package.
   */
  name: 'sed' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/sed' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/sed' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/sed' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/sed -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/sed' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/sed/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgsedPackage = typeof gnuorgsedPackage
