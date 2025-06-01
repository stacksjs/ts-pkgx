/**
 * **vips** - Crafters of fine Open Source products
 *
 * @domain `libvips.org`
 *
 * @install `pkgx libvips.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libvipsorg
 * console.log(pkg.name)        // "vips"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libvips-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libvipsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'vips' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libvips.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libvips.org' as const,
  fullPath: 'libvips.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libvips.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibvipsorgPackage = typeof libvipsorgPackage
