/**
 * **libspng.org** - Crafters of fine Open Source products
 *
 * @domain `libspng.org`
 *
 * @install `pkgx libspng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libspngorg
 * console.log(pkg.name)        // "libspng.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libspng-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libspngorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libspng.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libspng.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libspng.org' as const,
  fullPath: 'libspng.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libspng.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibspngorgPackage = typeof libspngorgPackage
