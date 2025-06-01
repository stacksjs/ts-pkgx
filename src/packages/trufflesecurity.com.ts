/**
 * **trufflesecurity.com** - Go home.
 *
 * @domain `trufflesecurity.com`
 *
 * @install `pkgx trufflesecurity.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.trufflesecuritycom
 * console.log(pkg.name)        // "trufflesecurity.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/trufflesecurity-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const trufflesecuritycomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/trufflesecurity.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'trufflesecurity.com' as const,
  fullPath: 'trufflesecurity.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx trufflesecurity.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TrufflesecuritycomPackage = typeof trufflesecuritycomPackage
