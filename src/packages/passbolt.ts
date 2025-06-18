/**
 * **passbolt** - pkgx package
 *
 * @domain `github.com/passbolt`
 *
 * @install `pkgx github.com/passbolt`
 * @name `passbolt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.passbolt
 * // Or access via domain
 * const samePkg = pantry.githubcompassbolt
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "passbolt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/passbolt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const passboltPackage = {
  /**
   * The display name of this package.
   */
  name: 'passbolt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/passbolt' as const,
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
  installCommand: 'pkgx github.com/passbolt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/passbolt' as const,
}

export type PassboltPackage = typeof passboltPackage
