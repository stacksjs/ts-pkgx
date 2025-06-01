/**
 * **kaggle** - Crafters of fine Open Source products
 *
 * @domain `kaggle.com`
 *
 * @install `pkgx kaggle.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kagglecom
 * console.log(pkg.name)        // "kaggle"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kaggle-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kagglecomPackage = {
  /**
   * The display name of this package.
   */
  name: 'kaggle' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kaggle.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kaggle.com' as const,
  fullPath: 'kaggle.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kaggle.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KagglecomPackage = typeof kagglecomPackage
