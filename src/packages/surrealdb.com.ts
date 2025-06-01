/**
 * **surreal** - Crafters of fine Open Source products
 *
 * @domain `surrealdb.com`
 *
 * @install `pkgx surrealdb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.surrealdbcom
 * console.log(pkg.name)        // "surreal"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/surrealdb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const surrealdbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'surreal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/surrealdb.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'surrealdb.com' as const,
  fullPath: 'surrealdb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx surrealdb.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SurrealdbcomPackage = typeof surrealdbcomPackage
