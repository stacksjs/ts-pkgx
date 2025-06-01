/**
 * **riverbankcomputing.com** - Go home.
 *
 * @domain `riverbankcomputing.com`
 *
 * @install `pkgx riverbankcomputing.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.riverbankcomputingcom
 * console.log(pkg.name)        // "riverbankcomputing.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/riverbankcomputing-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const riverbankcomputingcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/riverbankcomputing.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'riverbankcomputing.com' as const,
  fullPath: 'riverbankcomputing.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx riverbankcomputing.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RiverbankcomputingcomPackage = typeof riverbankcomputingcomPackage
