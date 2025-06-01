/**
 * **rtmpdump** - Crafters of fine Open Source products
 *
 * @domain `rtmpdump.mplayerhq.hu`
 *
 * @install `pkgx rtmpdump.mplayerhq.hu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rtmpdumpmplayerhqhu
 * console.log(pkg.name)        // "rtmpdump"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rtmpdump-mplayerhq-hu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rtmpdumpmplayerhqhuPackage = {
  /**
   * The display name of this package.
   */
  name: 'rtmpdump' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rtmpdump.mplayerhq.hu/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rtmpdump.mplayerhq.hu' as const,
  fullPath: 'rtmpdump.mplayerhq.hu' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rtmpdump.mplayerhq.hu' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RtmpdumpmplayerhqhuPackage = typeof rtmpdumpmplayerhqhuPackage
