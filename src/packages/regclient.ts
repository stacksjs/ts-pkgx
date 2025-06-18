/**
 * **regclient** - pkgx package
 *
 * @domain `github.com/regclient`
 *
 * @install `pkgx github.com/regclient`
 * @name `regclient`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.regclient
 * // Or access via domain
 * const samePkg = pantry.githubcomregclient
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "regclient"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/regclient.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const regclientPackage = {
  /**
   * The display name of this package.
   */
  name: 'regclient' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/regclient' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/regclient' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/regclient' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/regclient' as const,
}

export type RegclientPackage = typeof regclientPackage
