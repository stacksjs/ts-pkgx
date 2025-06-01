/**
 * **netflix.com** - Go home.
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
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netflix-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netflixcomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/netflix.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netflix.com' as const,
  fullPath: 'netflix.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx netflix.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NetflixcomPackage = typeof netflixcomPackage
