/**
 * **soxr.sourceforge.net** - Crafters of fine Open Source products
 *
 * @domain `soxr.sourceforge.net`
 *
 * @install `pkgx soxr.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.soxrsourceforgenet
 * console.log(pkg.name)        // "soxr.sourceforge.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/soxr-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const soxrsourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'soxr.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/soxr.sourceforge.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'soxr.sourceforge.net' as const,
  fullPath: 'soxr.sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx soxr.sourceforge.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SoxrsourceforgenetPackage = typeof soxrsourceforgenetPackage
