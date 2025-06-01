/**
 * **wimlib.net** - Crafters of fine Open Source products
 *
 * @domain `wimlib.net`
 *
 * @install `pkgx wimlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wimlibnet
 * console.log(pkg.name)        // "wimlib.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wimlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wimlibnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'wimlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/wimlib.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wimlib.net' as const,
  fullPath: 'wimlib.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx wimlib.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WimlibnetPackage = typeof wimlibnetPackage
