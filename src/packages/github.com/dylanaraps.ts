/**
 * **dylanaraps** - pkgx package
 *
 * @domain `github.com/dylanaraps`
 *
 * @install `pkgx github.com/dylanaraps`
 * @name `dylanaraps`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dylanaraps
 * // Or access via domain
 * const samePkg = pantry.githubcomdylanaraps
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dylanaraps"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/dylanaraps.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dylanarapsPackage = {
  /**
   * The display name of this package.
   */
  name: 'dylanaraps' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/dylanaraps' as const,
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
  installCommand: 'pkgx github.com/dylanaraps' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/dylanaraps' as const,
}

export type DylanarapsPackage = typeof dylanarapsPackage
