/**
 * **rubocop** - Crafters of fine Open Source products
 *
 * @domain `rubocop.org`
 *
 * @install `pkgx rubocop.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubocoporg
 * console.log(pkg.name)        // "rubocop"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubocop-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubocoporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rubocop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rubocop.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubocop.org' as const,
  fullPath: 'rubocop.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rubocop.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RubocoporgPackage = typeof rubocoporgPackage
