/**
 * **bcrypt** - pkgx package
 *
 * @domain `sf.net/bcrypt`
 *
 * @install `pkgx sf.net/bcrypt`
 * @name `bcrypt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bcrypt
 * // Or access via domain
 * const samePkg = pantry.sfnetbcrypt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bcrypt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sf-net/bcrypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'bcrypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sf.net/bcrypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sf.net/bcrypt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'sf.net/bcrypt' as const,
}

export type BcryptPackage = typeof bcryptPackage
