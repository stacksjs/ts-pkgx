/**
 * **gif** - Crafters of fine Open Source products
 *
 * @domain `giflib.sourceforge.io`
 *
 * @install `pkgx giflib.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.giflibsourceforgeio
 * console.log(pkg.name)        // "gif"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/giflib-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const giflibsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'gif' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/giflib.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'giflib.sourceforge.io' as const,
  fullPath: 'giflib.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx giflib.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GiflibsourceforgeioPackage = typeof giflibsourceforgeioPackage
