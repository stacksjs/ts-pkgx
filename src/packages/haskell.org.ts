/**
 * **haskell.org** - Crafters of fine Open Source products
 *
 * @domain `haskell.org`
 *
 * @install `pkgx haskell.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.haskellorg
 * console.log(pkg.name)        // "haskell.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/haskell-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const haskellorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'haskell.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/haskell.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'haskell.org' as const,
  fullPath: 'haskell.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx haskell.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HaskellorgPackage = typeof haskellorgPackage
