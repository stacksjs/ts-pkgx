/**
 * **cog** - Crafters of fine Open Source products
 *
 * @domain `cocogitto.io`
 *
 * @install `pkgx cocogitto.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cocogittoio
 * console.log(pkg.name)        // "cog"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cocogitto-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cocogittoioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cocogitto.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cocogitto.io' as const,
  fullPath: 'cocogitto.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cocogitto.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CocogittoioPackage = typeof cocogittoioPackage
