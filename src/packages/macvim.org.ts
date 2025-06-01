/**
 * **macvim.org** - Crafters of fine Open Source products
 *
 * @domain `macvim.org`
 *
 * @install `pkgx macvim.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.macvimorg
 * console.log(pkg.name)        // "macvim.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/macvim-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const macvimorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'macvim.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/macvim.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'macvim.org' as const,
  fullPath: 'macvim.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx macvim.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MacvimorgPackage = typeof macvimorgPackage
