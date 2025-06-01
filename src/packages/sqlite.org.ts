/**
 * **sqlite3** - Crafters of fine Open Source products
 *
 * @domain `sqlite.org`
 *
 * @install `pkgx sqlite.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqliteorg
 * console.log(pkg.name)        // "sqlite3"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlite-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqliteorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlite3' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sqlite.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlite.org' as const,
  fullPath: 'sqlite.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sqlite.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SqliteorgPackage = typeof sqliteorgPackage
