/**
 * **prql** - Crafters of fine Open Source products
 *
 * @domain `prql-lang.org`
 *
 * @install `pkgx prql-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prqllangorg
 * console.log(pkg.name)        // "prql"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prql-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prqllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'prql' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/prql-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prql-lang.org' as const,
  fullPath: 'prql-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx prql-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PrqllangorgPackage = typeof prqllangorgPackage
