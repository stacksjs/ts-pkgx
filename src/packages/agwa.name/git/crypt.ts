/**
 * **agwa.name/git-crypt** - pkgx package
 *
 * @domain `agwa.name/git/crypt`
 *
 * @install `pkgx agwa.name/git-crypt`
 * @name `git-crypt`
 * @aliases `agwa.name/git-crypt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.agwanamegitcrypt
 * // Or access via domain
 * const samePkg = pantry.agwanamegitcrypt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "git-crypt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/agwa-name/git/crypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agwanamegitcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'git-crypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'agwa.name/git/crypt' as const,
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
  installCommand: 'pkgx agwa.name/git-crypt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'agwa.name/git-crypt',
  ] as const,
  fullPath: 'agwa.name/git-crypt' as const,
}

export type AgwanamegitcryptPackage = typeof agwanamegitcryptPackage
