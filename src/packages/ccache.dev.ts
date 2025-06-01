/**
 * **ccache** - Crafters of fine Open Source products
 *
 * @domain `ccache.dev`
 *
 * @install `pkgx ccache.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ccachedev
 * console.log(pkg.name)        // "ccache"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ccache-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ccachedevPackage = {
  /**
   * The display name of this package.
   */
  name: 'ccache' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/ccache.dev/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ccache.dev' as const,
  fullPath: 'ccache.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx ccache.dev' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type CcachedevPackage = typeof ccachedevPackage
