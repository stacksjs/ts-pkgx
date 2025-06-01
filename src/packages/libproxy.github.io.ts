/**
 * **libproxy.github.io** - Go home.
 *
 * @domain `libproxy.github.io`
 *
 * @install `pkgx libproxy.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libproxygithubio
 * console.log(pkg.name)        // "libproxy.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libproxy-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libproxygithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/libproxy.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libproxy.github.io' as const,
  fullPath: 'libproxy.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx libproxy.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type LibproxygithubioPackage = typeof libproxygithubioPackage
