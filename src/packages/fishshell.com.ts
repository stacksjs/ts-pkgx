/**
 * **fish** - Crafters of fine Open Source products
 *
 * @domain `fishshell.com`
 *
 * @install `pkgx fishshell.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fishshellcom
 * console.log(pkg.name)        // "fish"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fishshell-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fishshellcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'fish' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fishshell.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fishshell.com' as const,
  fullPath: 'fishshell.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fishshell.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FishshellcomPackage = typeof fishshellcomPackage
