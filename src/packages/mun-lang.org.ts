/**
 * **mun** - Crafters of fine Open Source products
 *
 * @domain `mun-lang.org`
 *
 * @install `pkgx mun-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.munlangorg
 * console.log(pkg.name)        // "mun"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mun-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const munlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mun' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/mun-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mun-lang.org' as const,
  fullPath: 'mun-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx mun-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MunlangorgPackage = typeof munlangorgPackage
