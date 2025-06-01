/**
 * **imagemagick.org** - Crafters of fine Open Source products
 *
 * @domain `imagemagick.org`
 *
 * @install `pkgx imagemagick.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.imagemagickorg
 * console.log(pkg.name)        // "imagemagick.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/imagemagick-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const imagemagickorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'imagemagick.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/imagemagick.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'imagemagick.org' as const,
  fullPath: 'imagemagick.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx imagemagick.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ImagemagickorgPackage = typeof imagemagickorgPackage
