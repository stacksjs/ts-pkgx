/**
 * **authzed.com** - Go home.
 *
 * @domain `authzed.com`
 *
 * @install `pkgx authzed.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.authzedcom
 * console.log(pkg.name)        // "authzed.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/authzed-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const authzedcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/authzed.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'authzed.com' as const,
  fullPath: 'authzed.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx authzed.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AuthzedcomPackage = typeof authzedcomPackage
