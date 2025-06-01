/**
 * **duckdb** - Crafters of fine Open Source products
 *
 * @domain `duckdb.org`
 *
 * @install `pkgx duckdb.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.duckdborg
 * console.log(pkg.name)        // "duckdb"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/duckdb-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duckdborgPackage = {
  /**
   * The display name of this package.
   */
  name: 'duckdb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/duckdb.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'duckdb.org' as const,
  fullPath: 'duckdb.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx duckdb.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DuckdborgPackage = typeof duckdborgPackage
