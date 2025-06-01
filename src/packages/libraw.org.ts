/**
 * **libraw.org** - Crafters of fine Open Source products
 *
 * @domain `libraw.org`
 *
 * @install `pkgx libraw.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libraworg
 * console.log(pkg.name)        // "libraw.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libraw-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libraworgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libraw.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libraw.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libraw.org' as const,
  fullPath: 'libraw.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libraw.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibraworgPackage = typeof libraworgPackage
