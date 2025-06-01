/**
 * **mz** - Crafters of fine Open Source products
 *
 * @domain `materialize.com`
 *
 * @install `pkgx materialize.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.materializecom
 * console.log(pkg.name)        // "mz"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/materialize-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const materializecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mz' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/materialize.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'materialize.com' as const,
  fullPath: 'materialize.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx materialize.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type MaterializecomPackage = typeof materializecomPackage
