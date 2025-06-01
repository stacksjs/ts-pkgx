/**
 * **biome** - Crafters of fine Open Source products
 *
 * @domain `biomejs.dev`
 *
 * @install `pkgx biomejs.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.biomejsdev
 * console.log(pkg.name)        // "biome"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/biomejs-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const biomejsdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'biome' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/biomejs.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'biomejs.dev' as const,
  fullPath: 'biomejs.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx biomejs.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BiomejsdevPackage = typeof biomejsdevPackage
