/**
 * **ctop** - Crafters of fine Open Source products
 *
 * @domain `ctop.sh`
 *
 * @install `pkgx ctop.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ctopsh
 * console.log(pkg.name)        // "ctop"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ctop-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ctopshPackage = {
  /**
   * The display name of this package.
   */
  name: 'ctop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ctop.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ctop.sh' as const,
  fullPath: 'ctop.sh' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ctop.sh' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CtopshPackage = typeof ctopshPackage
