/**
 * **pkl-lang.org** - Crafters of fine Open Source products
 *
 * @domain `pkl-lang.org`
 *
 * @install `pkgx pkl-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkllangorg
 * console.log(pkg.name)        // "pkl-lang.org"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkl-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkl-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pkl-lang.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkl-lang.org' as const,
  fullPath: 'pkl-lang.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pkl-lang.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PkllangorgPackage = typeof pkllangorgPackage
