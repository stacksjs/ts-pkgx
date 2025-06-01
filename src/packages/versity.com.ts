/**
 * **versity.com** - Go home.
 *
 * @domain `versity.com`
 *
 * @install `pkgx versity.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.versitycom
 * console.log(pkg.name)        // "versity.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/versity-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const versitycomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/versity.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'versity.com' as const,
  fullPath: 'versity.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx versity.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VersitycomPackage = typeof versitycomPackage
