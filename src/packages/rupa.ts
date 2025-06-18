/**
 * **rupa** - pkgx package
 *
 * @domain `github.com/rupa`
 *
 * @install `pkgx github.com/rupa`
 * @name `rupa`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rupa
 * // Or access via domain
 * const samePkg = pantry.githubcomrupa
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rupa"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/rupa.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rupaPackage = {
  /**
   * The display name of this package.
   */
  name: 'rupa' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/rupa' as const,
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
  installCommand: 'pkgx github.com/rupa' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/rupa' as const,
}

export type RupaPackage = typeof rupaPackage
