/**
 * **musepack.net** - Crafters of fine Open Source products
 *
 * @domain `musepack.net`
 *
 * @install `pkgx musepack.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.musepacknet
 * console.log(pkg.name)        // "musepack.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/musepack-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const musepacknetPackage = {
  /**
   * The display name of this package.
   */
  name: 'musepack.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/musepack.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'musepack.net' as const,
  fullPath: 'musepack.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx musepack.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MusepacknetPackage = typeof musepacknetPackage
