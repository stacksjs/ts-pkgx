/**
 * **hjson** - Crafters of fine Open Source products
 *
 * @domain `hjson.github.io`
 *
 * @install `pkgx hjson.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hjsongithubio
 * console.log(pkg.name)        // "hjson"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hjson-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hjsongithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hjson' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/hjson.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hjson.github.io' as const,
  fullPath: 'hjson.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hjson.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type HjsongithubioPackage = typeof hjsongithubioPackage
