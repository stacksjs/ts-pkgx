/**
 * **rubygems.org** - Crafters of fine Open Source products
 *
 * @domain `rubygems.org`
 *
 * @install `pkgx rubygems.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubygemsorg
 * console.log(pkg.name)        // "rubygems.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rubygems-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubygemsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rubygems.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rubygems.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rubygems.org' as const,
  fullPath: 'rubygems.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rubygems.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RubygemsorgPackage = typeof rubygemsorgPackage
