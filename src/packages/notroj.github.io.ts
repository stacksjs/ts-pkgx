/**
 * **notroj.github.io** - Go home.
 *
 * @domain `notroj.github.io`
 *
 * @install `pkgx notroj.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.notrojgithubio
 * console.log(pkg.name)        // "notroj.github.io"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/notroj-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const notrojgithubioPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/notroj.github.io/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'notroj.github.io' as const,
  fullPath: 'notroj.github.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx notroj.github.io' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type NotrojgithubioPackage = typeof notrojgithubioPackage
