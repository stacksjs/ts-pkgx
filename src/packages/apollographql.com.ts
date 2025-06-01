/**
 * **apollographql.com** - Go home.
 *
 * @domain `apollographql.com`
 *
 * @install `pkgx apollographql.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apollographqlcom
 * console.log(pkg.name)        // "apollographql.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apollographql-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apollographqlcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/apollographql.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apollographql.com' as const,
  fullPath: 'apollographql.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx apollographql.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ApollographqlcomPackage = typeof apollographqlcomPackage
