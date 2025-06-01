/**
 * **zrok** - Crafters of fine Open Source products
 *
 * @domain `zrok.io`
 *
 * @install `pkgx zrok.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zrokio
 * console.log(pkg.name)        // "zrok"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zrok-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zrokioPackage = {
  /**
   * The display name of this package.
   */
  name: 'zrok' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/zrok.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zrok.io' as const,
  fullPath: 'zrok.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx zrok.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ZrokioPackage = typeof zrokioPackage
