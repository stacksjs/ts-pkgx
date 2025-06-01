/**
 * **freeglut.sourceforge.io** - Crafters of fine Open Source products
 *
 * @domain `freeglut.sourceforge.io`
 *
 * @install `pkgx freeglut.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freeglutsourceforgeio
 * console.log(pkg.name)        // "freeglut.sourceforge.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freeglut-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freeglutsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'freeglut.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/freeglut.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freeglut.sourceforge.io' as const,
  fullPath: 'freeglut.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx freeglut.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FreeglutsourceforgeioPackage = typeof freeglutsourceforgeioPackage
