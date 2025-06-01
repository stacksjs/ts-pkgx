/**
 * **gnuplot** - Crafters of fine Open Source products
 *
 * @domain `gnuplot.info`
 *
 * @install `pkgx gnuplot.info`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuplotinfo
 * console.log(pkg.name)        // "gnuplot"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnuplot-info.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuplotinfoPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnuplot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gnuplot.info/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnuplot.info' as const,
  fullPath: 'gnuplot.info' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gnuplot.info' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GnuplotinfoPackage = typeof gnuplotinfoPackage
