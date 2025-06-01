/**
 * **tb** - Crafters of fine Open Source products
 *
 * @domain `tinybird.co`
 *
 * @install `pkgx tinybird.co`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tinybirdco
 * console.log(pkg.name)        // "tb"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tinybird-co.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinybirdcoPackage = {
  /**
   * The display name of this package.
   */
  name: 'tb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tinybird.co/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tinybird.co' as const,
  fullPath: 'tinybird.co' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tinybird.co' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TinybirdcoPackage = typeof tinybirdcoPackage
