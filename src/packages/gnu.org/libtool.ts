/**
 * **libtool** - Package from pantry: gnu.org/libtool
 *
 * @domain `gnu.org/libtool`
 *
 * @install `launchpad install gnu.org/libtool`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibtool
 * console.log(pkg.name)        // "libtool"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libtool"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libtool.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibtoolPackage = {
  /**
   * The display name of this package.
   */
  name: 'libtool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libtool' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libtool' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libtool' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libtool -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libtool' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtool/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorglibtoolPackage = typeof gnuorglibtoolPackage
