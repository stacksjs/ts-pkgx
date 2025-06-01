/**
 * **julia** - Crafters of fine Open Source products
 *
 * @domain `julialang.org`
 *
 * @install `pkgx julialang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.julialangorg
 * console.log(pkg.name)        // "julia"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/julialang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const julialangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'julia' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/julialang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'julialang.org' as const,
  fullPath: 'julialang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx julialang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type JulialangorgPackage = typeof julialangorgPackage
