/**
 * **cairo-trace** - Crafters of fine Open Source products
 *
 * @domain `cairographics.org`
 *
 * @install `pkgx cairographics.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cairographicsorg
 * console.log(pkg.name)        // "cairo-trace"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cairographics-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cairographicsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cairo-trace' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cairographics.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cairographics.org' as const,
  fullPath: 'cairographics.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cairographics.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CairographicsorgPackage = typeof cairographicsorgPackage
