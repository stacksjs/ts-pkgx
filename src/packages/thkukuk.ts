/**
 * **thkukuk** - pkgx package
 *
 * @domain `github.com/thkukuk`
 *
 * @install `pkgx github.com/thkukuk`
 * @name `thkukuk`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.thkukuk
 * // Or access via domain
 * const samePkg = pantry.githubcomthkukuk
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "thkukuk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thkukuk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thkukukPackage = {
  /**
   * The display name of this package.
   */
  name: 'thkukuk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thkukuk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/thkukuk' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/thkukuk' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/thkukuk' as const,
}

export type ThkukukPackage = typeof thkukukPackage
