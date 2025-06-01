/**
 * **cedarpolicy.com** - Go home.
 *
 * @domain `cedarpolicy.com`
 *
 * @install `pkgx cedarpolicy.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cedarpolicycom
 * console.log(pkg.name)        // "cedarpolicy.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cedarpolicy-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cedarpolicycomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/cedarpolicy.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cedarpolicy.com' as const,
  fullPath: 'cedarpolicy.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cedarpolicy.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CedarpolicycomPackage = typeof cedarpolicycomPackage
