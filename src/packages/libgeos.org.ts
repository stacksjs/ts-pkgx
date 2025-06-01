/**
 * **geos-config** - Crafters of fine Open Source products
 *
 * @domain `libgeos.org`
 *
 * @install `pkgx libgeos.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libgeosorg
 * console.log(pkg.name)        // "geos-config"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libgeos-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libgeosorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'geos-config' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libgeos.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libgeos.org' as const,
  fullPath: 'libgeos.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libgeos.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibgeosorgPackage = typeof libgeosorgPackage
