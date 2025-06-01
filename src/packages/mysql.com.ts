/**
 * **mysql.com** - Crafters of fine Open Source products
 *
 * @domain `mysql.com`
 *
 * @install `pkgx mysql.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mysqlcom
 * console.log(pkg.name)        // "mysql.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mysql-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mysqlcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mysql.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mysql.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mysql.com' as const,
  fullPath: 'mysql.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mysql.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MysqlcomPackage = typeof mysqlcomPackage
