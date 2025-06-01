/**
 * **hugo** - Crafters of fine Open Source products
 *
 * @domain `gohugo.io`
 *
 * @install `pkgx gohugo.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gohugoio
 * console.log(pkg.name)        // "hugo"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gohugo-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gohugoioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hugo' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/gohugo.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gohugo.io' as const,
  fullPath: 'gohugo.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx gohugo.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type GohugoioPackage = typeof gohugoioPackage
