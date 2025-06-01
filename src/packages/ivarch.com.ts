/**
 * **ivarch.com** - Go home.
 *
 * @domain `ivarch.com`
 *
 * @install `pkgx ivarch.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ivarchcom
 * console.log(pkg.name)        // "ivarch.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ivarch-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ivarchcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/ivarch.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ivarch.com' as const,
  fullPath: 'ivarch.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ivarch.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type IvarchcomPackage = typeof ivarchcomPackage
