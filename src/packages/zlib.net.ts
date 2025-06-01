/**
 * **zlib.net** - Crafters of fine Open Source products
 *
 * @domain `zlib.net`
 *
 * @install `pkgx zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zlibnet
 * console.log(pkg.name)        // "zlib.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zlib-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zlibnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'zlib.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/zlib.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zlib.net' as const,
  fullPath: 'zlib.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx zlib.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ZlibnetPackage = typeof zlibnetPackage
