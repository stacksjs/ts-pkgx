/**
 * **xpra** - Crafters of fine Open Source products
 *
 * @domain `xpra.org`
 *
 * @install `pkgx xpra.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xpraorg
 * console.log(pkg.name)        // "xpra"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xpra-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xpraorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'xpra' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/xpra.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xpra.org' as const,
  fullPath: 'xpra.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx xpra.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type XpraorgPackage = typeof xpraorgPackage
