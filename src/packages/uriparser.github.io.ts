/**
 * **uriparse** - Crafters of fine Open Source products
 *
 * @domain `uriparser.github.io`
 *
 * @install `pkgx uriparser.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.uriparsergithubio
 * console.log(pkg.name)        // "uriparse"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/uriparser-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const uriparsergithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'uriparse' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/uriparser.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'uriparser.github.io' as const,
  fullPath: 'uriparser.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx uriparser.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type UriparsergithubioPackage = typeof uriparsergithubioPackage
