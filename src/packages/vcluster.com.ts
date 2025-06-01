/**
 * **vcluster** - Crafters of fine Open Source products
 *
 * @domain `vcluster.com`
 *
 * @install `pkgx vcluster.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vclustercom
 * console.log(pkg.name)        // "vcluster"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vcluster-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vclustercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'vcluster' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/vcluster.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vcluster.com' as const,
  fullPath: 'vcluster.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx vcluster.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type VclustercomPackage = typeof vclustercomPackage
