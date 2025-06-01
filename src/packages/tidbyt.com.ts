/**
 * **pixlet** - Crafters of fine Open Source products
 *
 * @domain `tidbyt.com`
 *
 * @install `pkgx tidbyt.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tidbytcom
 * console.log(pkg.name)        // "pixlet"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tidbyt-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tidbytcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixlet' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/tidbyt.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tidbyt.com' as const,
  fullPath: 'tidbyt.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx tidbyt.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type TidbytcomPackage = typeof tidbytcomPackage
