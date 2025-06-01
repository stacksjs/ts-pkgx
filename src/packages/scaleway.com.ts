/**
 * **scw** - Crafters of fine Open Source products
 *
 * @domain `scaleway.com`
 *
 * @install `pkgx scaleway.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.scalewaycom
 * console.log(pkg.name)        // "scw"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/scaleway-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scalewaycomPackage = {
  /**
   * The display name of this package.
   */
  name: 'scw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/scaleway.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'scaleway.com' as const,
  fullPath: 'scaleway.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx scaleway.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ScalewaycomPackage = typeof scalewaycomPackage
