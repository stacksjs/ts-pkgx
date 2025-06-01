/**
 * **libarchive.org** - Crafters of fine Open Source products
 *
 * @domain `libarchive.org`
 *
 * @install `pkgx libarchive.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libarchiveorg
 * console.log(pkg.name)        // "libarchive.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libarchive-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libarchiveorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libarchive.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libarchive.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libarchive.org' as const,
  fullPath: 'libarchive.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libarchive.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibarchiveorgPackage = typeof libarchiveorgPackage
