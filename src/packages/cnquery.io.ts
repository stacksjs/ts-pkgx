/**
 * **cnquery** - Crafters of fine Open Source products
 *
 * @domain `cnquery.io`
 *
 * @install `pkgx cnquery.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cnqueryio
 * console.log(pkg.name)        // "cnquery"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cnquery-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cnqueryioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cnquery' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cnquery.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cnquery.io' as const,
  fullPath: 'cnquery.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cnquery.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CnqueryioPackage = typeof cnqueryioPackage
