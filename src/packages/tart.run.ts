/**
 * **tart** - Crafters of fine Open Source products
 *
 * @domain `tart.run`
 *
 * @install `pkgx tart.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tartrun
 * console.log(pkg.name)        // "tart"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tart-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tartrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'tart' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tart.run/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tart.run' as const,
  fullPath: 'tart.run' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tart.run' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TartrunPackage = typeof tartrunPackage
