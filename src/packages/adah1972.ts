/**
 * **adah1972** - pkgx package
 *
 * @domain `github.com/adah1972`
 *
 * @install `pkgx github.com/adah1972`
 * @name `adah1972`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.adah1972
 * // Or access via domain
 * const samePkg = pantry.githubcomadah1972
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "adah1972"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adah1972.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const adah1972Package = {
  /**
   * The display name of this package.
   */
  name: 'adah1972' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adah1972' as const,
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
  installCommand: 'pkgx github.com/adah1972' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/adah1972' as const,
}

export type Adah1972Package = typeof adah1972Package
