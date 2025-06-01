/**
 * **zip** - Crafters of fine Open Source products
 *
 * @domain `libzip.org`
 *
 * @install `pkgx libzip.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libziporg
 * console.log(pkg.name)        // "zip"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libzip-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libziporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'zip' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libzip.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libzip.org' as const,
  fullPath: 'libzip.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libzip.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibziporgPackage = typeof libziporgPackage
