/**
 * **quodlibet** - pkgx package
 *
 * @domain `github.com/quodlibet`
 *
 * @install `pkgx github.com/quodlibet`
 * @name `quodlibet`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.quodlibet
 * // Or access via domain
 * const samePkg = pantry.githubcomquodlibet
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "quodlibet"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/quodlibet.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quodlibetPackage = {
  /**
   * The display name of this package.
   */
  name: 'quodlibet' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/quodlibet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/quodlibet' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/quodlibet' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/quodlibet' as const,
}

export type QuodlibetPackage = typeof quodlibetPackage
