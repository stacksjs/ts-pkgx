/**
 * **gts.sourceforge.net** - Crafters of fine Open Source products
 *
 * @domain `gts.sourceforge.net`
 *
 * @install `pkgx gts.sourceforge.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gtssourceforgenet
 * console.log(pkg.name)        // "gts.sourceforge.net"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gts-sourceforge-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gtssourceforgenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'gts.sourceforge.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gts.sourceforge.net/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gts.sourceforge.net' as const,
  fullPath: 'gts.sourceforge.net' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gts.sourceforge.net' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GtssourceforgenetPackage = typeof gtssourceforgenetPackage
