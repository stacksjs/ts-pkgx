/**
 * **nike.com** - Go home.
 *
 * @domain `nike.com`
 *
 * @install `pkgx nike.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nikecom
 * console.log(pkg.name)        // "nike.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nike-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nikecomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/nike.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nike.com' as const,
  fullPath: 'nike.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nike.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NikecomPackage = typeof nikecomPackage
