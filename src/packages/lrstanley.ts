/**
 * **lrstanley** - pkgx package
 *
 * @domain `github.com/lrstanley`
 *
 * @install `pkgx github.com/lrstanley`
 * @name `lrstanley`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lrstanley
 * // Or access via domain
 * const samePkg = pantry.githubcomlrstanley
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lrstanley"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/lrstanley.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lrstanleyPackage = {
  /**
   * The display name of this package.
   */
  name: 'lrstanley' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/lrstanley' as const,
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
  installCommand: 'pkgx github.com/lrstanley' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/lrstanley' as const,
}

export type LrstanleyPackage = typeof lrstanleyPackage
