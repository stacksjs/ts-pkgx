/**
 * **depot** - Crafters of fine Open Source products
 *
 * @domain `depot.dev`
 *
 * @install `pkgx depot.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.depotdev
 * console.log(pkg.name)        // "depot"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/depot-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const depotdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'depot' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/depot.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'depot.dev' as const,
  fullPath: 'depot.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx depot.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type DepotdevPackage = typeof depotdevPackage
