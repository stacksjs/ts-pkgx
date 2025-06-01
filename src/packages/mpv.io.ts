/**
 * **mpv** - Crafters of fine Open Source products
 *
 * @domain `mpv.io`
 *
 * @install `pkgx mpv.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mpvio
 * console.log(pkg.name)        // "mpv"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mpv-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mpvioPackage = {
  /**
   * The display name of this package.
   */
  name: 'mpv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mpv.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mpv.io' as const,
  fullPath: 'mpv.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mpv.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MpvioPackage = typeof mpvioPackage
