/**
 * **sass-lang.com** - Go home.
 *
 * @domain `sass-lang.com`
 *
 * @install `pkgx sass-lang.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sasslangcom
 * console.log(pkg.name)        // "sass-lang.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sass-lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sasslangcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sass-lang.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sass-lang.com' as const,
  fullPath: 'sass-lang.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sass-lang.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SasslangcomPackage = typeof sasslangcomPackage
