/**
 * **crystal** - Crafters of fine Open Source products
 *
 * @domain `crystal-lang.org`
 *
 * @install `pkgx crystal-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.crystallangorg
 * console.log(pkg.name)        // "crystal"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crystal-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const crystallangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'crystal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/crystal-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crystal-lang.org' as const,
  fullPath: 'crystal-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crystal-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CrystallangorgPackage = typeof crystallangorgPackage
