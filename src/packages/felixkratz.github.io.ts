/**
 * **felixkratz.github.io** - Go home.
 *
 * @domain `felixkratz.github.io`
 *
 * @install `pkgx felixkratz.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.felixkratzgithubio
 * console.log(pkg.name)        // "felixkratz.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/felixkratz-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const felixkratzgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/felixkratz.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'felixkratz.github.io' as const,
  fullPath: 'felixkratz.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx felixkratz.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type FelixkratzgithubioPackage = typeof felixkratzgithubioPackage
