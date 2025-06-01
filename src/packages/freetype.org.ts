/**
 * **freetype.org** - Crafters of fine Open Source products
 *
 * @domain `freetype.org`
 *
 * @install `pkgx freetype.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freetypeorg
 * console.log(pkg.name)        // "freetype.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freetype-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freetypeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'freetype.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/freetype.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freetype.org' as const,
  fullPath: 'freetype.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx freetype.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FreetypeorgPackage = typeof freetypeorgPackage
