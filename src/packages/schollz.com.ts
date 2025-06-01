/**
 * **schollz.com** - Go home.
 *
 * @domain `schollz.com`
 *
 * @install `pkgx schollz.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.schollzcom
 * console.log(pkg.name)        // "schollz.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/schollz-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const schollzcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/schollz.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'schollz.com' as const,
  fullPath: 'schollz.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx schollz.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SchollzcomPackage = typeof schollzcomPackage
