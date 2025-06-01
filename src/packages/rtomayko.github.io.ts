/**
 * **rtomayko.github.io** - Go home.
 *
 * @domain `rtomayko.github.io`
 *
 * @install `pkgx rtomayko.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rtomaykogithubio
 * console.log(pkg.name)        // "rtomayko.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rtomayko-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rtomaykogithubioPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/rtomayko.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rtomayko.github.io' as const,
  fullPath: 'rtomayko.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx rtomayko.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type RtomaykogithubioPackage = typeof rtomaykogithubioPackage
