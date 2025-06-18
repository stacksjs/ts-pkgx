/**
 * **AUTOMATIC1111** - pkgx package
 *
 * @domain `github.com/AUTOMATIC1111`
 *
 * @install `pkgx github.com/AUTOMATIC1111`
 * @name `AUTOMATIC1111`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.AUTOMATIC1111
 * // Or access via domain
 * const samePkg = pantry.githubcomautomatic1111
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AUTOMATIC1111"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AUTOMATIC1111.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const aUTOMATIC1111Package = {
  /**
   * The display name of this package.
   */
  name: 'AUTOMATIC1111' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AUTOMATIC1111' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/AUTOMATIC1111' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/AUTOMATIC1111' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/AUTOMATIC1111' as const,
}

export type AUTOMATIC1111Package = typeof aUTOMATIC1111Package
