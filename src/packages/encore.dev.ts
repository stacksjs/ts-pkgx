/**
 * **encore.dev** - Crafters of fine Open Source products
 *
 * @domain `encore.dev`
 *
 * @install `pkgx encore.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.encoredev
 * console.log(pkg.name)        // "encore.dev"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/encore-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const encoredevPackage = {
  /**
   * The display name of this package.
   */
  name: 'encore.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/encore.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'encore.dev' as const,
  fullPath: 'encore.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx encore.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type EncoredevPackage = typeof encoredevPackage
