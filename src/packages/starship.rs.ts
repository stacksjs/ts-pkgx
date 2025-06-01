/**
 * **starship** - Crafters of fine Open Source products
 *
 * @domain `starship.rs`
 *
 * @install `pkgx starship.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.starshiprs
 * console.log(pkg.name)        // "starship"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/starship-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const starshiprsPackage = {
  /**
   * The display name of this package.
   */
  name: 'starship' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/starship.rs/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'starship.rs' as const,
  fullPath: 'starship.rs' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx starship.rs' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type StarshiprsPackage = typeof starshiprsPackage
