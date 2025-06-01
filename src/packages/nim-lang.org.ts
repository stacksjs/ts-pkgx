/**
 * **nim-lang.org** - Crafters of fine Open Source products
 *
 * @domain `nim-lang.org`
 *
 * @install `pkgx nim-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nimlangorg
 * console.log(pkg.name)        // "nim-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nim-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nimlangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nim-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/nim-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nim-lang.org' as const,
  fullPath: 'nim-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx nim-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NimlangorgPackage = typeof nimlangorgPackage
