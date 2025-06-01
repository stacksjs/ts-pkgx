/**
 * **spacetime** - Crafters of fine Open Source products
 *
 * @domain `spacetimedb.com`
 *
 * @install `pkgx spacetimedb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.spacetimedbcom
 * console.log(pkg.name)        // "spacetime"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/spacetimedb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spacetimedbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'spacetime' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/spacetimedb.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'spacetimedb.com' as const,
  fullPath: 'spacetimedb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx spacetimedb.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SpacetimedbcomPackage = typeof spacetimedbcomPackage
