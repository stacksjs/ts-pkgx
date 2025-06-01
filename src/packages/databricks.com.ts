/**
 * **databricks** - Crafters of fine Open Source products
 *
 * @domain `databricks.com`
 *
 * @install `pkgx databricks.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.databrickscom
 * console.log(pkg.name)        // "databricks"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/databricks-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const databrickscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'databricks' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/databricks.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'databricks.com' as const,
  fullPath: 'databricks.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx databricks.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DatabrickscomPackage = typeof databrickscomPackage
