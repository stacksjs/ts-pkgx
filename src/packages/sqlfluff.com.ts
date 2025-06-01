/**
 * **sqlfluff** - Crafters of fine Open Source products
 *
 * @domain `sqlfluff.com`
 *
 * @install `pkgx sqlfluff.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sqlfluffcom
 * console.log(pkg.name)        // "sqlfluff"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sqlfluff-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sqlfluffcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'sqlfluff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sqlfluff.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sqlfluff.com' as const,
  fullPath: 'sqlfluff.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sqlfluff.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SqlfluffcomPackage = typeof sqlfluffcomPackage
