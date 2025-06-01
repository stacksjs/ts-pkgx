/**
 * **werf** - Crafters of fine Open Source products
 *
 * @domain `werf.io`
 *
 * @install `pkgx werf.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.werfio
 * console.log(pkg.name)        // "werf"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/werf-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const werfioPackage = {
  /**
   * The display name of this package.
   */
  name: 'werf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/werf.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'werf.io' as const,
  fullPath: 'werf.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx werf.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type WerfioPackage = typeof werfioPackage
