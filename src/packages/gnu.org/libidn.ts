/**
 * **libidn** - Package from pantry: gnu.org/libidn
 *
 * @domain `gnu.org/libidn`
 *
 * @install `launchpad install gnu.org/libidn`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibidn
 * console.log(pkg.name)        // "libidn"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libidn"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libidn.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibidnPackage = {
  /**
   * The display name of this package.
   */
  name: 'libidn' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libidn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libidn' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libidn' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libidn -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libidn' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libidn/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorglibidnPackage = typeof gnuorglibidnPackage
