/**
 * **lame** - Crafters of fine Open Source products
 *
 * @domain `lame.sourceforge.io`
 *
 * @install `pkgx lame.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lamesourceforgeio
 * console.log(pkg.name)        // "lame"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lame-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lamesourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'lame' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/lame.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lame.sourceforge.io' as const,
  fullPath: 'lame.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx lame.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LamesourceforgeioPackage = typeof lamesourceforgeioPackage
