/**
 * **julienXX** - pkgx package
 *
 * @domain `github.com/julienXX`
 *
 * @install `pkgx github.com/julienXX`
 * @name `julienXX`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.julienXX
 * // Or access via domain
 * const samePkg = pantry.githubcomjulienxx
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "julienXX"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/julienXX.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const julienXXPackage = {
  /**
   * The display name of this package.
   */
  name: 'julienXX' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/julienXX' as const,
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
  installCommand: 'pkgx github.com/julienXX' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/julienXX' as const,
}

export type JulienXXPackage = typeof julienXXPackage
