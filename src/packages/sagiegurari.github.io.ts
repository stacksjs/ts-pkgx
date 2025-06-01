/**
 * **sagiegurari.github.io** - Go home.
 *
 * @domain `sagiegurari.github.io`
 *
 * @install `pkgx sagiegurari.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sagiegurarigithubio
 * console.log(pkg.name)        // "sagiegurari.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sagiegurari-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sagiegurarigithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/sagiegurari.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sagiegurari.github.io' as const,
  fullPath: 'sagiegurari.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx sagiegurari.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type SagiegurarigithubioPackage = typeof sagiegurarigithubioPackage
