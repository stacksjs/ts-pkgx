/**
 * **rhash.sourceforge.net** - Crafters of fine Open Source products
 *
 * @domain `rhash.sourceforge.net`
 *
 * @install `pkgx rhash.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rhashsourceforgenet
 * console.log(pkg.name)        // "rhash.sourceforge.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rhash-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rhashsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'rhash.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rhash.sourceforge.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rhash.sourceforge.net' as const,
  fullPath: 'rhash.sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rhash.sourceforge.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RhashsourceforgenetPackage = typeof rhashsourceforgenetPackage
