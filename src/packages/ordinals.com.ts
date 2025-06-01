/**
 * **ord** - Crafters of fine Open Source products
 *
 * @domain `ordinals.com`
 *
 * @install `pkgx ordinals.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ordinalscom
 * console.log(pkg.name)        // "ord"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ordinals-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ordinalscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ord' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ordinals.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ordinals.com' as const,
  fullPath: 'ordinals.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ordinals.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OrdinalscomPackage = typeof ordinalscomPackage
