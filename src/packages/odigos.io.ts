/**
 * **odigos** - Crafters of fine Open Source products
 *
 * @domain `odigos.io`
 *
 * @install `pkgx odigos.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.odigosio
 * console.log(pkg.name)        // "odigos"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/odigos-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const odigosioPackage = {
  /**
   * The display name of this package.
   */
  name: 'odigos' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/odigos.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'odigos.io' as const,
  fullPath: 'odigos.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx odigos.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OdigosioPackage = typeof odigosioPackage
