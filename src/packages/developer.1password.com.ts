/**
 * **developer.1password.com** - Go home.
 *
 * @domain `developer.1password.com`
 *
 * @install `pkgx developer.1password.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.developer1passwordcom
 * console.log(pkg.name)        // "developer.1password.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developer-1password-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developer1passwordcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/developer.1password.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developer.1password.com' as const,
  fullPath: 'developer.1password.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx developer.1password.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type Developer1passwordcomPackage = typeof developer1passwordcomPackage
