/**
 * **upx** - Crafters of fine Open Source products
 *
 * @domain `upx.github.io`
 *
 * @install `pkgx upx.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.upxgithubio
 * console.log(pkg.name)        // "upx"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/upx-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upxgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'upx' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/upx.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'upx.github.io' as const,
  fullPath: 'upx.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx upx.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UpxgithubioPackage = typeof upxgithubioPackage
