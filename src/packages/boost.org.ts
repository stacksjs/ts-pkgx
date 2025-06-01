/**
 * **boost.org** - Crafters of fine Open Source products
 *
 * @domain `boost.org`
 *
 * @install `pkgx boost.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.boostorg
 * console.log(pkg.name)        // "boost.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/boost-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const boostorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'boost.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/boost.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'boost.org' as const,
  fullPath: 'boost.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx boost.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type BoostorgPackage = typeof boostorgPackage
