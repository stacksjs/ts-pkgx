/**
 * **cointop** - Crafters of fine Open Source products
 *
 * @domain `cointop.sh`
 *
 * @install `pkgx cointop.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cointopsh
 * console.log(pkg.name)        // "cointop"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cointop-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cointopshPackage = {
  /**
   * The display name of this package.
   */
  name: 'cointop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/cointop.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cointop.sh' as const,
  fullPath: 'cointop.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx cointop.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CointopshPackage = typeof cointopshPackage
