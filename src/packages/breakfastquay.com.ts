/**
 * **breakfastquay.com** - Go home.
 *
 * @domain `breakfastquay.com`
 *
 * @install `pkgx breakfastquay.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.breakfastquaycom
 * console.log(pkg.name)        // "breakfastquay.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/breakfastquay-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const breakfastquaycomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/breakfastquay.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'breakfastquay.com' as const,
  fullPath: 'breakfastquay.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx breakfastquay.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BreakfastquaycomPackage = typeof breakfastquaycomPackage
