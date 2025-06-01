/**
 * **laravel** - Crafters of fine Open Source products
 *
 * @domain `laravel.com`
 *
 * @install `pkgx laravel.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.laravelcom
 * console.log(pkg.name)        // "laravel"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/laravel-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const laravelcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'laravel' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/laravel.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'laravel.com' as const,
  fullPath: 'laravel.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx laravel.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LaravelcomPackage = typeof laravelcomPackage
