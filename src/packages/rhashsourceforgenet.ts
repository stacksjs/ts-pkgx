/**
 * **rhash.sourceforge.net** - Package from pantry: rhash.sourceforge.net
 *
 * @domain `rhash.sourceforge.net`
 *
 * @install `launchpad install rhash.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rhashsourceforgenet
 * console.log(pkg.name)        // "rhash.sourceforge.net"
 * console.log(pkg.description) // "Package from pantry: rhash.sourceforge.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rhash-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rhashsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'rhash.sourceforge.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rhash.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rhash.sourceforge.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rhash.sourceforge.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rhash.sourceforge.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rhash.sourceforge.net' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rhash.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RhashsourceforgenetPackage = typeof rhashsourceforgenetPackage
