/**
 * **veracode.com** - Go home.
 *
 * @domain `veracode.com`
 *
 * @install `pkgx veracode.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.veracodecom
 * console.log(pkg.name)        // "veracode.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/veracode-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const veracodecomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/veracode.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'veracode.com' as const,
  fullPath: 'veracode.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx veracode.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VeracodecomPackage = typeof veracodecomPackage
