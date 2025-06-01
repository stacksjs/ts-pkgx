/**
 * **libpng.org** - Crafters of fine Open Source products
 *
 * @domain `libpng.org`
 *
 * @install `pkgx libpng.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libpngorg
 * console.log(pkg.name)        // "libpng.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libpng-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libpngorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libpng.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libpng.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libpng.org' as const,
  fullPath: 'libpng.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libpng.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibpngorgPackage = typeof libpngorgPackage
