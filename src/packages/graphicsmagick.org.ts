/**
 * **gm** - Crafters of fine Open Source products
 *
 * @domain `graphicsmagick.org`
 *
 * @install `pkgx graphicsmagick.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphicsmagickorg
 * console.log(pkg.name)        // "gm"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphicsmagick-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphicsmagickorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'gm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/graphicsmagick.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphicsmagick.org' as const,
  fullPath: 'graphicsmagick.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx graphicsmagick.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GraphicsmagickorgPackage = typeof graphicsmagickorgPackage
