/**
 * **mupdf.com** - Crafters of fine Open Source products
 *
 * @domain `mupdf.com`
 *
 * @install `pkgx mupdf.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mupdfcom
 * console.log(pkg.name)        // "mupdf.com"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mupdf-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mupdfcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mupdf.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mupdf.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mupdf.com' as const,
  fullPath: 'mupdf.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mupdf.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MupdfcomPackage = typeof mupdfcomPackage
