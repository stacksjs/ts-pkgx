/**
 * **netflix.com** - pkgx package
 *
 * @domain `netflix.com`
 *
 * @install `pkgx netflix.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.netflixcom
 * console.log(pkg.name)        // "netflix.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netflix-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netflixcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'netflix.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netflix.com' as const,
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
  installCommand: 'pkgx netflix.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'netflix.com' as const,
}

export type NetflixcomPackage = typeof netflixcomPackage
