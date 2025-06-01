/**
 * **xmlwf** - Crafters of fine Open Source products
 *
 * @domain `libexpat.github.io`
 *
 * @install `pkgx libexpat.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libexpatgithubio
 * console.log(pkg.name)        // "xmlwf"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libexpat-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libexpatgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'xmlwf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/libexpat.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libexpat.github.io' as const,
  fullPath: 'libexpat.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libexpat.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibexpatgithubioPackage = typeof libexpatgithubioPackage
