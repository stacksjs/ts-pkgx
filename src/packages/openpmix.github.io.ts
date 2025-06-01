/**
 * **openpmix.github.io** - Crafters of fine Open Source products
 *
 * @domain `openpmix.github.io`
 *
 * @install `pkgx openpmix.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openpmixgithubio
 * console.log(pkg.name)        // "openpmix.github.io"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openpmix-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openpmixgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'openpmix.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/openpmix.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openpmix.github.io' as const,
  fullPath: 'openpmix.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx openpmix.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type OpenpmixgithubioPackage = typeof openpmixgithubioPackage
