/**
 * **terratag** - Crafters of fine Open Source products
 *
 * @domain `terratag.io`
 *
 * @install `pkgx terratag.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.terratagio
 * console.log(pkg.name)        // "terratag"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/terratag-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const terratagioPackage = {
  /**
   * The display name of this package.
   */
  name: 'terratag' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/terratag.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'terratag.io' as const,
  fullPath: 'terratag.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx terratag.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TerratagioPackage = typeof terratagioPackage
