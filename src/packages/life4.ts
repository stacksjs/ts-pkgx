/**
 * **life4** - pkgx package
 *
 * @domain `github.com/life4`
 *
 * @install `pkgx github.com/life4`
 * @name `life4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.life4
 * // Or access via domain
 * const samePkg = pantry.githubcomlife4
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "life4"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/life4.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const life4Package = {
  /**
   * The display name of this package.
   */
  name: 'life4' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/life4' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/life4' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/life4' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/life4' as const,
}

export type Life4Package = typeof life4Package
