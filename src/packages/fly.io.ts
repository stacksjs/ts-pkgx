/**
 * **fly** - Crafters of fine Open Source products
 *
 * @domain `fly.io`
 *
 * @install `pkgx fly.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.flyio
 * console.log(pkg.name)        // "fly"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fly-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const flyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'fly' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/fly.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fly.io' as const,
  fullPath: 'fly.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx fly.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FlyioPackage = typeof flyioPackage
