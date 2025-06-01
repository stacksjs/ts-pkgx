/**
 * **netpbm.sourceforge.net** - Crafters of fine Open Source products
 *
 * @domain `netpbm.sourceforge.net`
 *
 * @install `pkgx netpbm.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.netpbmsourceforgenet
 * console.log(pkg.name)        // "netpbm.sourceforge.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/netpbm-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const netpbmsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'netpbm.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/netpbm.sourceforge.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'netpbm.sourceforge.net' as const,
  fullPath: 'netpbm.sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx netpbm.sourceforge.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NetpbmsourceforgenetPackage = typeof netpbmsourceforgenetPackage
