/**
 * **bcrypt.sourceforge.net** - Package from pantry: bcrypt.sourceforge.net
 *
 * @domain `bcrypt.sourceforge.net`
 *
 * @install `launchpad install bcrypt.sourceforge.net`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bcryptsourceforgenet
 * console.log(pkg.name)        // "bcrypt.sourceforge.net"
 * console.log(pkg.description) // "Package from pantry: bcrypt.sourceforge.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bcrypt-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bcryptsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'bcrypt.sourceforge.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bcrypt.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bcrypt.sourceforge.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bcrypt.sourceforge.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bcrypt.sourceforge.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bcrypt.sourceforge.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bcrypt.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BcryptsourceforgenetPackage = typeof bcryptsourceforgenetPackage
