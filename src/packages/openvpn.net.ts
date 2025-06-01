/**
 * **openvpn** - Crafters of fine Open Source products
 *
 * @domain `openvpn.net`
 *
 * @install `pkgx openvpn.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openvpnnet
 * console.log(pkg.name)        // "openvpn"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openvpn-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openvpnnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'openvpn' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openvpn.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openvpn.net' as const,
  fullPath: 'openvpn.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openvpn.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenvpnnetPackage = typeof openvpnnetPackage
