/**
 * **sympy.org** - Crafters of fine Open Source products
 *
 * @domain `sympy.org`
 *
 * @install `pkgx sympy.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sympyorg
 * console.log(pkg.name)        // "sympy.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sympy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sympyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'sympy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/sympy.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sympy.org' as const,
  fullPath: 'sympy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sympy.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SympyorgPackage = typeof sympyorgPackage
