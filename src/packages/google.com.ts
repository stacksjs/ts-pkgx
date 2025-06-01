/**
 * **google.com** - Go home.
 *
 * @domain `google.com`
 *
 * @install `pkgx google.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecom
 * console.log(pkg.name)        // "google.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/google.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com' as const,
  fullPath: 'google.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx google.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GooglecomPackage = typeof googlecomPackage
