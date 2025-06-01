/**
 * **edgedb** - Crafters of fine Open Source products
 *
 * @domain `edgedb.com`
 *
 * @install `pkgx edgedb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.edgedbcom
 * console.log(pkg.name)        // "edgedb"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/edgedb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const edgedbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'edgedb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/edgedb.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'edgedb.com' as const,
  fullPath: 'edgedb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx edgedb.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EdgedbcomPackage = typeof edgedbcomPackage
