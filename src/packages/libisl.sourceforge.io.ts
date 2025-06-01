/**
 * **libisl.sourceforge.io** - Crafters of fine Open Source products
 *
 * @domain `libisl.sourceforge.io`
 *
 * @install `pkgx libisl.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libislsourceforgeio
 * console.log(pkg.name)        // "libisl.sourceforge.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libisl-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libislsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libisl.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libisl.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libisl.sourceforge.io' as const,
  fullPath: 'libisl.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libisl.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibislsourceforgeioPackage = typeof libislsourceforgeioPackage
