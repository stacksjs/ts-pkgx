/**
 * **bcrypt** - Cross platform file encryption utility using blowfish
 *
 * @domain `bcrypt.sourceforge.net`
 * @programs `bcrypt`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bcrypt`
 * @aliases `bcrypt`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.bcrypt
 * // Or access via domain
 * const samePkg = pantry.bcryptsourceforgenet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bcrypt.sourceforge.net"
 * console.log(pkg.description) // "Cross platform file encryption utility using bl..."
 * console.log(pkg.programs)    // ["bcrypt"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bcrypt-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bcryptPackage = {
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
  description: 'Cross platform file encryption utility using blowfish' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bcrypt.sourceforge.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bcrypt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bcrypt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'bcrypt',
  ] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) bcrypt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bcrypt' as const,
}

export type BcryptPackage = typeof bcryptPackage
