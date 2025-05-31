/**
 * **bcrypt** - Cross platform file encryption utility using blowfish
 *
 * @domain `bcrypt.sourceforge.net`
 * @programs `bcrypt`
 * @version `1.1.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/bcrypt-sourceforge-net.md
 * @install `sh <(curl https://pkgx.sh) bcrypt`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.bcryptsourceforgenet
 * console.log(pkg.name)        // "bcrypt"
 * console.log(pkg.description) // "Cross platform file encryption utility using bl..."
 * console.log(pkg.programs)    // ["bcrypt"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bcrypt-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bcryptsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'bcrypt' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) bcrypt' as const,
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
  fullPath: 'bcrypt.sourceforge.net' as const,
  aliases: [] as const,
}

export type BcryptsourceforgenetPackage = typeof bcryptsourceforgenetPackage
