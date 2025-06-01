/**
 * **glew.sourceforge.io** - Crafters of fine Open Source products
 *
 * @domain `glew.sourceforge.io`
 *
 * @install `pkgx glew.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.glewsourceforgeio
 * console.log(pkg.name)        // "glew.sourceforge.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/glew-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const glewsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'glew.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/glew.sourceforge.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'glew.sourceforge.io' as const,
  fullPath: 'glew.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx glew.sourceforge.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GlewsourceforgeioPackage = typeof glewsourceforgeioPackage
