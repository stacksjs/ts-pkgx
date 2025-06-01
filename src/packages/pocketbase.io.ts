/**
 * **pocketbase** - Crafters of fine Open Source products
 *
 * @domain `pocketbase.io`
 *
 * @install `pkgx pocketbase.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pocketbaseio
 * console.log(pkg.name)        // "pocketbase"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pocketbase-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pocketbaseioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pocketbase' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pocketbase.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pocketbase.io' as const,
  fullPath: 'pocketbase.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pocketbase.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PocketbaseioPackage = typeof pocketbaseioPackage
