/**
 * **pocket** - Crafters of fine Open Source products
 *
 * @domain `pokt.network`
 *
 * @install `pkgx pokt.network`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.poktnetwork
 * console.log(pkg.name)        // "pocket"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pokt-network.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const poktnetworkPackage = {
  /**
   * The display name of this package.
   */
  name: 'pocket' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pokt.network/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pokt.network' as const,
  fullPath: 'pokt.network' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pokt.network' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PoktnetworkPackage = typeof poktnetworkPackage
