/**
 * **facebook.com** - Go home.
 *
 * @domain `facebook.com`
 *
 * @install `pkgx facebook.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcom
 * console.log(pkg.name)        // "facebook.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/facebook.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com' as const,
  fullPath: 'facebook.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx facebook.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FacebookcomPackage = typeof facebookcomPackage
