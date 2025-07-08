/**
 * **nettle** - Package from pantry: gnu.org/nettle
 *
 * @domain `gnu.org/nettle`
 *
 * @install `launchpad install gnu.org/nettle`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorgnettle
 * console.log(pkg.name)        // "nettle"
 * console.log(pkg.description) // "Package from pantry: gnu.org/nettle"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/nettle.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorgnettlePackage = {
  /**
   * The display name of this package.
   */
  name: 'nettle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/nettle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnu.org/nettle' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnu.org/nettle' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnu.org/nettle -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnu.org/nettle' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/nettle/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnuorgnettlePackage = typeof gnuorgnettlePackage
