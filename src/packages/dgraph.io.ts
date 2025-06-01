/**
 * **dgraph** - Crafters of fine Open Source products
 *
 * @domain `dgraph.io`
 *
 * @install `pkgx dgraph.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dgraphio
 * console.log(pkg.name)        // "dgraph"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dgraph-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dgraphioPackage = {
  /**
   * The display name of this package.
   */
  name: 'dgraph' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/dgraph.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dgraph.io' as const,
  fullPath: 'dgraph.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx dgraph.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DgraphioPackage = typeof dgraphioPackage
