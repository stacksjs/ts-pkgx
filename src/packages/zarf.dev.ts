/**
 * **zarf** - Crafters of fine Open Source products
 *
 * @domain `zarf.dev`
 *
 * @install `pkgx zarf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.zarfdev
 * console.log(pkg.name)        // "zarf"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/zarf-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zarfdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'zarf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/zarf.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'zarf.dev' as const,
  fullPath: 'zarf.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx zarf.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type ZarfdevPackage = typeof zarfdevPackage
