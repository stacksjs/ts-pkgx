/**
 * **mariadb.com** - Go home.
 *
 * @domain `mariadb.com`
 *
 * @install `pkgx mariadb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mariadbcom
 * console.log(pkg.name)        // "mariadb.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mariadb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mariadbcomPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/mariadb.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mariadb.com' as const,
  fullPath: 'mariadb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mariadb.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MariadbcomPackage = typeof mariadbcomPackage
