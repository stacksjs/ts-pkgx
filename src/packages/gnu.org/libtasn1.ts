/**
 * **libtasn1** - Package from pantry: gnu.org/libtasn1
 *
 * @domain `gnu.org/libtasn1`
 *
 * @install `launchpad install gnu.org/libtasn1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorglibtasn1
 * console.log(pkg.name)        // "libtasn1"
 * console.log(pkg.description) // "Package from pantry: gnu.org/libtasn1"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/libtasn1.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorglibtasn1Package = {
  /**
   * The display name of this package.
   */
  name: 'libtasn1' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/libtasn1' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/libtasn1' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/libtasn1' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/libtasn1 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/libtasn1' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/libtasn1/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Gnuorglibtasn1Package = typeof gnuorglibtasn1Package
