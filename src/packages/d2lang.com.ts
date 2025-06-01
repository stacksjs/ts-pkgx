/**
 * **d2** - Crafters of fine Open Source products
 *
 * @domain `d2lang.com`
 *
 * @install `pkgx d2lang.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.d2langcom
 * console.log(pkg.name)        // "d2"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/d2lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const d2langcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'd2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/d2lang.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'd2lang.com' as const,
  fullPath: 'd2lang.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx d2lang.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type D2langcomPackage = typeof d2langcomPackage
