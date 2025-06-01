/**
 * **atlas** - Crafters of fine Open Source products
 *
 * @domain `atlasgo.io`
 *
 * @install `pkgx atlasgo.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.atlasgoio
 * console.log(pkg.name)        // "atlas"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/atlasgo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const atlasgoioPackage = {
  /**
   * The display name of this package.
   */
  name: 'atlas' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/atlasgo.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'atlasgo.io' as const,
  fullPath: 'atlasgo.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx atlasgo.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type AtlasgoioPackage = typeof atlasgoioPackage
