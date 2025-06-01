/**
 * **sniffnet** - Crafters of fine Open Source products
 *
 * @domain `sniffnet.net`
 *
 * @install `pkgx sniffnet.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sniffnetnet
 * console.log(pkg.name)        // "sniffnet"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sniffnet-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sniffnetnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'sniffnet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sniffnet.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sniffnet.net' as const,
  fullPath: 'sniffnet.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sniffnet.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SniffnetnetPackage = typeof sniffnetnetPackage
