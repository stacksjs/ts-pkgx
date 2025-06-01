/**
 * **ruby-lang.org** - Crafters of fine Open Source products
 *
 * @domain `ruby-lang.org`
 *
 * @install `pkgx ruby-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rubylangorg
 * console.log(pkg.name)        // "ruby-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ruby-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rubylangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruby-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ruby-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ruby-lang.org' as const,
  fullPath: 'ruby-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ruby-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RubylangorgPackage = typeof rubylangorgPackage
