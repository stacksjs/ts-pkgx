/**
 * **raccoin** - Crafters of fine Open Source products
 *
 * @domain `raccoin.org`
 *
 * @install `pkgx raccoin.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.raccoinorg
 * console.log(pkg.name)        // "raccoin"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/raccoin-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const raccoinorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'raccoin' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/raccoin.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'raccoin.org' as const,
  fullPath: 'raccoin.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx raccoin.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RaccoinorgPackage = typeof raccoinorgPackage
