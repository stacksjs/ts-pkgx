/**
 * **railway** - Crafters of fine Open Source products
 *
 * @domain `railway.app`
 *
 * @install `pkgx railway.app`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.railwayapp
 * console.log(pkg.name)        // "railway"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/railway-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const railwayappPackage = {
  /**
   * The display name of this package.
   */
  name: 'railway' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/railway.app/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'railway.app' as const,
  fullPath: 'railway.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx railway.app' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RailwayappPackage = typeof railwayappPackage
